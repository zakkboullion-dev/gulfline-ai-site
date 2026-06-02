'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

interface Message {
  role: 'user' | 'assistant'
  content: string
  links?: { href: string; label: string }[]
  isLead?: boolean
}

const WELCOME: Message = {
  role: 'assistant',
  content: "Hey — I'm Bart, Gulfline AI's assistant. Whether you need a website, an app, or some automation built, I can point you in the right direction. What are you working on?",
  links: [],
}

export function BartWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([WELCOME])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [unread, setUnread] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setUnread(false)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return

    const userMsg: Message = { role: 'user', content: text }
    const next = [...messages, userMsg]
    setMessages(next)
    setInput('')
    setLoading(true)

    try {
      // Build messages array for API (exclude welcome which has no user equivalent)
      const apiMessages = next
        .filter(m => !(m.role === 'assistant' && m === WELCOME))
        .map(m => ({ role: m.role, content: m.content }))

      const res = await fetch('/api/bart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      })

      const data = await res.json()

      const bartMsg: Message = {
        role: 'assistant',
        content: data.text || "Something went wrong on my end. Try emailing gulflineai@gmail.com directly.",
        links: data.links || [],
        isLead: !!data.lead,
      }

      setMessages(prev => [...prev, bartMsg])
      if (!open) setUnread(true)
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Connection issue — try emailing gulflineai@gmail.com directly.",
        links: [],
      }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  return (
    <>
      {/* Widget */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '5.5rem',
            right: '1.5rem',
            width: 'min(380px, calc(100vw - 2rem))',
            height: 'min(560px, calc(100vh - 8rem))',
            background: '#0B1525',
            border: '1px solid rgba(34,211,238,0.2)',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 9999,
            boxShadow: '0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(34,211,238,0.08)',
            animation: 'bartSlideUp 0.25s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* Header */}
          <div style={{
            padding: '1rem 1.25rem',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'rgba(255,255,255,0.02)',
            flexShrink: 0,
          }}>
            {/* Avatar */}
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'linear-gradient(135deg, #1B4FD8, #22D3EE)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.8rem', fontFamily: "'Barlow', sans-serif",
              fontWeight: 700, color: '#fff', flexShrink: 0,
              boxShadow: '0 0 12px rgba(34,211,238,0.35)',
            }}>
              B
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: '#F0F4FF', lineHeight: 1 }}>Bart</p>
              <p style={{ fontSize: '0.72rem', color: 'rgba(34,211,238,0.8)', marginTop: '2px' }}>Gulfline AI Assistant</p>
            </div>
            {/* Online dot */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22D3EE', boxShadow: '0 0 6px #22D3EE' }} />
              <span style={{ fontSize: '0.7rem', color: 'rgba(240,244,255,0.4)' }}>online</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(240,244,255,0.4)', padding: '4px', lineHeight: 1, fontSize: '1.1rem' }}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1, overflowY: 'auto', padding: '1rem',
            display: 'flex', flexDirection: 'column', gap: '0.85rem',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255,255,255,0.08) transparent',
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start', gap: '0.35rem' }}>
                <div
                  style={{
                    maxWidth: '85%',
                    padding: '0.65rem 0.9rem',
                    borderRadius: msg.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                    background: msg.role === 'user'
                      ? 'linear-gradient(135deg, #1B4FD8, #2563EB)'
                      : 'rgba(255,255,255,0.06)',
                    border: msg.role === 'assistant' ? '1px solid rgba(255,255,255,0.08)' : 'none',
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    color: msg.role === 'user' ? '#fff' : 'rgba(240,244,255,0.85)',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}
                >
                  {msg.content}
                  {msg.isLead && (
                    <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(34,211,238,0.2)', fontSize: '0.75rem', color: 'rgba(34,211,238,0.8)' }}>
                      Lead logged — team will follow up shortly.
                    </div>
                  )}
                </div>
                {/* Quick link buttons */}
                {msg.links && msg.links.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', maxWidth: '85%' }}>
                    {msg.links.map((link, li) => (
                      <Link
                        key={li}
                        href={link.href}
                        style={{
                          display: 'inline-block',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '20px',
                          border: '1px solid rgba(34,211,238,0.35)',
                          background: 'rgba(34,211,238,0.08)',
                          color: '#22D3EE',
                          fontSize: '0.75rem',
                          fontFamily: "'Barlow', sans-serif",
                          fontWeight: 600,
                          textDecoration: 'none',
                          transition: 'background 0.2s',
                          cursor: 'pointer',
                        }}
                      >
                        {link.label} →
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0' }}>
                <div style={{
                  padding: '0.65rem 0.9rem',
                  borderRadius: '14px 14px 14px 4px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', gap: '4px', alignItems: 'center',
                }}>
                  {[0,1,2].map(i => (
                    <div key={i} style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: 'rgba(34,211,238,0.7)',
                      animation: `bartDot 1.2s ease-in-out ${i * 0.2}s infinite`,
                    }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: '0.75rem 1rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex', gap: '0.5rem', alignItems: 'center',
            background: 'rgba(255,255,255,0.02)',
            flexShrink: 0,
          }}>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask Bart anything..."
              disabled={loading}
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '0.6rem 0.875rem',
                color: '#F0F4FF',
                fontSize: '0.875rem',
                outline: 'none',
                fontFamily: 'Inter, sans-serif',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = 'rgba(34,211,238,0.4)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              style={{
                width: 36, height: 36, borderRadius: '10px', border: 'none',
                background: input.trim() && !loading
                  ? 'linear-gradient(135deg, #1B4FD8, #2563EB)'
                  : 'rgba(255,255,255,0.08)',
                color: input.trim() && !loading ? '#fff' : 'rgba(255,255,255,0.3)',
                cursor: input.trim() && !loading ? 'pointer' : 'not-allowed',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                transition: 'background 0.2s',
                fontSize: '1rem',
              }}
              aria-label="Send"
            >
              ↑
            </button>
          </div>
        </div>
      )}

      {/* FAB button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Chat with Bart"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          width: 56, height: 56,
          borderRadius: '50%',
          border: '1px solid rgba(34,211,238,0.3)',
          background: open
            ? 'rgba(11,21,37,0.95)'
            : 'linear-gradient(135deg, #1B4FD8 0%, #0EA5E9 100%)',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: open
            ? '0 0 0 1px rgba(34,211,238,0.2)'
            : '0 8px 32px rgba(27,79,216,0.55), 0 0 0 1px rgba(34,211,238,0.15)',
          zIndex: 9999,
          transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
          transform: open ? 'scale(0.92)' : 'scale(1)',
        }}
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 2L16 16M16 2L2 16" stroke="rgba(240,244,255,0.7)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 3C6.58 3 3 6.13 3 10c0 1.77.7 3.38 1.85 4.63L4 19l4.55-1.5C9.63 17.82 10.3 18 11 18c4.42 0 8-3.13 8-7s-3.58-7-8-7z" fill="white" fillOpacity="0.9"/>
            <circle cx="8" cy="10" r="1" fill="#0B1525" fillOpacity="0.6"/>
            <circle cx="11" cy="10" r="1" fill="#0B1525" fillOpacity="0.6"/>
            <circle cx="14" cy="10" r="1" fill="#0B1525" fillOpacity="0.6"/>
          </svg>
        )}
        {/* Unread dot */}
        {unread && !open && (
          <div style={{
            position: 'absolute', top: 2, right: 2,
            width: 10, height: 10, borderRadius: '50%',
            background: '#22D3EE',
            border: '2px solid #060C18',
            boxShadow: '0 0 6px #22D3EE',
          }} />
        )}
      </button>

      <style>{`
        @keyframes bartSlideUp {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes bartDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </>
  )
}
