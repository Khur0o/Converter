function updateQualityOptions() {
    const fileFormat = document.getElementById('file-format').value;
    const qualityFormatFieldset = document.getElementById('quality-format');
    const videoQualityLabel = document.getElementById('video-quality-label');
    const videoQualitySelect = document.getElementById('video-quality');
    const audioQualityLabel = document.getElementById('audio-quality-label');
    const audioQualitySelect = document.getElementById('audio-quality');

    if (fileFormat === "mp3") {
        // Show audio quality, hide video quality
        qualityFormatFieldset.style.display = 'block';
        audioQualityLabel.style.display = 'block';
        audioQualitySelect.style.display = 'block';
        videoQualityLabel.style.display = 'none';
        videoQualitySelect.style.display = 'none';
    } else if (fileFormat === "mp4") {
        // Show video quality, hide audio quality
        qualityFormatFieldset.style.display = 'block';
        videoQualityLabel.style.display = 'block';
        videoQualitySelect.style.display = 'block';
        audioQualityLabel.style.display = 'none';
        audioQualitySelect.style.display = 'none';
    } else {
        // Hide both if no selection
        qualityFormatFieldset.style.display = 'none';
        videoQualityLabel.style.display = 'none';
        videoQualitySelect.style.display = 'none';
        audioQualityLabel.style.display = 'none';
        audioQualitySelect.style.display = 'none';
    }
}
