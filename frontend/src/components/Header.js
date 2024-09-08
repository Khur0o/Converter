function switchForm(formType) {
    const urlForm = document.getElementById('url-form');
    const fileForm = document.getElementById('file-form');
    
    const urlLink = document.querySelector('a[href="#"][onclick*="url"]');
    const fileLink = document.querySelector('a[href="#"][onclick*="file"]');

    // Show or hide forms based on selected option
    if (formType === 'url') {
        urlForm.style.display = 'block';
        fileForm.style.display = 'none';

        // Set the active class to URL
        urlLink.classList.add('active');
        fileLink.classList.remove('active');
    } else if (formType === 'file') {
        urlForm.style.display = 'none';
        fileForm.style.display = 'block';

        // Set the active class to File
        fileLink.classList.add('active');
        urlLink.classList.remove('active');
    }
}
