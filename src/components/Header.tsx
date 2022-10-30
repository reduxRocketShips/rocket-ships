import { HeaderProps } from "../utils/interfaces"

// const Header = ({ player1, player2 } : HeaderProps) => {
const Header = () => {
  return (
  <div>
    <span>Ship Count:</span>
    <button>Play</button>
    <button>Start Turn</button>
    <button>Help</button>
  </div>
  )
}

export default Header;
