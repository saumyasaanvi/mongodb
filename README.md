
# Appointment Booking API

This is a backend application for managing appointment bookings. It uses **Node.js**, **Express.js**, **MongoDB Atlas** for cloud database storage, and **Postman** for API testing.

## Features

- Create, update, delete, and view appointments
- Manage client and service provider details
- Secure API with authentication (optional)
- Hosted on MongoDB Atlas for cloud data storage

## Prerequisites

- [Node.js](https://nodejs.org/) installed (version >= 12.0)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account
- [Postman](https://www.postman.com/) for API testing

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/saumyasaanvi/appointment-booking-api.git
cd appointment-booking-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up MongoDB Atlas

1. Sign in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new project and cluster.
3. Obtain the MongoDB URI from **Cluster Settings**.
4. Add the URI to the `.env` file in the project root:

   ```plaintext
   MONGODB_URI="your_mongodb_atlas_uri"
   PORT=3000
   ```

### 4. Run the Application

Start the server with:

```bash
npm start
```

The application will run on `http://localhost:5000` by default.

## API Documentation

Use [Postman](https://www.postman.com/) to test the API endpoints.

### Authentication

For endpoints requiring authentication, include a valid token in the request headers. Example:

```plaintext
Authorization: Bearer your_token
```

### Endpoints

Here are some example endpoints to manage appointments:

| Method | Endpoint              | Description                     |
|--------|------------------------|---------------------------------|
| POST   | `/api/appointments`    | Create a new appointment        |
| GET    | `/api/appointments`    | Get a list of all appointments  |
| GET    | `/api/appointments/:id`| Get details of a single appointment |
| PUT    | `/api/appointments/:id`| Update an appointment           |
| DELETE | `/api/appointments/:id`| Delete an appointment           |

### Example Requests

1. **Create Appointment**

   - **URL:** `/api/appointments`
   - **Method:** `POST`
   - **Body:**
     ```json
     {
       "clientName": "John Doe",
       "date": "2024-11-15",
       "time": "10:00",
       "service": "Consultation"
     }
     ```

2. **Get All Appointments**

   - **URL:** `/api/appointments`
   - **Method:** `GET`

3. **Update Appointment**

   - **URL:** `/api/appointments/:id`
   - **Method:** `PUT`
   - **Body:**
     ```json
     {
       "date": "2024-11-20",
       "time": "14:00"
     }
     ```

## Error Handling

The API responds with error messages and HTTP status codes for invalid requests, such as `400 Bad Request` for validation errors or `404 Not Found` if an appointment ID is incorrect.


