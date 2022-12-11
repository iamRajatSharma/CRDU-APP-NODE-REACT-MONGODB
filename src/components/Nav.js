import { Link } from 'react-router-dom'

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/">REACT-NODE-CRUD-APP</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/addUser">Add New User</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Nav;