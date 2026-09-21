import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    return (
        <main className="not-found">
            <h1>404</h1>
            <h2>"Hmm... I don't have that one on the menu."</h2>
            <p>Let's get you back to the bar.</p>
            <Link to="/">Back to the Bar</Link>
        </main>
    );
}

export default NotFound;