# Simple Card List Web Application 
This web application displays a list of cards featuring product images, costs, and descriptions. Users can delete unwanted products. 

## Tech Stack 
- **Frontend**: React, Material UI, Axios
- **Backend**: Node.js, Express.js

## Instructions on Project Set-Up
Install Node.js and npm on your machine. 

### Backend Set-Up

1. Navigate to the Backend directory: sanghunbyun-swe-interview-test/StarterCode/backend
2. Install neccessary packages by running "npm install"
3. Launch the server with "nodemon index.js". You should see the phrase "Server is running on port 5001".

### Frontend Set-Up
1. Navigate to the Frontend directory: sanghunbyun-swe-interview-test/StarterCode/frontend
2. Install neccessary packages by running "npm install".
3. Launch the server with "npm start". Open a web browser at http://localhost:3000 to see the list of six product cards. 

### Additional Notes
- Deleting products on the front end also deletes them from the backend; to retrieve deleted products, restart the backend server. 
- Product images are fetched randomly. Thus, refreshing the page will produce different images. 
