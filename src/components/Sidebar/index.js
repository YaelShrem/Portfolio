import './index.scss'
import { Link, NavLink } from 'react-router-dom'
// import LogoYS from '../../assets/images/ys-logo.png'
import Icon from '../Icon'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <Icon name="ysLogo"/>
      {/* <img src={LogoYS} alt="logo" /> */}
      <h3 className="sub-logo">Yael Shrem</h3>
      {/* <img className="sub-logo" src={LogoSubtitle} alt="Yael Shrem" /> */}
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <Icon name="home" />
      </NavLink>
      <NavLink activeclassname="active" className="about-link" to="/about">
        <Icon name="about" />
      </NavLink>
      <NavLink activeclassname="active" className="skills-link" to="/skills">
        <Icon name="skills" />
      </NavLink>
      <NavLink activeclassname="active" className="projects-link" to="/projects">
        <Icon name="eye" />
      </NavLink>
      <NavLink activeclassname="active" className="contact-link" to="/contact">
        <Icon name="mail" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/yaelshrem/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="linkedinLogo" />
        </a>
      </li>
      <li>
        <a href="https://github.com/yaelshrem" target="_blank" rel="noreferrer">
          <Icon name="githubLogo" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
