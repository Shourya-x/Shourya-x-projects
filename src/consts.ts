export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'Shourya\'s Project',
  DESCRIPTION:
    'Hi, I\'m Shourya, an aspiring electronics engineer from India 🇮🇳, passionate about space and robotics. And this is my Projects page',
  EMAIL: 'pshourya83@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://shourya.engineer',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/Shourya-x', label: 'GitHub' },
  { href: 'https://shourya.engineer', label: 'Website' },
  { href: 'pshourya83@gmail.com', label: 'Email' },
  { href: 'https://www.linkedin.com/in/shourya-pandey-14952b235/', label: 'LinkedIn' },
]
