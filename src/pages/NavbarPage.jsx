import { Link } from "react-router-dom";

const NavbarPage = () => {
    return (
        <nav>
            <Link to="/">Home</Link> | <Link to="/user">User</Link>
        </nav>
    )
}

export default NavbarPage;