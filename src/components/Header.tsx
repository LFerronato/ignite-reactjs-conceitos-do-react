import '../styles/header.scss'

import Icon from './../../public/logo.svg'

export function Header() {
  return (
    <header className="header">
      <div>
        {/* <img src="/logo.svg" alt="to.do" /> */}
        <Icon />
      </div>
    </header>
  )
}
