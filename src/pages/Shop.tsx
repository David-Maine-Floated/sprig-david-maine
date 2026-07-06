import { useParams } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import { categories, products } from '../data/products'

const categoryBySlug: Record<string, (typeof categories)[number]> = {
  apparel: 'Apparel',
  gear: 'Gear',
  accessories: 'Accessories',
}

export function Shop() {
  const { category } = useParams()
  const activeCategory = category ? categoryBySlug[category] : undefined
  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-2xl font-semibold text-stone-900">
        {activeCategory ?? 'Shop All'}
      </h1>
      <p className="mt-2 text-sm text-stone-500">{filtered.length} products</p>
      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
