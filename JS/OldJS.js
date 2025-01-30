document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const guests = document.getElementById('guests').value;

  const bookingData = {
      name,
      email,
      phone,
      date,
      time,
      guests
  };

  fetch('http://localhost:3000/sendEmail', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          alert('Booking email sent successfully!');
      } else {
          alert('Failed to send booking email.');
      }
  })
  .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while sending the booking email.');
  });
});
