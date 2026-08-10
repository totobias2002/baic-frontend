import { AppLink } from './AppLink.jsx'
import logoNavbar from '../icons/baic-pacheco-logo-navbar.png'
import logoFooter from '../icons/baic-pacheco-logo-footer.png'

export default function Logo({ to = '/', className = '', dark = false, onClick }) {
  return (
    <AppLink to={to} className={`ui-logo ${className}`} onClick={onClick}>
      <img src={dark ? logoFooter : logoNavbar} alt="BAIC Pacheco" className="ui-logo__img" />
    </AppLink>
  )
}
