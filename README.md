# Django Djoser Authentication Flow

    This repository demonstrates a simple Django project that uses Djoser for user authentication. Djoser is a Django REST Framework package that provides a set of views to handle basic actions such as registration, login, password reset, etc.

## Prerequisites

Before you begin, ensure you have met the following requirements:

    - You have installed Python  3.x

## Setting Up the Environment

1. Clone the repository:

    git clone https://github.com/Ikar700/Django-djoser.git cd Django-djoser


2. Create a virtual environment and activate it:

    python -m venv env source env/bin/activate 
    # On Windows, use env\Scripts\activate

3. Install the required packages:

    pip install -r requirements.txt


4. Apply migrations:

    python manage.py migrate


5. Run the server:

    python manage.py runserver


## Using the Application

    Once the server is running, you can interact with the application through the following endpoints:

    - **Registration**: `POST /auth/users/` - Register a new user.
    - **Login**: `POST /auth/token/login/` - Log in and obtain a JWT token.
    - **Logout**: `POST /auth/token/logout/` - Log out and invalidate the JWT token.
    - **Password Reset**: `POST /auth/users/set_password/reset/` - Initiate a password reset.

## Testing with Postman

    1. **Register a New User**: Send a POST request to `http://localhost:8000/auth/users/` with the following JSON payload:

    json { "email": "newuser@example.com", "username": "newuser", "password": "securepassword" }


2. **Obtain JWT Token**: After registration, log in to obtain a JWT token:

    json { "email": "newuser@example.com", "password": "securepassword" }


   The response will contain a token.

3. **Use JWT Token**: For subsequent requests to protected endpoints, include the token in the `Authorization` header as follows:

    Authorization: Bearer <your_received_token>


## Contributing

    Contributions are welcome! Please read our contributing guidelines before getting started.
    Also reach out to me at Cornex111@gmail.com first

## License

    This project is licensed under the MIT License. See `LICENSE` for details.