import "./topbar.css"

export default function TopBar() {
  return (
    <div className="top">
        <div className="topleft">
          <i className="topIcon fa-brands fa-facebook"></i>
          <i className="topIcon fa-brands fa-twitter"></i>
          <i className="topIcon fa-brands fa-pinterest"></i>
          <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topcenter">
          <ul className="toplist">
          <li className="toplistitem">HOME</li>
          <li className="toplistitem">ABOUT</li>
          <li className="toplistitem">CONTACT</li>
          <li className="toplistitem">WRITE</li>
          <li className="toplistitem">LOGOUT</li>
          </ul>
        </div>
        <div className="toprigth">
          <img 
          className="topimg" 
          src="https://www.autoworldjournal.com/wp-content/uploads/2024/04/A-Look-at-the-World-Automobile-Industry-in-2030-1.jpg" 
          alt=""
           />
          <i className="searchIcon fa-solid fa-magnifying-glass"></i>

        </div>
        </div>
  )
}
