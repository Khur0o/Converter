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
const youtubeService = require('../services/youtubeService');

exports.getYouTubeVideoDetails = async (req, res) => {
    try {
        const videoID = req.params.videoID;
        const details = await youtubeService.fetchVideoDetails(videoID);
        if (details) {
            res.json(details);
        } else {
            res.status(404).json({ message: 'Video details not found' });
        }
    } catch (error) {
        console.error('Error fetching video details:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


