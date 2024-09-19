/*
 * Copyright 2024 Khur0o
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function switchForm(formType) {
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
window.typeUse = true;
window.switchForm = switchForm;
