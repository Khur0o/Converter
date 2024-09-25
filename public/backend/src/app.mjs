import express from 'express';
import cors from 'cors'; // Import the cors module
import youtubeRouter from './controllers/youtubeController.mjs'; // Correct import path

const app = express();
const PORT = process.env.PORT || 5000;

// Use CORS middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Use the router for all routes starting with '/'
app.use('/', youtubeRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
