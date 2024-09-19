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

const axios = require('axios');
require('dotenv').config(); // Load environment variables from .env file

const API_KEY = process.env.YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

async function getYouTubeVideoDetails(videoID) {
    try {
        const response = await axios.get(`${BASE_URL}/videos`, {
            params: {
                part: 'snippet,contentDetails,statistics',
                id: videoID,
                key: API_KEY
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch YouTube video details');
    }
}

module.exports = {
    getYouTubeVideoDetails
};
