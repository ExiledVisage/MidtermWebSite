


fetch('https://run.mocky.io/v3/fc4b6db5-cae5-4945-b93e-e76a8680579e') //AreaCodeAPI
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
    })
    .then(data => {

        const areacodeDropdown = document.getElementById('areacodeInput');


        data.forEach(option => {
            const newOption = document.createElement('option');
            newOption.value = option.code;
            newOption.textContent = option.code;
            areacodeDropdown.appendChild(newOption);
        });

    })
    .catch(error => {
        console.error('There was a problem fetching data from the API:', error);

    });


fetch('https://run.mocky.io/v3/0cec2d23-1a06-4029-9e6d-304c034d6eae') //CompanyAPI
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
    })
    .then(data => {

        const areacodeDropdown = document.getElementById('companyInput');


        data.forEach(option => {
            const newOption = document.createElement('option');
            newOption.value = option.company;
            newOption.textContent = option.company;
            areacodeDropdown.appendChild(newOption);
        });

    })
    .catch(error => {
        console.error('There was a problem fetching data from the API:', error);

    });

fetch('https://run.mocky.io/v3/bce7c401-0bc6-48d4-9604-94c8e893baa0') //SubjectAPI
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
    })
    .then(data => {

        const areacodeDropdown = document.getElementById('subjectInput');

        n
        data.forEach(option => {
            const newOption = document.createElement('option');
            newOption.value = option.subject;
            newOption.textContent = option.subject;
            areacodeDropdown.appendChild(newOption);
        });

    })
    .catch(error => {
        console.error('There was a problem fetching data from the API:', error);

    });



document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('form');
    const registerButton = document.getElementById('registerButton');

    registerButton.addEventListener('click', function (event) {
        event.preventDefault();


        const nameInput = document.getElementById('nameInput');
        const surnameInput = document.getElementById('surnameInput');
        const companyInput = document.getElementById('companyInput');
        const emailInput = document.getElementById('emailInput');
        const areacodeInput = document.getElementById('areacodeInput');
        const phoneInput = document.getElementById('phoneInput');
        const subjectInput = document.getElementById('subjectInput');
        const yesInput = document.getElementById('yesInput');
        const noInput = document.getElementById('noInput');

        if (!emptyTest(nameInput)) {
            alert('Please enter a valid name.');
            return;
        }
        if (!emptyTest(surnameInput)) {
            alert('Please enter a valid surname.');
            return;
        }
        if (!emptyTest(companyInput)) {
            alert('Please select a company');
            return;
        }
        if (!emptyTest(emailInput)) {
            alert('Please enter an email.');
            return;
        }
        else if (emptyTest(emailInput)) {

            if (!validateEmail(emailInput.value)) {
                alert('Please enter a valid email address.');
                return;
            }

        }

        if (!emptyTest(areacodeInput)) {
            alert('Please select an area code');
            return;
        }
        if (!emptyTest(phoneInput)) {
            alert('Please enter a valid Turkish phone number');
            return;
        }
        else if (emptyTest(phoneInput)) {

            if (!validatePhone(phoneInput.value)) {
                alert('Please enter a valid Turkish phone number');
                return;
            }

        }
        if (!emptyTest(subjectInput)) {
            alert('Please select a subject.');
            return;
        }

        if (yesInput || noInput) {
            alert('Please select yes or no');
            return;
        }

        form.submit();
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validatePhone(phone) {
        const phonePattern = /^\d{7}$/;
        return phonePattern.test(phone);
    }

    function emptyTest(inputField) {
        const inputValue = inputField.value;
        if (inputValue.trim() === '') {
            return false;
        } else {
            return true;
        }
    }

});

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navBar = document.querySelector('.navigation-bar');


    menuIcon.addEventListener('click', function () {
        navBar.classList.toggle('active');
    });
});
