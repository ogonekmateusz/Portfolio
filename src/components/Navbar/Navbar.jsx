import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`Navbar sticky-top ${loaded ? "fade-in" : ""}`}>
      <nav className="navbar navbar-expand-lg mx-auto" style={{ width: "90%" }}>
        <a className="navbar-brand" href="#">
          Mateusz Ogonek
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Strona Główna
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="#about">
                O mnie
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="#works">
                Moje Prace
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="#contact">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
