import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='siderbar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span><br />
            <img src="https://regmedia.co.uk/2009/11/12/honda_helix.jpg" alt="" />
            <p>Lorem ipsum dolor,<br /> sit amet consectetur adipisicing </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span><br />
            <ul className="sidebarList">
                <li className="sidebarListItem">life</li>
                <li className="sidebarListItem">music</li>
                <li className="sidebarListItem">style</li>
                <li className="sidebarListItem">sport</li>
                <li className="sidebarListItem">tech</li>
                <li className="siderbarListItem">cinema</li>
            </ul>
            
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span><br />
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIon fa-brands fa-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
            </div>
           
        </div>
        
         
    </div>
  )
}
