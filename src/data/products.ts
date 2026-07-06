export type Product = {
  id: string
  slug: string
  name: string
  price: number
  category: 'Apparel' | 'Gear' | 'Accessories'
  icon: string
  description: string
  details: string[]
  sizes?: string[]
}

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'ridgeline-shell-jacket',
    name: 'Ridgeline Shell Jacket',
    price: 168,
    category: 'Apparel',
    icon: '🧥',
    description:
      'A packable, weatherproof shell built for fast-moving weather on exposed ridgelines.',
    details: ['2.5-layer waterproof fabric', 'Pit zips for ventilation', 'Packs into its own pocket', '320g'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'p2',
    slug: 'summit-down-vest',
    name: 'Summit Down Vest',
    price: 129,
    category: 'Apparel',
    icon: '🦺',
    description: '700-fill down vest for warmth without the bulk on cold mornings at camp.',
    details: ['700-fill responsibly sourced down', 'Wind-resistant shell', 'Zippered hand pockets'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'p3',
    slug: 'trailhead-merino-tee',
    name: 'Trailhead Merino Tee',
    price: 54,
    category: 'Apparel',
    icon: '👕',
    description: 'Odor-resistant merino wool tee that works from the trail to the trailhead brewery.',
    details: ['100% merino wool', 'Naturally odor-resistant', 'Flatlock seams'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'p4',
    slug: 'basecamp-2p-tent',
    name: 'Basecamp 2P Tent',
    price: 349,
    category: 'Gear',
    icon: '⛺',
    description: 'A freestanding two-person tent that sets up in under five minutes, rain or shine.',
    details: ['3-season, freestanding', '4.2 lb packed weight', 'Two vestibules', 'Full-coverage rainfly included'],
  },
  {
    id: 'p5',
    slug: '30-below-sleeping-bag',
    name: '30° Below Sleeping Bag',
    price: 219,
    category: 'Gear',
    icon: '🛌',
    description: 'A mummy-style sleeping bag rated for shoulder-season nights that dip below freezing.',
    details: ['Synthetic insulation, rated to 30°F', 'Draft collar and full-length zipper baffle', 'Compression sack included'],
  },
  {
    id: 'p6',
    slug: 'switchback-trekking-poles',
    name: 'Switchback Trekking Poles',
    price: 89,
    category: 'Gear',
    icon: '🥾',
    description: 'Collapsible carbon poles that shave weight off every mile of the descent.',
    details: ['Carbon fiber shafts', 'Cork grips', 'Collapses to 15in for travel', 'Sold as a pair'],
  },
  {
    id: 'p7',
    slug: 'camp-percolator',
    name: 'Camp Percolator',
    price: 42,
    category: 'Accessories',
    icon: '☕',
    description: 'Stovetop-ready percolator that makes six cups of camp coffee at a time.',
    details: ['Stainless steel construction', 'Works on camp stoves and open flame', '6-cup capacity'],
  },
  {
    id: 'p8',
    slug: 'all-weather-notebook',
    name: 'All-Weather Field Notebook',
    price: 24,
    category: 'Accessories',
    icon: '📓',
    description: 'Waterproof pages for logging routes, sketches, and summit notes in any conditions.',
    details: ['Tear-resistant, waterproof paper', '96 pages', 'Elastic closure band'],
  },
  {
    id: 'p9',
    slug: 'insulated-camp-mug',
    name: 'Insulated Camp Mug',
    price: 28,
    category: 'Accessories',
    icon: '🥤',
    description: 'Double-wall insulated mug that keeps coffee hot well past sunrise.',
    details: ['18/8 stainless steel', 'Double-wall vacuum insulation', '12 oz capacity', 'Leak-proof lid'],
  },
]

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}

export const categories = ['Apparel', 'Gear', 'Accessories'] as const
