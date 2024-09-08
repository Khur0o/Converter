function updateQualityOptions() {
    const fileFormat = document.getElementById('file-format').value;
    const qualityFormatDiv = document.getElementById('quality-format');
    const videoQualitySection = document.getElementById('video-quality-section');
    const audioQualitySection = document.getElementById('audio-quality-section');

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
    }
}
