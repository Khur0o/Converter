/*
 * Copyright 2024 Khur0o
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * you may obtain a copy of the License at
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
import cors from 'cors'; // Import the cors package
import { fetchVideoDetails } from '../services/youtubeService.mjs'; // Ensure this path is correct

const router = express.Router();

// Enable CORS for all routes
router.use(cors()); // Allow all origins; you can configure this further if needed

// API endpoint to fetch video details by video ID
router.get('/api/youtube/:videoID', async (req, res) => {
    const { videoID } = req.params;
    try {
        const videoDetails = await fetchVideoDetails(videoID);
        if (videoDetails) {
            res.json({
                title: videoDetails.snippet.title,
                description: videoDetails.snippet.description
            });
        } else {
            res.status(404).json({ error: 'Video not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch video details' });
    }
});

export default router; // Ensure you export the router
