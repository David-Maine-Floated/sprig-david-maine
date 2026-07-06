import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export function Checkout() {
  const { lines, subtotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)

  if (lines.length === 0 && !submitting) {
    return <Navigate to="/cart" replace />
  }

  const shipping = 8
  const total = subtotal + shipping

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    const orderId = `TS-${Math.floor(100000 + Math.random() * 900000)}`
    setTimeout(() => {
      navigate('/order-confirmation', { state: { orderId, total } })
      clearCart()
    }, 600)
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-2xl font-semibold text-stone-900">Checkout</h1>

      <div className="mt-10 grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <form onSubmit={handleSubmit} className="space-y-8">
          <fieldset>
            <legend className="mb-4 text-sm font-semibold text-stone-900">Shipping information</legend>
            <div className="grid grid-cols-2 gap-4">
              <input required placeholder="First name" className="col-span-1 rounded-md border border-stone-300 px-3 py-2 text-sm" />
              <input required placeholder="Last name" className="col-span-1 rounded-md border border-stone-300 px-3 py-2 text-sm" />
              <input required type="email" placeholder="Email" className="col-span-2 rounded-md border border-stone-300 px-3 py-2 text-sm" />
              <input required placeholder="Address" className="col-span-2 rounded-md border border-stone-300 px-3 py-2 text-sm" />
              <input required placeholder="City" className="rounded-md border border-stone-300 px-3 py-2 text-sm" />
              <input required placeholder="ZIP code" className="rounded-md border border-stone-300 px-3 py-2 text-sm" />
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-4 text-sm font-semibold text-stone-900">Payment</legend>
            <div className="grid grid-cols-2 gap-4">
              <input required placeholder="Card number" className="col-span-2 rounded-md border border-stone-300 px-3 py-2 text-sm" />
              <input required placeholder="MM / YY" className="rounded-md border border-stone-300 px-3 py-2 text-sm" />
              <input required placeholder="CVC" className="rounded-md border border-stone-300 px-3 py-2 text-sm" />
            </div>
            <p className="mt-2 text-xs text-stone-400">This is a demo checkout — no payment is processed.</p>
          </fieldset>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700 disabled:opacity-60"
          >
            {submitting ? 'Placing order...' : `Place Order — $${total.toFixed(2)}`}
          </button>
        </form>

        <div className="h-fit rounded-lg border border-stone-200 bg-stone-50 p-6">
          <h2 className="text-sm font-semibold text-stone-900">Order Summary</h2>
          <div className="mt-4 space-y-3">
            {lines.map((line) => (
              <div key={`${line.product.id}-${line.size ?? 'na'}`} className="flex justify-between text-sm">
                <span className="text-stone-600">
                  {line.product.name} {line.size && `(${line.size})`} &times; {line.quantity}
                </span>
                <span className="text-stone-900">${(line.product.price * line.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2 border-t border-stone-200 pt-4 text-sm">
            <div className="flex justify-between text-stone-600">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-base font-medium text-stone-900">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
