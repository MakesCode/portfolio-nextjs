import { useState } from 'react';
import useDimension from '../../hook/useDimension';
import Menu from './Menu';
import styles from './navbar.module.css'


export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const browserWidth = useDimension()
  const numberWidth = 600

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      {(toggle && browserWidth < numberWidth) &&
        (<div className={styles.menu_mobile}>
          <Menu />
        </div>)
      }
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h1>
            <p>Allan</p>
            <p>Chauvin</p>
          </h1>
        </div>
        {browserWidth > numberWidth && <div className={styles.menu}>
          <Menu />
        </div>}
      </nav>
      {browserWidth < numberWidth && <div
        onClick={handleToggle}
        className={styles.icon_menu_mobile}
        style={toggle ? { color: 'white' } : {}}
      >=</div>}
    </>

  )
}