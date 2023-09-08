// server.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Define a route that handles both GET and POST requests
app
  .route("/bfhl")
  .get((req, res) => {
    // Handle GET request
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {
    // Handle POST request
    const requestData = req.body.data || [];
    const user_id = "john_doe_17091999"; // Replace with your logic
    const email = "john@xyz.com"; // Replace with your logic
    const roll_number = "ABCD123"; // Replace with your logic

    // Extract numbers and alphabets from requestData
    const numbers = requestData.filter((item) => typeof item === "number");
    const alphabets = requestData.filter(
      (item) => typeof item === "string" && item.length === 1
    );

    // Find the highest alphabet in alphabets
    const highest_alphabet =
      alphabets.length > 0
        ? String.fromCharCode(
            Math.max(...alphabets.map((char) => char.charCodeAt(0)))
          )
        : "";

    const response = {
      is_success: true,
      user_id,
      email,
      roll_number,
      numbers,
      alphabets,
      highest_alphabet: [highest_alphabet],
    };

    res.status(200).json(response);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
