                                //validation for first name

                                (document).querySelector('#first-name').addEventListener('change', function () {


                                    let first_name = (document).querySelector('#first-name').value;

                                    if (first_name.length > 1) {

                                        for (let j = 0; j < first_name.length; j++) {

                                            if (first_name[j] >= '!' && first_name[j] <= '@') {

                                                console.log('Found a symbol');

                                                (document).querySelector('#first-name-message').innerHTML = "Invalid";
                                                (document).querySelector('#first-name-message').classList.add('text-danger');
                                                check = false;

                                                break;

                                            } else {

                                                (document).querySelector('#first-name-message').innerHTML = "OK!";
                                                (document).querySelector('#first-name-message').classList.remove('text-danger');
                                                check = true;

                                            }

                                        }

                                    } else {

                                        (document).querySelector('#first-name-message').innerHTML = "Invalid";
                                        (document).querySelector('#first-name-message').classList.add('text-danger');

                                    }

                                });



                                //validation for middle name

                                // (document).querySelector('#middle-name').addEventListener('change', function () {

                                //     let first_name = (document).querySelector('#middle-name').value;

                                //     if (first_name.length != 0) {

                                //         for (let j = 0; j < first_name.length; j++) {

                                //             if (first_name[j] >= '!' && first_name[j] <= '@') {

                                //                 console.log('Found a symbol');

                                //                 (document).querySelector('#middle-name-message').innerHTML = "Found a Symbol";

                                //                 check = false;

                                //                 break;

                                //             }

                                //             else {

                                //                 (document).querySelector('#middle-name-message').innerHTML = "OK!";

                                //                 check = true;

                                //             }

                                //         }

                                //     }

                                //     else {

                                //         (document).querySelector('#middle-name-message').innerHTML = "Null!";

                                //     }

                                // });

                                //validation for last name
                                (document).querySelector('#last-name').addEventListener('change', function () {

                                    let first_name = (document).querySelector('#last-name').value;

                                    if (first_name.length > 1) {

                                        for (let j = 0; j < first_name.length; j++) {

                                            if (first_name[j] >= '!' && first_name[j] <= '@') {

                                                console.log('Found a symbol');

                                                (document).querySelector('#last-name-message').innerHTML = "Invalid";
                                                (document).querySelector('#last-name-message').classList.add('text-danger');
                                                break;

                                            } else {

                                                (document).querySelector('#last-name-message').innerHTML = "OK!";
                                                (document).querySelector('#last-name-message').classList.remove('text-danger');

                                            }

                                        }

                                    } else {

                                        (document).querySelector('#last-name-message').innerHTML = "Invalid";
                                        (document).querySelector('#last-name-message').classList.add('text-danger');

                                    }

                                });


                                //Function for conatct Number

                                document.querySelector('#contact-number').addEventListener('change', function contactNumberValidation() {
                                    let contact_number = (document).querySelector('#contact-number').value;
                                    if (contact_number.length != 10) {
                                        document.querySelector('#contact-number-message').innerHTML = "Invalid";
                                        document.querySelector('#contact-number-message').classList.add('text-danger')
                                    }
                                     else {
                                        if (isNaN(contact_number)) {
                                            document.querySelector('#contact-number-message').innerHTML = "Characters Not Allowed";
                                            document.querySelector('#contact-number-message').classList.add('text-danger');
                                        } 
                                        else {
                                            if ((contact_number.charAt(0) != 9) && (contact_number.charAt(0) != 8) && (contact_number.charAt(0) != 7) && (contact_number.charAt(0) != 6)) {
                                                document.querySelector('#contact-number-message').innerHTML = "Cannot start with this";
                                                document.querySelector('#contact-number-message').classList.add('text-danger');
                                            }
                                             else {
                                                document.querySelector('#contact-number-message').innerHTML = "OK";
                                                document.querySelector('#contact-number-message').classList.remove('text-danger')
                                            }
                                        }
                                    }
                                });


                                //function for pan card validation

                                (document).querySelector('#pan-number').addEventListener('change', function () {

                                    let pan = (document).querySelector('#pan-number').value;
                                    if (pan.length != 10) {

                                        (document).querySelector('#pan-number-message').innerHTML = "minimum 10 digits required";
                                        (document).querySelector('#pan-number-message').classList.add('text-danger');
                                    } else {

                                        let firstfive = pan.substring(0, 5);

                                        let nextfour = pan.substring(5, 9);

                                        console.log("first five :" + firstfive);

                                        console.log("next four : " + nextfour);

                                        for (let i = 0; i < firstfive.length; i++) {

                                            if (firstfive[i] >= 'A' && firstfive[i] <= 'Z') {

                                                for (let k = 0; k < nextfour.length; k++) {

                                                    if (nextfour[k] >= '0' && nextfour[k] <= '9') {

                                                        if (pan[9] >= 'A' && pan[9] <= 'Z') {

                                                            (document).querySelector('#pan-number-message').innerHTML = "OK";
                                                            (document).querySelector('#pan-number-message').classList.remove('text-danger');

                                                        } else {

                                                            (document).querySelector('#pan-number-message').innerHTML = "Last Digit error";
                                                            (document).querySelector('#pan-number-message').classList.add('text-danger');

                                                        }

                                                    } else {

                                                        (document).querySelector('#pan-number-message').innerHTML = "Invalid Pan Number";
                                                        (document).querySelector('#pan-number-message').classList.add('text-danger');

                                                        break;

                                                    }

                                                }

                                            } else {

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

                                    if (adharNumber.length != 12) {

                                        (document).querySelector('#name-message').innerHTML = "Invalid Adhar Number";
                                        (document).querySelector('#name-message').classList.add('text-danger');

                                    } else {

                                        for (let i = 0; i < adharNumber.length; i++) {

                                            console.log('Array>>' + adharNumber[i]);

                                            if (adharNumber[i] < '0' || adharNumber[i] > '9') {

                                                (document).querySelector('#name-message').innerHTML = "Special Character not allowed";
                                                (document).querySelector('#name-message').classList.add('text-danger');

                                                break;

                                            } else {

                                                (document).querySelector('#name-message').innerHTML = "OK";
                                                (document).querySelector('#name-message').classList.remove('text-danger');

                                            }

                                        }

                                    }

                                });



                                //function for pincode

                                (document).querySelector('#pincode').addEventListener('change', function () {

                                    console.log('running');

                                    let pincode = (document).querySelector('#pincode').value;

                                    console.log('Pincode ' + pincode);

                                    if (pincode.length != 6) {

                                        (document).querySelector('#pincode-message').innerHTML = "Invalid";
                                        (document).querySelector('#pincode-message').classList.add('text-danger');

                                    } else {

                                        (document).querySelector('#pincode-message').innerHTML = "OK!";
                                        (document).querySelector('#pincode-message').classList.remove('text-danger');

                                    }

                                });






                                //validation for email
                                (document).querySelector('#email').addEventListener('change', function () {

                                    let email = (document).querySelector('#email').value;

                                    var atposition = email.indexOf('@');

                                    var dotposition = email.lastIndexOf('.');

                                    if (atposition < 1 || (email.length - 2) == dotposition) {

                                        console.log('got the condition');

                                        (document).querySelector('#email-message').innerHTML = "Invalid";
                                        (document).querySelector('#email-message').classList.add('text-danger');
                                    } else if (atposition < dotposition) {

                                        (document).querySelector('#email-message').innerHTML = "OK";
                                        (document).querySelector('#email-message').classList.remove('text-danger');
                                    } else {

                                        (document).querySelector('#email-message').innerHTML = "Invalid";
                                        (document).querySelector('#email-message').classList.add('text-danger');
                                    }

                                });




                                ////// Validation on Bank Details////////////



                                //validation for name of bank

                                (document).querySelector('#bank-name').addEventListener('change', function () {

                                    console.log('working');

                                    let bank_name = (document).querySelector('#bank-name').value;

                                    if (bank_name.length != 1) {

                                        for (let j = 0; j < bank_name.length; j++) {

                                            if (bank_name[j] >= '!' && bank_name[j] <= '@') {

                                                console.log('Found a symbol');

                                                (document).querySelector('#bank-name-message').innerHTML = "Special charaters not allowed";
                                                (document).querySelector('#bank-name-message').classList.add('text-danger');

                                                check = false;

                                                break;

                                            } else {

                                                (document).querySelector('#bank-name-message').innerHTML = "OK!";
                                                (document).querySelector('#bank-name-message').classList.remove('text-danger');
                                                check = true;

                                            }

                                        }

                                    } else {

                                        (document).querySelector('#bank-name-message').innerHTML = "Invalid";
                                        (document).querySelector('#bank-name-message').classList.add('text-danger');
                                    }

                                });



                                //validation for BRANCH of bank

                                (document).querySelector('#bank-branch').addEventListener('change', function () {

                                    console.log('working');

                                    let bank_branch = (document).querySelector('#bank-branch').value;

                                    if (bank_branch.length != 1) {

                                        for (let j = 0; j < bank_branch.length; j++) {

                                            if (bank_branch[j] >= '!' && bank_branch[j] <= '@') {

                                                console.log('Found a symbol');

                                                (document).querySelector('#bank-branch-message').innerHTML = "Special characters not allowed";
                                                (document).querySelector('#bank-branch-message').classList.add('text-danger');
                                                check = false;

                                                break;

                                            } else {

                                                (document).querySelector('#bank-branch-message').innerHTML = "Ok";
                                                (document).querySelector('#bank-branch-message').classList.remove('text-danger');

                                                check = true;

                                            }

                                        }

                                    } else {

                                        (document).querySelector('#bank-branch-message').innerHTML = "Invalid";
                                        (document).querySelector('#bank-branch-message').classList.add('text-danger');
                                    }

                                });

                                //Validation for BANK IFSC CODE   

                                document.querySelector('#bank-ifsc-code').addEventListener('change', function () {
                                    let ifsc_code = document.querySelector('#bank-ifsc-code').value;
                                    if (ifsc_code.length != 11) {
                                        document.querySelector('#bank-ifsc-code-message').innerHTML = "Minimum 11 digits required";
                                        document.querySelector('#bank-ifsc-code-message').classList.add('text-danger');
                                    } else {
                                        let firstfour = ifsc_code.substring(0, 4);
                                        let lastseven = ifsc_code.substring(4, 11);
                                        console.log(lastseven);
                                        for (let i = 0; i < firstfour.length; i++) {
                                            if (firstfour[i] < 'A' || firstfour[i] > 'Z') {
                                                document.querySelector('#bank-ifsc-code-message').innerHTML = "invalid ifsc character";
                                                document.querySelector('#bank-ifsc-code-message').classList.add('text-danger');
                                                break;
                                            } else {
                                                for (let j = 0; j < lastseven.length; j++) {
                                                    if (lastseven[j] >= '0' && lastseven[j] <= '9') {
                                                        document.querySelector('#bank-ifsc-code-message').innerHTML = "Ok";
                                                        document.querySelector('#bank-ifsc-code-message').classList.remove('text-danger');
                                                    } else {
                                                        console.log('in loop' + lastseven[j]);
                                                        document.querySelector('#bank-ifsc-code-message').innerHTML = "invalid lastseven number";
                                                        document.querySelector('#bank-ifsc-code-message').classList.add('text-danger');
                                                        break;
                                                    }
                                                }

                                            }
                                        }
                                    }
                                });

                                //Validation for BANK MICR code

                                document.querySelector('#bank-micr-code').addEventListener('change', function () {
                                    let micr = document.querySelector('#bank-micr-code').value;
                                    if (micr.length > 9) {
                                        document.querySelector('#bank-micr-code-message').innerHTML = "Invalid";
                                        document.querySelector('#bank-micr-code-message').classList.add('text-danger');
                                    } else {
                                        if (isNaN(micr)) {
                                            document.querySelector('#bank-micr-code-message').innerHTML = "Character not allowed";
                                            document.querySelector('#bank-micr-code-message').classList.add('text-danger');
                                        } else {
                                            document.querySelector('#bank-micr-code-message').innerHTML = "Ok";
                                            document.querySelector('#bank-micr-code-message').classList.remove('text-danger');
                                        }

                                    }

                                });

                                //Validation for BANK ACCOUNT NUMBER

                                document.querySelector('#bank-account-number').addEventListener('change', function () {
                                    let account_number = document.querySelector('#bank-account-number').value;
                                    if ((account_number.length <= 10) || (account_number.length > 16)) {
                                        document.querySelector('#bank-account-number-message').innerHTML = "Minimum 11 digits required"
                                        document.querySelector('#bank-account-number-message').classList.add('text-danger');
                                    } else {
                                        if (isNaN(account_number)) {
                                            document.querySelector('#bank-account-number-message').innerHTML = "Charaters not allowed";
                                            document.querySelector('#bank-account-number-message').classList.add('text-danger');
                                        } else {
                                            document.querySelector('#bank-account-number-message').innerHTML = "Ok";
                                            document.querySelector('#bank-account-number-message').classList.remove('text-danger');
                                        }
                                    }
                                });




                                //Validation for BANK ACCOUNT TYPE  

                                (document).querySelector('#bank-account-type').addEventListener('change', function () {

                                    console.log('working'); //classList.add('text-danger');

                                    let bank_accounttype = (document).querySelector('#bank-account-type').value;

                                    if (bank_accounttype.length > 1) {

                                        for (let j = 0; j < bank_accounttype.length; j++) {

                                            if (bank_accounttype[j] >= '!' && bank_accounttype[j] <= '@') {

                                                console.log('Found a symbol');

                                                (document).querySelector('#bank-account-type-message').innerHTML = "Special charaters not allowed";
                                                (document).querySelector('#bank-account-type-message').classList.add('text-danger');

                                                check = false;

                                                break;

                                            } else {

                                                (document).querySelector('#bank-account-type-message').innerHTML = "OK";
                                                (document).querySelector('#bank-account-type-message').classList.remove('text-danger');

                                                check = true;

                                            }

                                        }

                                    } else {

                                        (document).querySelector('#bank-account-type-message').innerHTML = "Invalid";
                                        (document).querySelector('#bank-account-type-message').classList.add('text-danger');

                                    }

                                });