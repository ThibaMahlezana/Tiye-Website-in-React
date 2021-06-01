import LogoImage from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-light justify-content-between">
      <div className="container">
        <a className="nav-brand" href="#">
          <img src={LogoImage} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i class="fa fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <a class="nav-item active" href="#home">
              Home
            </a>
            <a class="nav-item" href="#about">
              About
            </a>
            <a class="nav-item" href="#services">
              Services
            </a>
            <a class="nav-item" href="#portfolio">
              Portfolio
            </a>
            <button class="btn float-end">
              <a href="#contact">Contact</a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
