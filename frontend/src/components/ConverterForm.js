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
    const thumbnailImage1 = document.getElementById('thumbnail-image1');
    const thumbnailImage2 = document.getElementById('thumbnail-image2');
    const videoTitleElement = document.getElementById('youtube-title');

    // Hide download button initially
    downloadButton.style.display = 'none';

    // Function to populate video quality options
    function populateVideoQualityOptions(qualities) {
        videoQuality.innerHTML = '<option value="">(Select one)</option>';
        qualities.forEach(q => {
            const option = document.createElement('option');
            option.value = q;
            option.textContent = q;
            videoQuality.appendChild(option);
        });
    }

    // Function to populate audio quality options
    function populateAudioQualityOptions(qualities) {
        audioQuality.innerHTML = '<option value="">(Select one)</option>';
        qualities.forEach(q => {
            const option = document.createElement('option');
            option.value = q;
            option.textContent = q;
            audioQuality.appendChild(option);
        });
    }

    // Show the correct quality section based on file format
    function updateQualityOptions() {
        qualityFormatDiv.style.display = 'none';
        videoQualitySection.style.display = 'none';
        audioQualitySection.style.display = 'none';

        if (fileFormat.value === 'mp3') {
            qualityFormatDiv.style.display = 'block';
            audioQualitySection.style.display = 'block';
        } else if (fileFormat.value === 'mp4') {
            qualityFormatDiv.style.display = 'block';
            videoQualitySection.style.display = 'block';
            // Populate video quality options (for example purposes)
            populateVideoQualityOptions(['360p', '480p', '720p', '1080p']);
        }
    }

    // Check if quality is selected and show download button
    function checkQualitySelection() {
        const audioSelected = fileFormat.value === 'mp3' && audioQuality.value;
        const videoSelected = fileFormat.value === 'mp4' && videoQuality.value;
        downloadButton.style.display = (audioSelected || videoSelected) ? 'block' : 'none';
    }

    // Validate form inputs before conversion
    function validateForm() {
        if (!urlInput.value.trim() && !fileInput.files.length) {
            alert('Please enter a URL or select a file.');
            return false;
        }
        return true;
    }

    // Extract video ID from YouTube URL
    function getYouTubeVideoID(url) {
        const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }

    // Fetch YouTube video details (including title)
    function fetchYouTubeVideoDetails(videoID) {
        return fetch(`http://localhost:5000/api/youtube/${videoID}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data && data.title) {
                    return data;
                } else {
                    throw new Error('Video details not found');
                }
            })
            .catch(error => {
                console.error('Error fetching video details:', error);
                return null;
            });
    }
    


    // Event listener for file format selection
    fileFormat.addEventListener('change', updateQualityOptions);

    // Event listeners for quality selection
    videoQuality.addEventListener('change', checkQualitySelection);
    audioQuality.addEventListener('change', checkQualitySelection);

    // Event listener for convert button
    convertButton.addEventListener('click', function () {
        if (validateForm()) {
            console.log('Starting conversion...');
            formContainer.style.display = 'flex';

            const typeUse = window.typeUse;
            if (typeUse) {
                const videoID = getYouTubeVideoID(urlInput.value);
                if (videoID) {
                    fetchYouTubeVideoDetails(videoID).then(details => {
                        if (details) {
                            // Set the YouTube thumbnail URL
                            const thumbnailURL = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
                            thumbnailImage1.src = thumbnailURL;
                            thumbnailImage2.src = thumbnailURL;

                            // Display the YouTube video title
                            videoTitleElement.textContent = details.title;
                        } else {
                            thumbnailImage1.src = '';
                            thumbnailImage2.src = '';
                            videoTitleElement.textContent = 'No title available';
                        }
                    });
                } else {
                    thumbnailImage1.src = '';
                    thumbnailImage2.src = '';
                    videoTitleElement.textContent = 'Invalid URL';
                }
            } else {
                if (fileInput.files.length > 0) {
                    const file = fileInput.files[0];
                    const fileURL = URL.createObjectURL(file);

                    if (file.type.startsWith('video/')) {
                        const video = document.createElement('video');
                        const canvas = document.createElement('canvas');
                        const context = canvas.getContext('2d');

                        video.src = fileURL;
                        video.addEventListener('loadeddata', () => {
                            canvas.width = video.videoWidth;
                            canvas.height = video.videoHeight;
                            video.currentTime = 1;
                            video.addEventListener('seeked', () => {
                                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                                const thumbnailURL = canvas.toDataURL('image/jpeg');
                                thumbnailImage1.src = thumbnailURL;
                                thumbnailImage2.src = thumbnailURL;
                                URL.revokeObjectURL(fileURL);
                            });
                        });
                    } else if (file.type.startsWith('image/')) {
                        thumbnailImage1.src = fileURL;
                        thumbnailImage2.src = fileURL;
                    } else {
                        thumbnailImage1.src = 'path/to/placeholder-image.jpg';
                    }
                } else {
                    thumbnailImage1.src = '';
                    thumbnailImage2.src = '';
                }
            }
        }
    });
});
