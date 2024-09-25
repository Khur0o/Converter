import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config({ path: './config/YOUTUBE_API_KEY.env' }); // Ensure correct path

export async function fetchVideoDetails(videoID) {
    const apiKey = process.env.YOUTUBE_API_KEY; // Ensure this is set in your environment variables
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&part=snippet&key=${apiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`YouTube API responded with status ${response.status}`);
        }
        const data = await response.json();
        return data.items.length > 0 ? data.items[0] : null; // Return the first item or null
    } catch (error) {
        console.error('Error fetching video details from YouTube:', error);
        throw error;
    }
}
