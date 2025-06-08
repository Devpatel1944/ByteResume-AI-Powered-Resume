import React from 'react'
import { Link } from 'react-router'

function NavBar() {
  return (
   <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link className="btn btn-ghost text-xl" to={""}>Byte Resume</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">

      <li><Link to={"/about"}>About</Link></li>
      <li><Link to={"/services"}>Service</Link></li>
      <li><Link to={"/Contact"}>Contact</Link></li>
    </ul>
  </div>
</div>
  )
}

export default NavBar
