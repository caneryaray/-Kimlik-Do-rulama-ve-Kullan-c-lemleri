<img width="913" height="905" alt="image" src="https://github.com/user-attachments/assets/a82d1b07-749a-4da2-b151-1801f944c0e9" />

# Friends Database App

This project is a **React-based authentication and friends management application** developed as part of a frontend development workflow.

The main purpose of this project is to practice and demonstrate modern React concepts such as **authentication, protected routes, Context API state management, API requests with Axios, and localStorage usage**.

The application allows users to securely log in, access protected pages, view a list of friends, and log out while maintaining session persistence.

---

## Project Purpose

The purpose of this project is to build a simple but scalable authentication flow using React.

It demonstrates:

* user login flow
* session persistence
* route protection
* API integration
* state management with Context API
* reusable component structure

This project is suitable as a **junior frontend developer portfolio project**.

---

## Main Features

### 1. User Authentication

Users can log in with a username and password.

The login request is sent to the backend API using Axios.

After successful login:

* user information is saved
* token is stored in localStorage
* user is redirected to Friends List page

The login data is stored using this key:

`s11d2`

---

### 2. Protected Routes

The following routes are protected:

* `/friends`
* `/friends/add`

If the user is not logged in, access is automatically redirected to:

`/login`

This is handled using a custom `PrivateRoute` component.

---

### 3. Friends List

The application fetches friend data from API and displays it in the required format:

`-name-email`

Example:

`-John Doe-john@example.com`

This format was implemented according to project requirements.

---

### 4. Logout Functionality

When the user clicks logout:

* localStorage is cleared
* session token is removed
* user is redirected to login page

This ensures secure session handling.

---

## Technologies Used

* React
* React Router DOM
* Context API
* Axios
* JavaScript (ES6+)
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

## Workflow Explanation

The user first lands on the login page.

After entering valid credentials:

1. POST request is sent
2. token is received
3. token is saved in localStorage
4. auth state is updated
5. redirect to friends page happens

Protected routes check whether the token exists before rendering the page.

---

## Author

**Caner Yaray**
Frontend Developer | React Developer




