import express from 'express';
import { fetchVideoDetails } from '../services/youtubeService.mjs'; // Ensure this path is correct

const router = express.Router();

// API endpoint to fetch video details by video ID
router.get('/api/youtube/:videoID', async (req, res) => {
    const { videoID } = req.params;
    try {
        const videoDetails = await fetchVideoDetails(videoID);
        if (videoDetails) {
            res.json({
                title: videoDetails.snippet.title,
                description: videoDetails.snippet.description,
                thumbnail: videoDetails.snippet.thumbnails.default.url // Optionally include thumbnail
            });
        } else {
            res.status(404).json({ error: 'Video not found' });
        }
    } catch (error) {
        console.error('Error fetching video details:', error); // Log the error for debugging
        res.status(500).json({ error: 'Failed to fetch video details' });
    }
});

export default router; // Export the router as default
