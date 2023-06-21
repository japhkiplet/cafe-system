import './Booking.css'
import { useState } from 'react';

const Booking = () => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [tableNumber, setTableNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Perform validation on form inputs
      if (!name || !contact || !tableNumber || !date || !time || !numberOfPeople) {
        alert('Please fill in all fields.');
        return;
      }
  
      // Send the booking data to your backend API for processing
      const bookingData = {
        name,
        contact,
        tableNumber,
        date,
        time,
        numberOfPeople
      };
  
      //Replace `YOUR_API_ENDPOINT` with your actual API endpoint
    //   fetch('YOUR_API_ENDPOINT', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(bookingData)
    //   })
    //     .then(response => response.json())
    //     .then(data => {
    //       // Handle the response from the API
    //       console.log(data); // You can customize this based on your requirements
    //       alert('Table booking successful!');
    //     })
    //     .catch(error => {
    //       console.error('Error:', error);
    //       alert('An error occurred while processing the booking. Please try again.');
    //     });
    };
  return (
    <div className="table">
        <div className="table-header">
            <h1>Book a table</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="details">
                <div className="detail-left">
                    <div className="form-group">
                    <input type="text" name="" placeholder='username' value={name} onChange={e => setName(e.target.value)} /> 
                    </div>
                    <div className="form-group">
                    <input type="text" name="" placeholder='Tel' value={contact} onChange={e => setContact(e.target.value)} />
                        
                    </div>
                    <div className="form-group">
                    <input type="text" name="" placeholder='table number' value={tableNumber} onChange={e => setTableNumber(e.target.value)} />
                    </div>
                </div>



                <div className="detail-right">

                    <div className="form-group">
                    <input type="date" name="" placeholder='date' value={date} onChange={e => setDate(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <input type="time" name="" placeholder='time' value={time} onChange={e => setTime(e.target.value)} />
                    </div>
                    <div className="form-group">
                    <input type="number" name="" placeholder='No of people' value={numberOfPeople} onChange={e => setNumberOfPeople(e.target.value)} />
                    </div>
                </div>

                </div>
                <div className="detail-bottom">
                    <div className="form-group1">
                    <button type="submit">Book Table</button>
                    </div>
            </div>
        </form>
    </div>
  )
}

export default Booking