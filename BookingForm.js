import React, { useState } from 'react';

function BookingForm({ mentor, confirmBooking }) {
    const [duration, setDuration] = useState('30');

    const handleConfirm = () => {
        const bookingData = { mentor, duration };
        confirmBooking(bookingData);
    };

    return (
        <div className="booking-form">
            <h2>Book a 1x1 Session with {mentor.name}</h2>
            <label>
                Duration:
                <select value={duration} onChange={(e) => setDuration(e.target.value)} className="duration-select">
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">60 minutes</option>
                </select>
            </label>
            <button onClick={handleConfirm} className="confirm-button">Confirm Booking</button>
        </div>
    );
}

export default BookingForm;
