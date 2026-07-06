import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getProductBySlug } from '../data/products'
import { useCart } from '../context/CartContext'
import { ProductImage } from '../components/ProductImage'

export function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const product = slug ? getProductBySlug(slug) : undefined
  const [size, setSize] = useState<string | undefined>(product?.sizes?.[0])
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="text-stone-600">We couldn't find that product.</p>
        <Link to="/shop" className="mt-4 inline-block text-amber-700 hover:text-amber-800">
          Back to shop
        </Link>
      </div>
    )
  }

  function handleAddToCart() {
    if (!product) return
    addItem(product, size, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="aspect-[4/5] overflow-hidden rounded-lg">
          <ProductImage product={product} />
        </div>
        <div className="max-w-md">
          <p className="text-xs font-medium uppercase tracking-widest text-stone-400">
            {product.category}
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-stone-900">{product.name}</h1>
          <p className="mt-2 text-lg text-stone-900">${product.price}</p>
          <p className="mt-6 text-stone-600">{product.description}</p>

          <ul className="mt-6 space-y-2 text-sm text-stone-600">
            {product.details.map((detail) => (
              <li key={detail} className="flex gap-2">
                <span className="text-amber-600">&bull;</span>
                {detail}
              </li>
            ))}
          </ul>

          {product.sizes && (
            <div className="mt-8">
              <p className="mb-2 text-sm font-medium text-stone-800">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      size === s
                        ? 'border-stone-900 bg-stone-900 text-white'
                        : 'border-stone-300 text-stone-700 hover:border-stone-900'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
            >
              {added ? 'Added to cart' : 'Add to Cart'}
            </button>
            <button
              type="button"
              onClick={() => {
                handleAddToCart()
                navigate('/cart')
              }}
              className="flex-1 rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800 transition-colors hover:border-stone-900"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
