import './index.css'

const Header = () => (
  <>
    <nav className="navbar-container">
      <img
        src="https://res.cloudinary.com/drgheojrx/image/upload/v1715450201/Logo_yzybpy.png"
        alt="logo"
        className="company-logo"
      />
      <h1 className="logo">LOGO</h1>
      <div className="navbar-icon-cont">
        <img
          src="https://res.cloudinary.com/drgheojrx/image/upload/v1715453359/search-normal_gaxqcp.png"
          className="navbar-icon"
          alt="icon"
        />
        <img
          src="https://res.cloudinary.com/drgheojrx/image/upload/v1715454035/heart_nioema.png"
          className="navbar-icon"
          alt="icon"
        />
        <img
          src="https://res.cloudinary.com/drgheojrx/image/upload/v1715454063/shopping-bag_osfl7b.png"
          className="navbar-icon"
          alt="icon"
        />
        <img
          src="https://res.cloudinary.com/drgheojrx/image/upload/v1715454045/profile_cbeolx.png"
          className="navbar-icon"
          alt="icon"
        />
        <select className="lang-cont">
          <option className="language">ENG</option>
          <option className="language">HIN</option>
        </select>
      </div>
    </nav>
    <ul className="section-name-container">
      <li className="section-name">SHOPS</li>
      <li className="section-name">SKILLS</li>
      <li className="section-name">STORIES</li>
      <li className="section-name">ABOUT</li>
      <li className="section-name">CONTACT US</li>
    </ul>

    <nav className="mobile-view-container">
      <div className="logos-cont">
        <img
          src="https://res.cloudinary.com/drgheojrx/image/upload/v1715525346/solar_hamburger-menu-linear_kkbvvh.png"
          className="navbar-logo"
          alt="icon"
        />
        <img
          src="https://res.cloudinary.com/drgheojrx/image/upload/v1715450201/Logo_yzybpy.png"
          alt="logo"
          className="navbar-logo"
        />
      </div>
      <h1 className="logo">LOGO</h1>
      <div className="navbar-icon-cont">
        <img
          src="https://res.cloudinary.com/drgheojrx/image/upload/v1715453359/search-normal_gaxqcp.png"
          className="navbar-icon"
          alt="icon"
        />
        <img
          src="https://res.cloudinary.com/drgheojrx/image/upload/v1715454035/heart_nioema.png"
          className="navbar-icon"
          alt="icon"
        />
        <img
          src="https://res.cloudinary.com/drgheojrx/image/upload/v1715454063/shopping-bag_osfl7b.png"
          className="navbar-icon"
          alt="icon"
        />
      </div>
    </nav>
  </>
)

export default Header
