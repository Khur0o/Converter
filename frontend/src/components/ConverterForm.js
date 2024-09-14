document.addEventListener('DOMContentLoaded', function () {
    // Cache DOM elements
    const fileFormat = document.getElementById('file-format');
    const qualityFormatDiv = document.getElementById('quality-format');
    const videoQualitySection = document.getElementById('video-quality-section');
    const audioQualitySection = document.getElementById('audio-quality-section');
    const videoQuality = document.getElementById('video-quality');
    const audioQuality = document.getElementById('audio-quality');
    const downloadButton = document.getElementById('download-button');
    const convertButton = document.getElementById('convert');
    const urlInput = document.getElementById('url-input');
    const fileInput = document.getElementById('file-input');
    const formContainer = document.getElementById('form-container');
    const thumbnailImage = document.getElementById('thumbnail-image');

    // Hide download button initially
    downloadButton.style.display = 'none';

    // Function to show the correct quality section based on file format
    function updateQualityOptions() {
        // Hide all sections initially
        qualityFormatDiv.style.display = 'none';
        videoQualitySection.style.display = 'none';
        audioQualitySection.style.display = 'none';

        // Determine the selected file format
        switch (fileFormat.value) {
            case 'mp3':
                qualityFormatDiv.style.display = 'block';
                audioQualitySection.style.display = 'block';
                break;
            case 'mp4':
                qualityFormatDiv.style.display = 'block';
                videoQualitySection.style.display = 'block';
                break;
        }
    }

    // Function to check if quality is selected and show download button
    function checkQualitySelection() {
        const audioSelected = fileFormat.value === 'mp3' && audioQuality.value !== "";
        const videoSelected = fileFormat.value === 'mp4' && videoQuality.value !== "";

        downloadButton.style.display = (audioSelected || videoSelected) ? 'block' : 'none';
    }

    // Function to validate form inputs before conversion
    function validateForm() {
        if (!urlInput.value.trim() && !fileInput.value) {
            alert('Please enter a URL or select a file.');
            return false;
        }
        
        console.log('URL or file input are filled, proceeding with conversion.');
        return true;
    }

    // Event listener for file format selection
    fileFormat.addEventListener('change', updateQualityOptions);

    // Event listeners for quality selection
    videoQuality.addEventListener('change', checkQualitySelection);
    audioQuality.addEventListener('change', checkQualitySelection);

    // Event listener for convert button
    convertButton.addEventListener('click', function () {
        if (validateForm()) {
            // Proceed with conversion logic here
            console.log('Starting conversion...');
            formContainer.style.display = 'flex';

            // Retrieve the current value of typeUse
            const typeUse = window.typeUse;

            if (typeUse) {
                // Function to extract video ID from YouTube URL
                function getYouTubeVideoID(url) {
                    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
                    const match = url.match(regex);
                    return match ? match[1] : null;
                }
                const videoID = getYouTubeVideoID(urlInput.value);
                if (videoID) {
                    // Set the YouTube thumbnail URL
                    const thumbnailURL = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
                    thumbnailImage.src = thumbnailURL;
                } else {
                    // Clear the thumbnail image if the URL is not valid
                    thumbnailImage.src = '';
                }
            } else {
                if (fileInput.files.length > 0) {
                    const file = fileInput.files[0];
                    const fileURL = URL.createObjectURL(file);
                
                    // Check if the file is a video
                    if (file.type.startsWith('video/')) {
                        // Create a video element and a canvas element
                        const video = document.createElement('video');
                        const canvas = document.createElement('canvas');
                        const context = canvas.getContext('2d');
                
                        // Set up the video element
                        video.src = fileURL;
                        video.addEventListener('loadeddata', () => {
                            // Set canvas size to match video dimensions
                            canvas.width = video.videoWidth;
                            canvas.height = video.videoHeight;
                
                            // Draw the first frame of the video on the canvas
                            video.currentTime = 1; // Skip to 1 second to get a frame
                            video.addEventListener('seeked', () => {
                                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                
                                // Get the data URL of the canvas content
                                const thumbnailURL = canvas.toDataURL('image/jpeg');
                                thumbnailImage.src = thumbnailURL;
                
                                // Clean up
                                URL.revokeObjectURL(fileURL);
                            });
                        });
                    } else if (file.type.startsWith('image/')) {
                        // For image files, display them directly
                        thumbnailImage.src = fileURL;
                    } else {
                        // For other file types, set a placeholder or default image
                        thumbnailImage.src = 'path/to/placeholder-image.jpg'; // Adjust path to your placeholder image
                    }
                } else {
                    thumbnailImage.src = '';
                }
                
            }
        }
    });
});
