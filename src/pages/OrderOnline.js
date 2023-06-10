import { Link } from "react-router-dom";

export default function OrderOnline() {
  const textStyle = {
    textAlign: "center",
  };
  const linkStyle = {
    color: "black",
  };
  return (
    <>
      <h1 style={textStyle}>This "Order Online" page is under construction.</h1>
      <p style={textStyle}>
        Please visit{" "}
        <Link to="/little-lemon-react-project/reservations" style={linkStyle}>
          Reservations
        </Link>{" "}
        page to book a table.
      </p>
    </>
  );
}
