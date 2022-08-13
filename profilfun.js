let first_name_check = false;
let Last_name_check = false;
let contac_check = false;
let pan_check = false;
let adhar_check = false;
let email_check = false;

//validation for first name
(document).querySelector('#first-name').addEventListener('change', function () {
    let first_name = (document).querySelector('#first-name').value;
    if (first_name.length > 1) 
        {
            for (let j = 0; j < first_name.length; j++) 
            {
                if (first_name[j] >= '!' && first_name[j] <= '@') {
                    first_name_check = false;
                    console.log('Found a symbol first name'+first_name_check);
                    (document).querySelector('#first-name-message').innerHTML = "Invalid";
                    (document).querySelector('#first-name-message').classList.add('text-danger');
                    break;
            
            } 
            else 
            {
                first_name_check = true;
                console.log('OK! first name'+first_name_check);
                (document).querySelector('#first-name-message').innerHTML = "OK!";
                (document).querySelector('#first-name-message').classList.remove('text-danger');
            }
            }
        }
     else 
     {
        first_name_check = false;
        console.log('Invaild first name'+first_name_check);
        (document).querySelector('#first-name-message').innerHTML = "Invalid";
        (document).querySelector('#first-name-message').classList.add('text-danger');
     }
});


 //validation for last name
 (document).querySelector('#last-name').addEventListener('change', function () {
    let first_name = (document).querySelector('#last-name').value;
    if (first_name.length > 1) 
    {
        for (let j = 0; j < first_name.length; j++) {
            if (first_name[j] >= '!' && first_name[j] <= '@') 
            {
                Last_name_check = false;
                console.log('Found a symbol');
                (document).querySelector('#last-name-message').innerHTML = "Invalid";
                (document).querySelector('#last-name-message').classList.add('text-danger');
                break;
            } 
            else 
            {
                Last_name_check = true;
                (document).querySelector('#last-name-message').innerHTML = "OK!";
                (document).querySelector('#last-name-message').classList.remove('text-danger');
            }
        }
    } 
    else 
    {
        Last_name_check = false;
        (document).querySelector('#last-name-message').innerHTML = "Invalid";
        (document).querySelector('#last-name-message').classList.add('text-danger');
    }
});

//Function for conatct Number
document.querySelector('#contact-number').addEventListener('change', function contactNumberValidation() {
    let contact_number = (document).querySelector('#contact-number').value;
    if (contact_number.length != 10) 
    {
        contac_check = false;
        document.querySelector('#contact-number-message').innerHTML = "Invalid";
        document.querySelector('#contact-number-message').classList.add('text-danger')
    }
    else 
    {
        if (isNaN(contact_number)) 
        {
            contac_check = false;
            document.querySelector('#contact-number-message').innerHTML = "Characters Not Allowed";
            document.querySelector('#contact-number-message').classList.add('text-danger');
        } 
        else 
        {
            if ((contact_number.charAt(0) != 9) && (contact_number.charAt(0) != 8) && (contact_number.charAt(0) != 7) && (contact_number.charAt(0) != 6)) 
            {
                contac_check = false;
                document.querySelector('#contact-number-message').innerHTML = "Cannot start with this";
                document.querySelector('#contact-number-message').classList.add('text-danger');
            }
            else 
            {
                contac_check = true;
                document.querySelector('#contact-number-message').innerHTML = "OK";
                document.querySelector('#contact-number-message').classList.remove('text-danger')
            }
        }
    }
});


//function for pan card validation
(document).querySelector('#pan-number').addEventListener('change', function () {
    let pan = (document).querySelector('#pan-number').value;
    if (pan.length != 10) 
    {
        (document).querySelector('#pan-number-message').innerHTML = "minimum 10 digits required";
        (document).querySelector('#pan-number-message').classList.add('text-danger');
    } 
    else 
    {
        let firstfive = pan.substring(0, 5);
        let nextfour = pan.substring(5, 9);
        console.log("first five :" + firstfive);
        console.log("next four : " + nextfour);
        for (let i = 0; i < firstfive.length; i++) {
            if (firstfive[i] >= 'A' && firstfive[i] <= 'Z') 
            {
                for (let k = 0; k < nextfour.length; k++) 
                {
                    if (nextfour[k] >= '0' && nextfour[k] <= '9') 
                    {
                        if (pan[9] >= 'A' && pan[9] <= 'Z') 
                        {
                            pan_check = true;
                            (document).querySelector('#pan-number-message').innerHTML = "OK";
                            (document).querySelector('#pan-number-message').classList.remove('text-danger');
                        } 
                        else 
                        {
                            pan_check = false;
                            (document).querySelector('#pan-number-message').innerHTML = "Last Digit error";
                            (document).querySelector('#pan-number-message').classList.add('text-danger');
                        }
                    } 
                    else 
                    {
                        pan_check = false;
                        (document).querySelector('#pan-number-message').innerHTML = "Invalid Pan Number";
                        (document).querySelector('#pan-number-message').classList.add('text-danger');
                        break;
                    }
                }
            } 
            else 
            {
                pan_check = false;
                (document).querySelector('#pan-number-message').innerHTML = "First Five Character error";
                (document).querySelector('#pan-number-message').classList.add('text-danger');
                break;
            }
        }
    }
});


//function for adhar card number
(document).querySelector('#aadhar-number').addEventListener('change', function () {
    let adharNumber = (document).querySelector('#aadhar-number').value;
    if (adharNumber.length != 12) 
    {
        adhar_check = false;
        (document).querySelector('#name-message').innerHTML = "Invalid Adhar Number";
        (document).querySelector('#name-message').classList.add('text-danger');
    } 
    else 
    {
        for (let i = 0; i < adharNumber.length; i++) 
        {
            console.log('Array>>' + adharNumber[i]);
            if (adharNumber[i] < '0' || adharNumber[i] > '9') 
            {
                adhar_check = false;
                (document).querySelector('#name-message').innerHTML = "Special Character not allowed";
                (document).querySelector('#name-message').classList.add('text-danger');
                break;
            }
            else 
            {
                adhar_check = true;
                (document).querySelector('#name-message').innerHTML = "OK";
                (document).querySelector('#name-message').classList.remove('text-danger');
            }
        }
    }
});


//validation for email
(document).querySelector('#email').addEventListener('change', function () {
    let email = (document).querySelector('#email').value;
    var atposition = email.indexOf('@');
    var dotposition = email.lastIndexOf('.');
    if (atposition < 1 || (email.length - 2) == dotposition) 
    {
        email_check = false;
        console.log('got the condition');
        (document).querySelector('#email-message').innerHTML = "Invalid";
        (document).querySelector('#email-message').classList.add('text-danger');
    } 
    else if (atposition < dotposition) 
    {
        email_check = true;
        (document).querySelector('#email-message').innerHTML = "OK";
        (document).querySelector('#email-message').classList.remove('text-danger');
    } 
    else 
    {
        email_check = false;
        (document).querySelector('#email-message').innerHTML = "Invalid";
        (document).querySelector('#email-message').classList.add('text-danger');
    }
});







document.querySelector('#personal-details-submit-button').addEventListener('click', function () {

    if(first_name_check == true && Last_name_check == true && contac_check == true && pan_check == true && adhar_check == true && email_check == true)
    {
        console.log('entered the loop');
        
        let submitPersonalDetailsForm = new FormData() 
        submitPersonalDetailsForm.append('dateOfBirth', document.getElementById('date-of-birth').value)
        submitPersonalDetailsForm.append('pancardNumber', document.getElementById('pan-number').value)
        submitPersonalDetailsForm.append('aadharCardNumber', document.getElementById('aadhar-number').value)
        submitPersonalDetailsForm.append('contactNumber', document.getElementById('contact-number').value)
        submitPersonalDetailsForm.append('email', document.getElementById('email').value)
        submitPersonalDetailsForm.append('address', document.getElementById('address').value)
        submitPersonalDetailsForm.append('city', document.getElementById('city').value)
        submitPersonalDetailsForm.append('state', document.getElementById('state').value)
        submitPersonalDetailsForm.append('pincode', document.getElementById('pincode').value)
        submitPersonalDetailsForm.append('country', document.getElementById('country').value)
        submitPersonalDetailsForm.append('pancardPhoto', document.getElementById('pan-photo').value)
        submitPersonalDetailsForm.append('aadharCardPhoto', document.getElementById('aadhar-photo').value)
        submitPersonalDetailsForm.append('firstName', document.getElementById('first-name').value)
        submitPersonalDetailsForm.append('middleName', document.getElementById('middle-name').value)
        submitPersonalDetailsForm.append('lastName', document.getElementById('last-name').value)
        
        document.getElementById('date-of-birth-value').innerText = submitPersonalDetailsForm.get('dateOfBirth')
        document.getElementById('pancard-value').innerText = submitPersonalDetailsForm.get('pancardNumber')
        document.getElementById('aadhar-card-value').innerText = submitPersonalDetailsForm.get(
          'aadharCardNumber')
        document.getElementById('contact-number-value').innerText = submitPersonalDetailsForm.get(
          'contactNumber')
        document.getElementById('email-value').innerText = submitPersonalDetailsForm.get('email')
        document.getElementById('address-value').innerText = submitPersonalDetailsForm.get('address')
        document.getElementById('city-value').innerText = submitPersonalDetailsForm.get('city')
        document.getElementById('state-value').innerText = submitPersonalDetailsForm.get('state')
        document.getElementById('pincode-value').innerText = submitPersonalDetailsForm.get('pincode')
        document.getElementById('country-value').innerText = submitPersonalDetailsForm.get('country')
        document.getElementById('full-name-value').innerText = submitPersonalDetailsForm.get('firstName') +
          " " + submitPersonalDetailsForm.get('middleName') + " " + submitPersonalDetailsForm.get('lastName')
        
        if (submitPersonalDetailsForm.get('pancardPhoto').length != 0) {
          document.getElementById('pancard-photo').firstElementChild.classList.remove('fa-ban')
          document.getElementById('pancard-photo').firstElementChild.classList.add('fa-circle-check')
          document.getElementById('pancard-photo').firstElementChild.classList.add('text-success')
        }
        
        if (submitPersonalDetailsForm.get('aadharCardPhoto').length != 0) {
          document.getElementById('aadhar-card-photo').firstElementChild.classList.remove('fa-ban')
          document.getElementById('aadhar-card-photo').firstElementChild.classList.add('fa-circle-check')
          document.getElementById('aadhar-card-photo').firstElementChild.classList.add('text-success')
        }
        
        document.getElementById('body').classList.remove('d-none');
        document.querySelector('.personal-details-modal').classList.add('d-none')
    }

    else
    {
        alert('check details');
    }

    

});



