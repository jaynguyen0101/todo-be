const express = require("express");
const cors = require("cors");
const tasksRouter = require("./routes/tasksRouter");

const app = express();

// Enable CORS for all origins
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Mount the tasks router under /api
app.use("/api", tasksRouter);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
