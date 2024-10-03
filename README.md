# React Firebase ShadCn Starter Template

## Overview

This repository is a **starter template** for building React applications with Firebase and Tailwind CSS. It includes essential configurations and setups for:

- Firebase Authentication (Google Sign-In)
- Firebase Firestore & Storage integration
- Dark/Light mode toggle (with ShadCN UI components)
- Tailwind CSS for styling
- Vite for fast development and hot-reload

The project is structured to serve as a foundation for customer-facing applications, with a focus on flexibility, performance, and scalability.

## Prebuilt-Features

- **Google Authentication**: Users can sign in using their Google account through Firebase Authentication.
- **Dark/Light Mode Toggle**: Switch between dark and light modes using a toggle component.
- **Firebase Firestore & Storage Integration**: Firebase is configured to allow easy usage of Firestore (database) and Storage for files.
- **Tailwind CSS**: Pre-configured Tailwind CSS for efficient styling and responsive design.
- **Vite for Development**: Vite provides an optimized build tool for modern web applications.
  

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Firebase project created and configured.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/tanayyyyy7/react-firebase-shadcn-starter-template.git
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up your environment variables:

    Create a `.env` file in the root directory and add your Firebase configuration:

    ```bash
    VITE_FIREBASE_API_KEY=your-firebase-api-key
    VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
    VITE_FIREBASE_PROJECT_ID=your-project-id
    VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    VITE_FIREBASE_APP_ID=your-app-id
    VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
    ```

### Firebase Setup

1. In the `firebase.config.js` file, the Firebase SDK is initialized using your environment variables.
2. You can expand the Firebase features by adding Firestore, Storage, etc., as required for your project.

### Running the Application

To run the application in development mode:

```bash
npm run dev
```

This will start the Vite development server. The app should now be running at `http://localhost:3000`.

### Building for Production

To build the app for production:

```bash
npm run build
```

The optimized files will be in the `dist` folder, ready to be deployed.

## Usage

- **Google Sign-In**: Once the app is running, users can sign in via Google by clicking the sign-in button.
- **Dark Mode Toggle**: A toggle button allows users to switch between dark and light themes.

## Customization

- **Tailwind CSS**: You can extend the styles by customizing the `tailwind.config.js`.
- **ShadCN UI**: Components can be further customized or replaced as per your design needs. Check `src/components/ui/` for a list of pre-installed components
- **Firebase Services**: Additional Firebase services (Firestore, Storage, etc.) can be integrated as needed by updating the `firebase.config.js` file and adding the relevant imports.
