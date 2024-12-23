# Airnest

Airnest is a web application inspired by Airbnb, designed to allow users to explore and book accommodations. This project is a clone of the Airbnb website, created using modern web technologies.

## Features

- **Frontend**: 
  - Built using HTML, CSS, and JavaScript.
  - Fully responsive design to support various screen sizes.
  - Intuitive user interface with features like search, filters, and add to card details.

- **Backend**:
  - User data and booking information are stored and managed using Firebase.
  - Local Storage is used for temporary data handling and session management.

## Installation

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/airnest.git
   ```

2. Navigate to the project directory:
   ```bash
   cd airnest
   ```

3. Open the `index.html` file in your browser to view the application.

## Project Structure

```
Airnest/
├── index.html         # Main HTML file
├── style.css          # Stylesheet for the application
├── script.js          # Main JavaScript logic
├── prductpage.html # redring page detail in this page
└── icon/            # Contains images and other static assets
```

## Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Add a web app to your project and copy the configuration settings.
3. Replace the placeholder in `firebase-config.js` with your Firebase configuration:
   ```javascript
   const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
   };
   ```
4. Enable the required Firebase services (e.g., Firestore, Authentication) for your application.

## Usage

- Open the website and use the search functionality to find accommodations.
- Sign in or sign up to book accommodations.
- The website stores user data securely using Firebase.

## Contributing

Contributions are welcome! If you have suggestions or want to report a bug, please open an issue or submit a pull request.


---

Thank you for using Airnest!
