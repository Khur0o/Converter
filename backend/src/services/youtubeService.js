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
require('dotenv').config();

const API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/videos';

exports.fetchVideoDetails = async (videoID) => {
    try {
        const response = await axios.get(YOUTUBE_API_URL, {
            params: {
                part: 'snippet',
                id: videoID,
                key: API_KEY,
            },
        });
        const videoDetails = response.data.items[0];
        if (videoDetails) {
            return {
                title: videoDetails.snippet.title,
                description: videoDetails.snippet.description,
                thumbnail: videoDetails.snippet.thumbnails.high.url,
            };
        }
        return null;
    } catch (error) {
        console.error('Error fetching video details from YouTube API:', error);
        throw error;
    }
};


