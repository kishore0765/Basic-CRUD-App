# CRUD App - Quote Board 📃

This is a simple full-stack CRUD (Create, Read, Update, Delete) application. It features a React frontend and a Node.js backend, allowing users to manage a list of quotes.

## ✨ Features

- **Create**: Add new quotes to the list.
- **Read**: View all existing quotes.
- **Update**: Edit the text of an existing quote inline.
- **Delete**: Remove a quote from the list.

## 🛠️ Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A fast frontend build tool.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **shadcn/ui**: Re-usable components built using Radix UI and Tailwind CSS.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A minimal and flexible Node.js web application framework.

## 📂 Project Structure

The project is organized into two main directories:

```
/
├── backend/         # Contains the Node.js & Express.js API
└── frontend/        # Contains the React & TypeScript client application
```

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or newer is recommended)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)

### Backend Setup

1.  Navigate to the backend directory:
    ```sh
    cd backend
    ```
2.  Install the dependencies:
    ```sh
    npm install
    ```
3.  Start the development server:
    ```sh
    npm run dev
    ```
    The backend API will be running on `http://localhost:3000`.

### Frontend Setup

1.  Navigate to the frontend directory:
    ```sh
    cd frontend
    ```
2.  Install the dependencies:
    ```sh
    npm install
    ```
3.  Start the development server:
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or the next available port).

## 📝 API Endpoints

The backend provides the following RESTful API endpoints for managing quotes:

| Method   | Endpoint          | Description              | Request Body (JSON)              |
| :------- | :---------------- | :----------------------- | :------------------------------- |
| `GET`    | `/api/quotes`     | Fetches all quotes       | N/A                              |
| `POST`   | `/api/quotes`     | Adds a new quote         | `{ "text": "Your new quote" }`   |
| `PUT`    | `/api/quotes/:id` | Updates a quote by ID    | `{ "text": "Updated quote text" }` |
| `DELETE` | `/api/quotes/:id` | Deletes a quote by ID    | N/A                              |

---

This README provides a comprehensive overview for anyone looking to understand, run, or contribute to the project.