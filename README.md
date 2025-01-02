# movies-project

Here’s a single file containing all the necessary information

---

## Prerequisites

Ensure the following tools are installed on your system:

- **Node.js** (v14+)
- **npm** (v6+) 



## cloning project from github 

git clone https://github.com/lalit9456001913/movies-project.git

## move to project folder
cd movies_project
#### Backend
Navigate to the `backend` folder and install the dependencies:

```bash
cd backend
### 2. Install Dependencies
npm install

```

## Running the Servers

### Backend Server
Navigate to the `backend` folder and start the backend server:

```bash
cd backend
npm start
```

The backend server will start at [http://localhost:5000](http://localhost:5000).



## Seeding the Database

To seed initial data, such as users, follow these steps:

1. Ensure the backend server is connected to MongoDB.
2. Run the seed script:

   ```bash
   cd backend
   node seeder.js
   ```

This will create sample data for dsa tracker.

---

## Running the Application

1. Start the backend server.

3. Open [http://localhost:5000](http://localhost:3000) in your browser to use the application.

---

## Troubleshooting

- **MongoDB Connection Issues**: Ensure MongoDB is running locally or that the `MONGO_URI` in the `.env` file points to a valid database.
- **Port Conflicts**: Ensure no other processes are using ports  `5000` (backend).
- **Dependency Errors**: Run `npm install` in the respective directories to ensure all dependencies are installed.

---

Feel free to reach out if you encounter any issues while setting up or running the project!
README.md
Displaying README.md.