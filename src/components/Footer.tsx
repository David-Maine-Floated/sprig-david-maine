export function Footer() {
  return (
    <footer className="mt-24 border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-stone-500">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="font-semibold text-stone-800">TERRA SUPPLY CO.</p>
          <p>Outfitting trips off the grid since 2019.</p>
        </div>
        <p className="mt-6 text-xs text-stone-400">
          This is a demo storefront built for a take-home assessment. No real orders are placed.
        </p>
      </div>
    </footer>
  )
}
