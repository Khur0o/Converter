function switchForm(formType) {
    const urlForm = document.getElementById('url-form');
    const fileForm = document.getElementById('file-form');
    const urlInput = document.getElementById('url-input');
    const fileInput = document.getElementById('file-input');
    
    const urlLink = document.querySelector('a[href="#"][onclick*="url"]');
    const fileLink = document.querySelector('a[href="#"][onclick*="file"]');

    const formContainer = document.getElementById('form-container');

    if (formType === 'url') {
        urlForm.style.display = 'block';
        fileForm.style.display = 'none';

        fileInput.value = '';

        urlLink.classList.add('active');
        fileLink.classList.remove('active');

        formContainer.style.display = 'none';

        // Set to URL
        window.typeUse = true;
    } else if (formType === 'file') {
        urlForm.style.display = 'none';
        fileForm.style.display = 'block';

        urlInput.value = '';

        fileLink.classList.add('active');
        urlLink.classList.remove('active');

        formContainer.style.display = 'none';

        // Set to File
        window.typeUse = false;
    }
}

// Expose switchForm globally so it can be used in the HTML's onclick attribute
window.switchForm = switchForm;
