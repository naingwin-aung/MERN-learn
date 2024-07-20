import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="border-b pb-5">
        <nav className="flex justify-between items-center">
            <Link to="/">
              MERN
            </Link>

            <ul>
              <li className="flex items-center gap-5">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/books">Books</NavLink>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header