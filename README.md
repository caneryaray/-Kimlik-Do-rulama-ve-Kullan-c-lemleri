<img width="913" height="905" alt="image" src="https://github.com/user-attachments/assets/a82d1b07-749a-4da2-b151-1801f944c0e9" />

# Friends Database App

A React-based authentication and friends management application built with **React, React Router, Context API, Axios, and Local Storage**.

This project includes:

* User login authentication
* Protected routes
* Friends list page
* Add friend page
* Persistent login using localStorage
* Logout and redirect functionality

---

## Features

### Authentication

* User can login with username and password
* Login request is sent using Axios
* User token is stored in localStorage with `s11d2` key
* Auth state is managed using Context API

### Protected Routes

* `/friends`
* `/friends/add`

These pages are protected and require login.

If the user is not authenticated, they are redirected to:

`/login`

### Friends List

Friends are displayed in the required format:

`-name-email`

Example:

`-John Doe-john@example.com`

### Logout

On logout:

* localStorage is cleared
* user is redirected to login page

---

## Technologies Used

* React
* React Router DOM
* Context API
* Axios
* JavaScript
* CSS
* Local Storage

---

## Project Structure

src
├── components
│   ├── Header.jsx
│   ├── LoginForm.jsx
│   ├── FriendsList.jsx
│   ├── AddFriend.jsx
│   └── PrivateRoute.jsx
│
├── contexts
│   └── AuthContext.jsx
│
├── App.jsx
└── main.jsx

---

## Installation

npm install
npm run dev

---

## Login Flow

1. User enters credentials
2. Axios sends POST request
3. Token is saved in localStorage
4. User is redirected to friends page
5. Protected routes become accessible

---

## Author

**Caner Yaray**
Frontend Developer | React Developer
