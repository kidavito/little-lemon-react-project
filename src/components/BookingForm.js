import React from 'react';
import "./BookingForm.css";
import { useState } from 'react';

export default function BookingForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [number, setNumber] = useState("")
    const [occasion, setOccasion] = useState("")

    const availableTimes = ["Select time","17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    const occasionType = ["Select occation", "Birthday", "Anniversary"]

    const validateEmail = (email) => {
        return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    }

    const isFormValid = () => {
        return (
            name &&
            validateEmail(email) &&
            date &&
            time &&
            time !== "Select time" &&
            number &&
            occasion &&
            occasion !== "Select occation"
        )
    }

    const handleSubmit = (x) => {
        x.preventDefault()
        setName("")
        setEmail("")
        setDate("")
        setTime("")
        setNumber("")
        setOccasion("")
        console.log("Submitted!")
    }

    return (
        <div className='form-container'>
            <h1 className='form-heading'>Book Now</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="res-name">Name</label>
                <input
                    type="text"
                    id="red-name"
                    value={name}
                    placeholder="Enter your name"
                    onChange={(x) => setName(x.target.value)}
                />
                <label htmlFor='res-email'>Email</label>
                <input
                    type="email"
                    value={email}
                    placeholder="Enter your email address"
                    onChange={(x) => setEmail(x.target.value)}
                />
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={(x) => setDate(x.target.value)}
                />
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    value={time}
                    onChange={(x) => setTime(x.target.value)}
                >
                    {availableTimes.map((hour, index) => (
                        <option key={index}>{hour}</option>
                    ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="Enter a number"
                    min="1"
                    max="10"
                    id="guests"
                    value={number}
                    onChange={(x) => setNumber(x.target.value)}
                />
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(x) => setOccasion(x.target.value)}
                >
                    {occasionType.map((type, index) => (
                        <option key={index}>{type}</option>
                    ))}
                </select>
                <input
                    disabled={!isFormValid()}
                    type="submit"
                    value="Make Your Reservation"
                    aria-label="On Click"
                />
            </form>
        </div>
    )
}
