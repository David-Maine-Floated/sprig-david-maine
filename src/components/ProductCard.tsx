import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import { ProductImage } from './ProductImage'

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="aspect-[4/5] overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-[1.02]">
        <ProductImage product={product} />
      </div>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-medium text-stone-900">{product.name}</h3>
          <p className="text-xs text-stone-500">{product.category}</p>
        </div>
        <p className="whitespace-nowrap text-sm font-medium text-stone-900">${product.price}</p>
      </div>
    </Link>
  )
}
