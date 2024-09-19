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
const express = require('express');
const cors = require('cors');
const youtubeController = require('./controllers/youtubeController');

const app = express();
const port = 5000;

// Enable CORS for all origins (adjust as necessary for your use case)
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.get('/api/youtube/:videoID', youtubeController.getYouTubeVideoDetails);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
