import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";

export default function Navbar() {
    return (
            <Nav className="justify-content-center navbar" variant="pills" defaultActiveKey="/">
                <Nav.Item>
                    <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink exact to="/music" className="nav-link" activeClassName="active">Music</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink exact to="/movies" className="nav-link" activeClassName="active">Movies</NavLink>
                </Nav.Item>
            </Nav>
    );
};