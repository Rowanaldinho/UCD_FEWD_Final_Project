# UCD_FEWD_Final_Project

Project Title
Restaurant Website for a restaurant named 'Flavour & Finesse'

Description
This is a responsive restaurant website that features a modern design using Bootstrap 5.3.3 for the navigation menu and a carousel on the home page. Additionally, it includes a table booking system powered by Nodemailer and SendGrid, allowing users to make reservations online. The Menu page links to the Mealdb API

Features

- Responsive navigation menu built with Bootstrap 5.3.3.
- Interactive carousel on the home page.
- Menu Page that dynamically displays menu items using the MealsDB API.
- Book a Table form that captures user details and sends reservation requests.
- Nodemailer integration to send booking details via email.
- SendGrid as the email service provider.
- Automatic confirmation email sent to the user upon successful form submission.

Technologies Used
- HTML, CSS, JavaScript for the front-end.
- Bootstrap 5.3.3 for styling and layout.
- Node.js & Express.js for the backend server.
- Nodemailer for handling emails.
- SendGrid as the email platform.
- MealsDB API for fetching menu items dynamically.

Menu Page and MealsDB API Integration
  The menu page dynamically fetches and displays meal categories using the MealsDB API. The meals are displayed in a visually appealing format with images and descriptions.

  How It Works:

  1. When the page loads, a request is sent to the MealsDB API to fetch meal categories.
  2. The API response is processed using JavaScript.
  3. Each meal category is displayed in a Bootstrap card format with an image and short description.
  4. If the API request fails, an error message is displayed.
 
Book a table

  How it works
  1. A user fills out the Book a Table form.
  2. Upon submission, the details added to the form by the user are emailed to the Restaurant Manager. e.g. name, email address, phone number, number of people, date and time
  3. The user receives a confirmation email.

  The backend (server.js) handles the email process using Nodemailer and SendGrid.

  Booking Form Workflow:

  1. The form is located on the Book a Table page.
  2. It captures user details such as name, email, phone number, date, time, and number of guests.
  3. Upon submission, the form sends a POST request to the server (server.js) at http://localhost:5000/send-booking-email.
  4. The server.js file processes the request and sends two emails:
      - A booking request email to the Restaurant Manager.
      - A booking confirmation email to the user.
  5. If the request is successful, the user receives a confirmation message on the webpage.

Installation and Setup

Prerequisites
- Make sure you have the following installed:
    - Node.js (latest LTS version recommended)
    - npm (comes with Node.js)

Steps to Run the Project

1. Clone the repository https://github.com/Rowanaldinho/UCD_FEWD_Final_Project.git 
2. Install depencies i.e. node.js, bootstrap 5.3.3, nodemailer
3. Configure SendGrid API
    - Sign up for a SendGrid account
    - Generate an API key from the SendGrid dashboard.
    - Create a .env file in the project root and add:
        -- SENDGRID_API_KEY=your_sendgrid_api_key
        -- RESTAURANT_MANAGER_EMAIL=your_restaurant_manager_email
4. Start the Nodemailer Server
    - Navigate to the Javascript folder: 
      -- type cd JS in terminal
    - Run the server
      -- type node server.js in terminal
5. Open the bookingform.html in Live server(VS Code) and complete and submit a booking 

