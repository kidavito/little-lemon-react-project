import React from 'react'
import "./BookingPage.css"
import BookingForm from '../components/BookingForm'
import BookingList from '../components/BookingList'

export default function BookingPage() {
  return (
    <div id='booking-page'>
      <BookingForm />
      <BookingList />
    </div>
  )
}
