import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-32 text-center">
      <span className="font-display text-7xl font-extrabold gradient-text">404</span>
      <h1 className="mt-4 font-display text-2xl font-bold text-navy-900 dark:text-white">Page not found</h1>
      <p className="mt-2 max-w-sm text-sm text-navy-500 dark:text-slate-400">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <NavLink to="/" className="btn-primary mt-8">
        Back to Home
      </NavLink>
    </div>
  )
}
