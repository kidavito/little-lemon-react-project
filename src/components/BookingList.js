export default function BookingList() {
    const bookingListStyle = {
        display: "grid",
        margin: "10px auto 30px auto",
        justifyContent: "center",
        // backgroundColor: "gold",
        // color: "white",
        borderRadius: "20px",
        padding: "15px 25px 30px 25px",
    }
    return (
        <div>
            <h1 style={bookingListStyle}>Booking List:</h1>
            <h4>Name:</h4>
            <h4>Date:</h4>
            <h4>Time:</h4>
        </div>
    )
}