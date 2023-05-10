# Gym Workout App
Welcome to the Gym Workout App! This app is designed to help you keep track of your workouts and progress towards your fitness goals.


## Installation
To install the app, follow these steps:

Clone the repository to your local machine.
Open your terminal and navigate to the root directory of the project.
Enter the backend folder by running cd backend.
Create a .env file in the backend folder.
In the .env file, set the DB_URI variable to the URI of your MongoDB database.
Set the SECRET variable to a string that you want to use to hash your passwords.
Here's an example of what your .env file should look like:

Copy code
DB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
SECRET=mysecretpassword
Be sure to replace <username>, <password>, <cluster>, and <dbname> with the appropriate values for your MongoDB database.

## Usage
To start the app, follow these steps:

Open your terminal and navigate to the root directory of the project.
Enter the backend folder by running cd backend.
Run npm install to install the necessary dependencies.
Run npm start to start the server.
Open a new terminal window and navigate to the root directory of the project.
Enter the frontend folder by running cd frontend.
Run npm install to install the necessary dependencies.
Run npm start to start the app.
The app should now be running in your browser at http://localhost:3000/.

Contributing
If you would like to contribute to the project, feel free to submit a pull request. We welcome any contributions that will help make the app better!
