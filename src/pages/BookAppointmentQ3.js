import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/govuk-frontend.min.css';
import '../css/style.css';

function BookAppointmentQ3() {
  const [members, setMembers] = useState([]);
  const [showMemberSection, setShowMemberSection] = useState(false);
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [bilReference, setBilReference] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/get-appointment')
      .then(response => {
        console.log('Fetched appointment data:', response.data);
        if (response.data.members) {
          setMembers(response.data.members);
        }
      })
      .catch(error => console.error('Error fetching appointment data:', error));
  }, []);

  const handleAddMember = () => {
    if (name && relationship) {
      const newMembers = [...members, { name, relationship, bilReference }];
      setMembers(newMembers);
      setName('');
      setRelationship('');
      setBilReference('');
      axios.post('/api/save-appointment', { members: newMembers })
        .then(response => console.log('Members saved:', response))
        .catch(error => console.error('Error saving members:', error));
    } else {
      alert("Please enter the member's name and relationship.");
    }
  };

  const handleDeleteMember = (index) => {
    const newMembers = members.filter((_, i) => i !== index);
    setMembers(newMembers);
    axios.post('/api/save-appointment', { members: newMembers })
      .then(response => console.log('Members saved:', response))
      .catch(error => console.error('Error saving members:', error));
  };

  const handleContinue = () => {
    navigate('/book-appointment-q4');
  };

  return (
    <div>
      <main className="govuk-main-wrapper govuk-width-container" role="main">
        <p className="govuk-hint" style={{ fontSize: '24px', marginBottom: '0' }}>Book an appointment</p>
        <h1>Is this a group or family booking?</h1>
        <div className="govuk-hint">You can add other members who need the same service here. Each member's name and date of birth should match the details on their respective passports or travel documents. Only individuals listed in this section will be allowed to accompany you to the appointment.</div>
   
        <div className="govuk-form-group">
          <fieldset className="govuk-fieldset">
            <div className="govuk-radios govuk-radios--inline">
              <div className="govuk-radios__item">
                <input className="govuk-radios__input" id="add-members-yes" name="add-members" type="radio" value="yes" onChange={() => setShowMemberSection(true)} />
                <label className="govuk-label govuk-radios__label" htmlFor="add-members-yes">Yes</label>
              </div>
              <div className="govuk-radios__item">
                <input className="govuk-radios__input" id="add-members-no" name="add-members" type="radio" value="no" onChange={() => setShowMemberSection(false)} defaultChecked />
                <label className="govuk-label govuk-radios__label" htmlFor="add-members-no">No</label>
              </div>
            </div>
          </fieldset>
        </div>

        {showMemberSection && (
          <div id="member-section" className="govuk-inset-text">
            <div className="govuk-form-group">
              <label className="govuk-label" htmlFor="member-name">Name of Family/Group Member</label>
              <input className="govuk-input govuk-!-width-full" id="member-name" name="member-name" type="text" placeholder="Enter full name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
                
            <div className="govuk-form-group">
              <label className="govuk-label" htmlFor="relationship">Relationship</label>
              <select className="govuk-select govuk-!-width-full" id="relationship" name="relationship" value={relationship} onChange={(e) => setRelationship(e.target.value)}>
                <option value="">Please select or enter a relationship</option>
                <option value="Group Member">Group Member</option>
                <option value="Spouse">Spouse</option>
                <option value="Child">Child</option>
                <option value="Parent">Parent</option>
                <option value="Other Relative">Other Relative</option>
              </select>
            </div>             

            <div className="govuk-form-group tooltip">
              <label className="govuk-label" htmlFor="bil-reference">BIL Reference Number <span className="govuk-hint">(required for Biometric Collection only)</span></label>
              <input className="govuk-input" id="bil-reference" name="bil-reference" type="text" value={bilReference} onChange={(e) => setBilReference(e.target.value)} />
              <span className="tooltiptext">Provide the Biometric Instruction Letter (BIL) reference number for this member if needed.</span>
            </div>

            <button type="button" className="govuk-button" id="add-member-button" onClick={handleAddMember}>Add Member</button>
          </div>
        )}

        {members.length > 0 && (
          <div id="member-table-container">
            <h2 className="govuk-heading-m">Added Members</h2>
            <table className="govuk-table member-table" id="member-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Relationship</th>
                  <th>BIL Reference</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={index}>
                    <td>{member.name}</td>
                    <td>{member.relationship}</td>
                    <td>{member.bilReference || "N/A"}</td>
                    <td><button type="button" onClick={() => handleDeleteMember(index)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="govuk-button-group">
          <Link to="/book-appointment-q2" className="govuk-button govuk-button--secondary">Back</Link>
          <button onClick={handleContinue} className="govuk-button">Continue</button>
        </div>
      </main>
    </div>
  );
}

export default BookAppointmentQ3;
