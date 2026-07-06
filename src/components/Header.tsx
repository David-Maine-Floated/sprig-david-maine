import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const navLinks = [
  { to: '/shop', label: 'Shop All' },
  { to: '/shop/apparel', label: 'Apparel' },
  { to: '/shop/gear', label: 'Gear' },
  { to: '/shop/accessories', label: 'Accessories' },
]

export function Header() {
  const { itemCount } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-semibold tracking-tight text-stone-900">
          TERRA <span className="text-amber-600">SUPPLY CO.</span>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-stone-600 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'text-stone-900' : 'transition-colors hover:text-stone-900'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/cart"
          className="relative flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-800 transition-colors hover:border-stone-900"
        >
          Cart
          {itemCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-600 px-1 text-xs font-semibold text-white">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  )
}
