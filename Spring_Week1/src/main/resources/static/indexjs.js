/*
Author : Sheikh Zubeena Shireen
ScreenCaptured Date : 7/11/2023
Matriculation Number : 1492765
 */
document.getElementById('form').addEventListener('submit', submitForm);
     function submitForm(event){
        event.preventDefault();
        const name = document.getElementById('uname').value;
        const number = document.getElementById('number').value;

        console.log("entered event", name, number, JSON.stringify({name,number}));
        // Send the user data to the backend
        fetch('/addUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"name":name,"number":number})
        })
//        .then(response => {response.text() })
        .then(data => {
            console.log('Data added:', data);
            // Call function to update table with the latest data
            fetchUserDetails();
        })
        .catch(error => console.error('Error:', error));
    }
/*Author : Sheikh Zubeena Shireen    ScreenCaptured Date : 7/11/2023   Matriculation Number : 1492765*/
    function fetchUserDetails() {
        // Fetch all user details from the backend
        fetch('/all')
        .then(response => response.json())
        .then(data => { console.log(data);
            displayUserDetails(data);
        })
        .catch(error => console.error('Error:', error));
    }

    function displayUserDetails(userData) {
            const table = document.getElementById('usersTableBody');
            table.innerHTML = '';

            console.log("fetched data of form", userData);

            userData.forEach(user => {
                const row = table.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                const cell3 = row.insertCell(2);
                cell1.innerHTML = user.id;
                cell2.innerHTML = user.name;
                cell3.innerHTML = user.number;
            });
        }

/*Author : Sheikh Zubeena Shireen    ScreenCaptured Date : 7/11/2023   Matriculation Number : 1492765*/
    document.addEventListener('DOMContentLoaded', function(){

    function checkFields() {
        const nameValue = document.getElementById('uname').value;
        const numberValue = document.getElementById('number').value;
        const submitButton = document.getElementById('submitButton');

        // Enable the submit button only when both fields have values
        if (nameValue && numberValue) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }

    };

document.getElementById('uname').addEventListener('input', checkFields);
    document.getElementById('number').addEventListener('input', checkFields);
});