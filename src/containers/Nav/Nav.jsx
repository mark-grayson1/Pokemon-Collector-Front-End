import NavButton from "../../components/NavButton/NavButton";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="Nav">
      <section className="Nav_logo">
          <img  className="Nav_img" src="https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png" alt="" />
      </section>

      <section className="Nav_menu">
        <NavButton/>
        <NavButton/>
        <NavButton/>
      </section>

      <section className="Nav_user">
          user
      </section>

    </div>
  )
}

export default Nav
