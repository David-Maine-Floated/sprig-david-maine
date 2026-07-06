import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import { products } from '../data/products'

export function Home() {
  const featured = products.slice(0, 4)

  return (
    <div>
      <section className="border-b border-stone-200 bg-stone-100">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            New season arrivals
          </p>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            Gear built for the trail, tested off it.
          </h1>
          <p className="max-w-md text-stone-600">
            Weatherproof apparel and camp-tested gear for people who'd rather be outside.
          </p>
          <Link
            to="/shop"
            className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
          >
            Shop All Products
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-xl font-semibold text-stone-900">Featured</h2>
          <Link to="/shop" className="text-sm font-medium text-amber-700 hover:text-amber-800">
            View all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
