import type { Product } from '../data/products'

const categoryStyles: Record<Product['category'], string> = {
  Apparel: 'from-amber-100 to-amber-200',
  Gear: 'from-stone-200 to-stone-300',
  Accessories: 'from-orange-100 to-stone-200',
}

export function ProductImage({ product }: { product: Product }) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${categoryStyles[product.category]}`}
    >
      <span className="text-7xl" role="img" aria-label={product.name}>
        {product.icon}
      </span>
    </div>
  )
}
