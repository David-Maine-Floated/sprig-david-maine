import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { ProductImage } from '../components/ProductImage'

export function Cart() {
  const { lines, removeLine, updateQuantity, subtotal } = useCart()

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="text-2xl font-semibold text-stone-900">Your cart is empty</h1>
        <p className="mt-2 text-stone-500">Looks like you haven't added anything yet.</p>
        <Link
          to="/shop"
          className="mt-6 inline-block rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-2xl font-semibold text-stone-900">Your Cart</h1>

      <div className="mt-8 divide-y divide-stone-200 border-y border-stone-200">
        {lines.map((line, index) => (
          <div key={`${line.product.id}-${line.size ?? 'na'}`} className="flex gap-4 py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
              <ProductImage product={line.product} />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-stone-900">{line.product.name}</p>
                  {line.size && <p className="text-sm text-stone-500">Size {line.size}</p>}
                </div>
                <p className="font-medium text-stone-900">
                  ${(line.product.price * line.quantity).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateQuantity(index, line.quantity - 1)}
                    className="h-8 w-8 rounded-full border border-stone-300 text-stone-700 hover:border-stone-900"
                  >
                    -
                  </button>
                  <span className="w-6 text-center text-sm">{line.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(index, line.quantity + 1)}
                    className="h-8 w-8 rounded-full border border-stone-300 text-stone-700 hover:border-stone-900"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => removeLine(index)}
                  className="text-sm text-stone-500 hover:text-stone-900"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-end gap-4">
        <div className="flex w-full max-w-xs justify-between text-lg font-medium text-stone-900">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <Link
          to="/checkout"
          className="w-full max-w-xs rounded-full bg-stone-900 px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-stone-700"
        >
          Checkout
        </Link>
      </div>
    </div>
  )
}
