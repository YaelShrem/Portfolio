import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoYS from '../../assets/images/ys-logo.png'
import Icon from '../Icon';

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoYS} alt="logo" />
      <h2 className="sub-logo">Yael Shrem</h2>
      {/* <img className="sub-logo" src={LogoSubtitle} alt="Yael Shrem" /> */}
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <Icon name="copy"/>
      </NavLink>
      <NavLink activeclassname="active" className="about-link" to="/about">
        <Icon name="copy"/>
      </NavLink>
      <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
        <Icon name="copy"/>
        </NavLink>
    </nav>
    <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/yaelshrem/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="copy"/>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/yaelshrem"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="copy"/>
          </a>
        </li>
    </ul>
  </div>
)

export default Sidebar
