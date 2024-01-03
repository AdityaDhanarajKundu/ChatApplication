# Chat Application Using React and Firebase

This project(Chatify) is a real-time chat web application built using React for the frontend and Firebase services for backend functionalities like Firestore database, Firebase Authentication, and Firebase Storage. The application allows users to sign up, sign in, send text messages, and share images/files in real-time. This application is deployed and live on vercel.
<a href="https://chat-application-aditya.vercel.app/">Chatify</a>

## Features

- **User Authentication:**
  - Registration: Users can create a new account by providing an email address and password.
  - Sign In: Existing users can sign in using their registered credentials.
  - Log Out: Users can sign out of their accounts.

- **Real-time Chat:**
  - Users can view and participate in real-time chat conversations.
  - Sending Messages: Users can send text messages instantly.
  - File/Image Upload: Users can upload and share images/files in the chat.

## Technologies Used

- **React:** JavaScript library used for building the frontend user interface.
- **Firebase:** Google's platform used for backend services.
  - **Firebase Authentication:** Handles user authentication and authorization.
  - **Firestore Database:** Cloud-based NoSQL database for storing chat messages and user information and maintaining the different separate data collections.
  - **Firebase Storage:** Cloud storage service used for uploading and managing images/files.
- **SASS:** Syntactically Awesome Style Sheets for styling components and UI
- **Vite:** Vite is used to build this project.

## Run Locally

1. Install the dependencies using `npm install`
2. Set up the firebase project in firebase console:
    - Create a new project on Firebase.
    - Enable Firebase Authentication, Firestore and Firebase storage services.
    -  Obtain Firebase configuration credentials.
3. Replace the firebase configuration with your own firebase config.
4. Start the application in development mode using `npm run dev`

## Deployment

Free hosting services like Render.com Vercel or Netlify can be used for deployment following their respective methods and techniques. This particular application is hosted on Vercel.

## Contributions

Contributions to this project are welcome. Feel free to create a pull request with your improvements.