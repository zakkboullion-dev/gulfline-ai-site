// Site-wide facts that more than one page needs.

// Social profiles. Leave a URL empty until the account is live: empty entries are
// not rendered, so the site never shows a dead link.
export const socials: { label: string; url: string }[] = [
  { label: 'Instagram', url: 'https://www.instagram.com/gulflineai/' },
  { label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61597073901112' },
  { label: 'TikTok', url: '' },
]

export const liveSocials = socials.filter((s) => s.url)
