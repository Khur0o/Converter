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
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

export async function fetchVideoDetails(videoID) {
    const apiKey = process.env.YOUTUBE_API_KEY; // Ensure this is set in your environment variables
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&part=snippet&key=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.items.length > 0 ? data.items[0] : null; // Return the first item or null
    } catch (error) {
        console.error('Error fetching video details from YouTube:', error);
        throw error;
    }
}
