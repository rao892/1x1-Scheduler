import React from 'react';

function PaymentPage({ booking }) {
    const { mentor, duration } = booking;
    const price = duration === '30' ? 2000 : duration === '45' ? 3000 : 4000;

    return (
        <div className="payment-page">
            <h2>Payment Details</h2>
            <p><strong>Mentor:</strong> {mentor.name}</p>
            <p><strong>Duration:</strong> {duration} minutes</p>
            <p><strong>Total Price:</strong> ${price}</p>
            <button className="confirm-button">Proceed to Payment</button>
        </div>
    );
}

export default PaymentPage;
