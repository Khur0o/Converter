//Header.js

function switchForm(formType) {
    const urlForm = document.getElementById('url-form');
    const fileForm = document.getElementById('file-form');
    const navLinks = document.querySelectorAll('nav a');
    const urlInput = document.getElementById('url-input');
    const fileInput = document.getElementById('file-input');
    const formContainer = document.getElementById('form-container');
    const qualityFormatDiv = document.getElementById('quality-format');
    const videoQualitySection = document.getElementById('video-quality-section');
    const audioQualitySection = document.getElementById('audio-quality-section');

    // Toggle form visibility based on the selected form type
    if (formType === 'url') {
        urlForm.style.display = 'block';
        fileForm.style.display = 'none';
        fileInput.value = '';
        window.typeUse = true;
        formContainer.style.display = 'none';
        qualityFormatDiv.style.display = 'none';
        videoQualitySection.style.display = 'none';
        audioQualitySection.style.display = 'none';
        console.log(typeUse);
    } else if (formType === 'file') {
        urlForm.style.display = 'none';
        fileForm.style.display = 'block';
        urlInput.value = '';
        formContainer.style.display = 'none';
        window.typeUse = false;
        qualityFormatDiv.style.display = 'none';
        videoQualitySection.style.display = 'none';
        audioQualitySection.style.display = 'none';
        console.log(typeUse);
    }

    // Update navigation link styling to reflect active form
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`nav a[onclick="switchForm('${formType}')"]`).classList.add('active');
}

// Add event listeners for navigation links to switch forms when clicked
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const formType = link.getAttribute('onclick').match(/'([^']+)'/)[1];
            switchForm(formType);
        });
    });
});

window.typeUse = true;
window.switchForm = switchForm;