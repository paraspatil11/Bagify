# Bagify
Bagify is a full-stack e-commerce web application designed to provide a seamless shopping experience. It allows users to browse products, manage their accounts, and add items to their cart. The platform also includes features for admin/owner management, product creation, and user authentication.

## Features
- User Authentication: Secure login and registration using JWT-based authentication.
- Account Management: Users can view their account details and cart items.
- Shopping Cart: Add products to the cart and view them in the "My Account" section.
- Admin Panel: Admins can create and manage products.
- Responsive Design: Built with Tailwind CSS for a modern and responsive UI.
- Flash Messages: Provides feedback for actions like login, logout, and product creation.

## Tech Stack
- Frontend: EJS (Embedded JavaScript Templates), Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose
- Authentication: JWT (JSON Web Tokens)
- Session Management: Express-session and connect-flash for flash messages

## Installation
To get started with Bagify, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/paraspatil11/Bagify.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Bagify
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**

    ```bash
    MONGODB_URI=your-mongodb-uri
    JWT_KEY=your-jwt-secret
    EXPRESS_SESSION_SECRET=your-session-secret
    NODE_ENV=development
    ```

5. **Start the application:**

    ```
    npx nodemon app.js
    ```
6. **Open the application in your browser:**
    ```
    http://localhost:3000
    ```
### Users:

- Register and log in to access their account.
- View account details and cart items in the "My Account" section.
- Add products to the cart from the shop page.

### Admins:

- Access the admin panel to create and manage products.
