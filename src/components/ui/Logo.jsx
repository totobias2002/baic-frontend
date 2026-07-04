import { AppLink } from './AppLink.jsx'
import logo from '../icons/icon.png'

export default function Logo({ to = '/', className = '' }) {
  return (
    <AppLink to={to} className={`ui-logo ${className}`}>
      <img src={logo} alt="BAIC" className="ui-logo__img" />
    </AppLink>
  )
}
