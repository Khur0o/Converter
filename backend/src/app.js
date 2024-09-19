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
const youtubeService = require('./services/youtubeServices');
require('dotenv').config(); // Ensure .env file is loaded

const app = express();

app.get('/api/youtube/:id', async (req, res) => {
    const videoID = req.params.id;
    try {
        const details = await youtubeService.getYouTubeVideoDetails(videoID);
        res.json(details);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch video details' });
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});

