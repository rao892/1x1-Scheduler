import React, { useState } from 'react';
import Header from './Header';
import MentorList from './MentorList';
import BookingForm from './BookingForm';
import PaymentPage from './PaymentPage';
import './styles.css';

function App() {
    const [areaOfInterest, setAreaOfInterest] = useState('');
    const [selectedMentor, setSelectedMentor] = useState(null);
    const [bookingDetails, setBookingDetails] = useState(null);
    const [view, setView] = useState('mentorList');

    const handleMentorSelect = (mentor) => {
        setSelectedMentor(mentor);
        setView('bookingForm');
    };

    const handleBookingConfirm = (bookingData) => {
        setBookingDetails(bookingData);
        setView('paymentPage');
    };

    const handleBackToMentorList = () => {
        setSelectedMentor(null);
        setView('mentorList');
    };

    const handleBackToBookingForm = () => {
        setBookingDetails(null);
        setView('bookingForm');
    };

    return (
        <div>
            <Header />
            <div className="container">
                {view === 'mentorList' && (
                    <div className="form-container">
                        <label>
                            Area of Interest:
                            <select
                                value={areaOfInterest}
                                onChange={(e) => setAreaOfInterest(e.target.value)}
                                className="area-select"
                            >
                                <option value="">Select an area...</option>
                                <option value="FMCG Sales">FMCG Sales</option>
                                <option value="Equity Research">Equity Research</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                {/* Add more options as needed */}
                            </select>
                        </label>
                        <MentorList areaOfInterest={areaOfInterest} selectMentor={handleMentorSelect} />
                    </div>
                )}

                {view === 'bookingForm' && selectedMentor && (
                    <div className="form-container">
                        <button className="back-button" onClick={handleBackToMentorList}>Back</button>
                        <BookingForm mentor={selectedMentor} confirmBooking={handleBookingConfirm} />
                    </div>
                )}

                {view === 'paymentPage' && bookingDetails && (
                    <div className="form-container">
                        <button className="back-button" onClick={handleBackToBookingForm}>Back</button>
                        <PaymentPage booking={bookingDetails} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
