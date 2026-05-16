import React, { useState } from "react";
import axios from "axios";

const AddAppointment = () => {
    const [appointment, setAppointment] = useState({
        studentName: "", studentId: "", email: "", appointmentDate: "", reasonForVisit: ""
    });

    const handleChange = (e) => {
        setAppointment({ ...appointment, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // This connects to your Backend URL!
            await axios.post("http://localhost:8000/api/appointment/book", appointment);
            alert("Appointment Booked Successfully!");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Book Medical Appointment</h2>
            <form onSubmit={handleSubmit}>
                <input name="studentName" placeholder="Name" onChange={handleChange} required />
                <input name="studentId" placeholder="Student ID" onChange={handleChange} required />
                <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                <input name="appointmentDate" type="date" onChange={handleChange} required />
                <textarea name="reasonForVisit" placeholder="Reason" onChange={handleChange} required />
                <button type="submit">Submit Booking</button>
            </form>
        </div>
    );
};

export default AddAppointment;