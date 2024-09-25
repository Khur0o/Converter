/*
 * Copyright 2024 Khur0o
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import express from 'express';
import cors from 'cors'; // Import the cors module
import { getYouTubeVideoDetails } from '../src/controllers/youtubeController.mjs';

const app = express();
const PORT = process.env.PORT || 5000;

// Use CORS middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Define routes
app.get('/api/youtube/:videoID', getYouTubeVideoDetails);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});