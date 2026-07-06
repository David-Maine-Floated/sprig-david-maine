import { Link, Navigate, useLocation } from 'react-router-dom'

type LocationState = {
  orderId: string
  total: number
} | null

export function OrderConfirmation() {
  const location = useLocation()
  const state = location.state as LocationState

  if (!state) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">Order confirmed</p>
      <h1 className="mt-3 text-2xl font-semibold text-stone-900">Thanks for your order!</h1>
      <p className="mt-3 text-stone-600">
        Order <span className="font-medium text-stone-900">{state.orderId}</span> is confirmed. We've
        sent a confirmation email with your order details.
      </p>
      <p className="mt-1 text-stone-600">Total charged: ${state.total.toFixed(2)}</p>
      <Link
        to="/shop"
        className="mt-8 inline-block rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
      >
        Continue Shopping
      </Link>
    </div>
  )
}
