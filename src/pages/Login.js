import { Link } from "react-router-dom";

export default function Login() {
    const textStyle = {
        textAlign: "center",
    }
    const linkStyle = {
        color:  "black",
    }
    return (
        <>
            <h1 style={textStyle}>This "Login" page is under construction.</h1>
            <p style={textStyle}>Please visit <Link to="/reservations" style={linkStyle}>Reservations</Link> page to book a table.</p>
        </>
    )
}