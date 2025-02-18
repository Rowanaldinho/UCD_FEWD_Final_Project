document.getElementById('bookingForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const bookingData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      date: document.getElementById('date').value,
      time: document.getElementById('time').value,
      guests: document.getElementById('guests').value
  };

  try {
      const response = await fetch('http://localhost:5000/send-booking-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bookingData)
      });

      const result = await response.text();
      if (response.ok) {
          document.getElementById('confirmationMessage').innerText = 'Thank you for submitting your booking. We will be in touch shortly to confirm!';
          document.getElementById('confirmation').style.display = 'block';
          document.getElementById('bookingForm').reset(); // Clears the form after it is submitted
      } else {
          console.error('Error:', result);
          alert('An error occurred while submitting your booking. Please try again.');
      }
  } catch (error) {
      console.error('Fetch Error:', error);
  }
});
