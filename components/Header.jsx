import { Link } from "react-router"
export default function Header() {
    return(
        <header>
            <h1>Airbnc</h1>
            <nav>
                <Link to="/properties">Show me Properties</Link>
            </nav>
        </header>
    )
}