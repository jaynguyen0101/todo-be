# Todo App Backend

This is the backend for the Todo application. It provides a RESTful API to manage tasks, built with **Node.js**, **Express.js**, and **Prisma** ORM. The database is connected via **MySQL**.

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- A running **MySQL** database instance

---

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:

   ```bash
   DATABASE_URL=mysql://root:NQxhoWSEWxJKEctukOyCgiAjqwjVueqH@monorail.proxy.rlwy.net:49195/railway
   ```

4. Run database migrations:

   ```bash
   npx prisma migrate dev
   ```

5. Start the server:

   ```bash
   npm run dev
   ```

The server will start at `http://localhost:4000`.

---

### API Endpoints

#### 1. **GET /api/tasks**

- **Description**: Fetch all tasks.
- **Response**:
  ```json
  [
    {
      "id": 1,
      "title": "Example Task",
      "color": "blue",
      "completed": false,
      "createdAt": "2025-01-01T00:00:00.000Z",
      "updatedAt": "2025-01-01T00:00:00.000Z"
    }
  ]
  ```

#### 2. **POST /api/tasks**

- **Description**: Create a new task.
- **Request Body**:
  ```json
  {
    "title": "New Task",
    "color": "red"
  }
  ```
- **Response**:
  ```json
  {
    "id": 2,
    "title": "New Task",
    "color": "red",
    "completed": false,
    "createdAt": "2025-01-01T00:00:00.000Z",
    "updatedAt": "2025-01-01T00:00:00.000Z"
  }
  ```

#### 3. **GET /api/tasks/****:id**

- **Description**: Fetch a specific task by its ID.
- **Response**:
  ```json
  {
    "id": 1,
    "title": "Example Task",
    "color": "blue",
    "completed": false,
    "createdAt": "2025-01-01T00:00:00.000Z",
    "updatedAt": "2025-01-01T00:00:00.000Z"
  }
  ```

#### 4. **PUT /api/tasks/****:id**

- **Description**: Update a task's details.
- **Request Body**:
  ```json
  {
    "title": "Updated Task Title",
    "color": "green",
    "completed": true
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "title": "Updated Task Title",
    "color": "green",
    "completed": true,
    "createdAt": "2025-01-01T00:00:00.000Z",
    "updatedAt": "2025-01-01T00:00:00.000Z"
  }
  ```

#### 5. **DELETE /api/tasks/****:id**

- **Description**: Delete a task by its ID.
- **Response**:
  - **Status**: `204 No Content`

---

### Environment Variables

Add the following to your `.env` file:

```bash
DATABASE_URL=mysql://root:NQxhoWSEWxJKEctukOyCgiAjqwjVueqH@monorail.proxy.rlwy.net:49195/railway
```

---

### Deployment

To deploy the backend to a server, ensure the `.env` file is properly configured for the production database and start the server with:

```bash
npm start
```

---

### Tools & Technologies

- **Node.js** for the runtime environment.
- **Express.js** for building the API.
- **Prisma ORM** for database interactions.
- **MySQL** for the database.

---

### License

This project is licensed under the [MIT License](LICENSE).

---

### Contributions

Feel free to fork this repository and submit pull requests. Contributions are welcome!

