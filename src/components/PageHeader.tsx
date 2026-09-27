import type { ReactNode } from 'react'

type Props = {
  title: string
  subtitle?: ReactNode
  /** Rendered to the right of the title (buttons, filters…); wraps below it on narrow screens. */
  actions?: ReactNode
}

export default function PageHeader({ title, subtitle, actions }: Props) {
  return (
    <header className="page-header">
      <div>
        <h1 className="module__title">{title}</h1>
        {subtitle && <p className="module__subtitle">{subtitle}</p>}
      </div>
      {actions && <div className="page-header__actions">{actions}</div>}
    </header>
  )
}
