function updateQualityOptions() {
    const fileFormat = document.getElementById('file-format').value;
    const qualityFormatDiv = document.getElementById('quality-format');
    const videoQualitySection = document.getElementById('video-quality-section');
    const audioQualitySection = document.getElementById('audio-quality-section');
    const videoQuality = document.getElementById('video-quality');
    const audioQuality = document.getElementById('audio-quality');
    const downloadButton = document.getElementById('download-button');
    const convert = document.getElementById('convert'); // Assuming this is a button
    const download = document.getElementById('download'); // Assuming this is the download button
    const url = document.getElementById('url-input');
    const file = document.getElementById('file-input');
    const formContainer = document.getElementById('form-container');

    // Listen for click on the convert button
    if (convert) {
        // Check if the URL or file inputs are empty
        if (!url.value.trim() || !file.value) {
            formContainer.style.display = 'block'; // Show the form container if either input is empty
        } else {
            // If URL and file are filled, proceed with your logic
            console.log('URL and file input are filled, proceed with conversion.');
            // You can put the conversion logic here
        }
    }

    // Hide the download button initially
    downloadButton.style.display = 'none';

    // Show appropriate quality selection options based on the file format
    if (fileFormat === 'mp3') {
        qualityFormatDiv.style.display = 'block';
        audioQualitySection.style.display = 'block';
        videoQualitySection.style.display = 'none';
    } else if (fileFormat === 'mp4') {
        qualityFormatDiv.style.display = 'block';
        videoQualitySection.style.display = 'block';
        audioQualitySection.style.display = 'none';
    } else {
        qualityFormatDiv.style.display = 'none';
        videoQualitySection.style.display = 'none';
        audioQualitySection.style.display = 'none';
        return; // Return early if no valid format is selected
    }

    // Listen for changes in quality selection
    function checkQualitySelection() {
        if ((fileFormat === 'mp3' && audioQuality.value !== "") ||
            (fileFormat === 'mp4' && videoQuality.value !== "")) {
            downloadButton.style.display = 'block'; // Show download button if quality is selected
        } else {
            downloadButton.style.display = 'none'; // Hide download button otherwise
        }
    }

    // Add event listeners to quality dropdowns to detect changes
    videoQuality.addEventListener('change', checkQualitySelection);
    audioQuality.addEventListener('change', checkQualitySelection);
}
