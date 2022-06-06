import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
    return (
        <div>
            <header>
                <div className="container">
                    <h1><Link to="/">Tasks app</Link></h1>
                    <nav>
                        <ul>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};