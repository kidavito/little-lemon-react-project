import React from 'react'
import BookingForm from '../components/BookingForm'

export default function BookingPage() {
  const style = {
    display: "grid",
    justifyItems: "center",
  }
  return (
    <>
      <h1 style={style}>Reservations</h1>
      <BookingForm />
    </>
  )
}
