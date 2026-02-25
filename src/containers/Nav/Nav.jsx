import NavButton from "../../components/NavButton/NavButton";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <section className="Nav_logo">
          <img  className="Nav_img" src="https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png" alt="" />
      </section>

      <section className="Nav_menu">
        <Link to="/">
          <NavButton name ="Dashboard"/>
        </Link>

        <Link to="/selected">
          <NavButton name ="Selected "/>
        </Link>
        
        <NavButton name ="Logout"/>
      </section>

      <section className="Nav_user">
          user
      </section>

    </div>
  )
}

export default Nav
