function switchForm(type) {
    const urlForm = document.getElementById('url-form');
    const fileForm = document.getElementById('file-form');

    if (type === 'url') {
        urlForm.style.display = 'block';
        fileForm.style.display = 'none';
    } else if (type === 'file') {
        urlForm.style.display = 'none';
        fileForm.style.display = 'block';
    }
}
