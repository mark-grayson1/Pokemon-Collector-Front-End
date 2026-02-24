import "./NavButton.scss";

const NavButton = ({ name }) => {
  return (
    <button className="NavButton">
      {name}
    </button>
  )
}

export default NavButton
