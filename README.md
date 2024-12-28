# Visa Navigator - Server Side  

## Purpose  
The Visa Navigator server-side application powers the backend functionality, including user authentication, data storage, and API management for visas and applications.  

## Live URL  
[API Base URL](https://visa-guide-server-zeta.vercel.app)  

## Key Features  
- **Secure Authentication**: JWT-based token authentication for user access.  
- **CRUD Operations**: Manage visa and application data effectively.  
- **Protected Routes**: Secure APIs to ensure data privacy and access control.  
- **Search and Filter API**: Enable efficient data retrieval based on user input.  
- **Database Integration**: MongoDB with Mongoose for data storage and retrieval.  

## NPM Packages Used  
- **Express**: Backend framework for creating APIs.  
- **Mongoose**: Object Data Modeling for MongoDB.  
- **Cors**: Handle cross-origin requests.  
- **Dotenv**: Manage sensitive credentials with environment variables.  
- **Morgan**: Logging middleware for server requests.  

## How to Run  
1. Clone the repository.  
2. Install dependencies: `npm install`.  
3. Add environment variables for MongoDB and JWT secret in a `.env` file.  
4. Start the server: `npm start`.  

## API Endpoints  
- **GET /visas**: Fetch all visas.  
- **POST /visas**: Add a new visa (Protected).  
- **PUT /visas/:id**: Update visa details (Protected).  
- **DELETE /visas/:id**: Remove a visa (Protected).  
- **POST /apply**: Submit visa application (Protected).  
