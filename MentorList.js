import React from 'react';

function MentorList({ areaOfInterest, selectMentor }) {
    const mentors = [
        { name: 'John Doe', expertise: 'FMCG Sales' },
        { name: 'Jane Smith', expertise: 'Equity Research' },
        { name: 'Emily Johnson', expertise: 'Digital Marketing' },
    ];

 
    

    const filteredMentors = mentors.filter(mentor =>
        mentor.expertise === areaOfInterest
    );
if (!areaOfInterest) {
        return null;
    }
    return (
        <div className="mentor-list">
            {filteredMentors.length > 0 ? (
                <ul>
                    {filteredMentors.map((mentor, index) => (
                        <li key={index} onClick={() => selectMentor(mentor)}>
                            {mentor.name} - {mentor.expertise}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No mentors available for the selected area.</p>
            )}
        </div>
    );
}

export default MentorList;
