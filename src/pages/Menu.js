import { Link } from "react-router-dom";

export default function Menu() {
    const textStyle = {
        textAlign: "center",
    }
    const linkStyle = {
        color:  "black",
    }
    return (
        <>
            <h1 style={textStyle}>This "Menu" page is under construction.</h1>
            <p style={textStyle}>Please visit <Link to="/reservations" style={linkStyle}>Reservations</Link> page to book a table.</p>
        </>
    );
}