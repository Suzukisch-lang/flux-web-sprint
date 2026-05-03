import { groq } from 'next-sanity'

export const FEATURED_PORTFOLIO_QUERY = groq`
  *[_type == "portfolio" && featured == true] | order(order asc) [0...4] {
    _id,
    title,
    slug,
    category,
    year,
    image,
    tags,
    excerpt,
    projectUrl,
  }
`

export type PortfolioItem = {
  _id: string
  title: string
  slug: { current: string }
  category?: string
  year?: number
  image?: { asset: { _ref: string } }
  tags?: string[]
  excerpt?: string
  projectUrl?: string
}
