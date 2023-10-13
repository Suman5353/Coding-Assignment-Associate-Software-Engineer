function ASSESMENT() {
    var FirstName =
        document.forms.RegForm.FirstName.value;
    var LastName =
        document.forms.RegForm.LastName.value;
    var  DateofBirth =
        document.forms.RegForm. DateofBirth.value;
    var Country = 
        document.forms.RegForm. Country.value;
    var Gender = 
        document.forms.RegForm. Gender.value;
    var Profession = 
        document.forms.RegForm. Profession.value;
    var MobileNumber = 
        document.forms.RegForm.MobileNumber.value;
    var email =
        document.forms.RegForm.EMail.value;
    
    //Javascript reGex for Email Validation.
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    // Javascript reGex for Phone Number validation.
    var regMobileNumber = /^\d{10}$/;
    // Javascript reGex for Name validation
    var regFirstName = /\d+$/g;    
    var regLastName = /\d+$/g;  
    if (FirstName == "" || regFirstName.test(FirstName)) {
        window.alert("Please enter your name properly.");
        FirstName.focus();
        return false;
    }
    if (LastName == "" || regFirstName.test(LastName)) {
        window.alert("Please enter your name properly.");
        LastName.focus();
        return false;
    }
 
    
     
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
      
    
    if (phone == "" || !regPhone.test(phone)) {
        alert("Please enter valid phone number.");
        phone.focus();
        return false;
    }
 
    
 
    return true;
}

{
    var FirstName =
        document.forms.RegForm.FirstName.value;
    var LastName =
        document.forms.RegForm.LastName.value;
    var  DateofBirth =
        document.forms.RegForm. DateofBirth.value;
    var Country = 
        document.forms.RegForm. Country.value;
    var Gender = 
        document.forms.RegForm. Gender.value;
    var Profession = 
        document.forms.RegForm. Profession.value;
    var MobileNumber = 
        document.forms.RegForm.MobileNumber.value;
    var email =
        document.forms.RegForm.EMail.value;
    
    //Javascript reGex for Email Validation.
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    // Javascript reGex for Phone Number validation.
    var regMobileNumber = /^\d{10}$/;
    // Javascript reGex for Name validation
    var regFirstName = /\d+$/g;    
    var regLastName = /\d+$/g;  
    if (FirstName == "" || regFirstName.test(FirstName)) {
        window.alert("Please enter your name properly.");
        FirstName.focus();
        return false;
    }
    if (LastName == "" || regFirstName.test(LastName)) {
        window.alert("Please enter your name properly.");
        LastName.focus();
        return false;
    }
 
    
     
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
      
    
    if (phone == "" || !regPhone.test(phone)) {
        alert("Please enter valid phone number.");
        phone.focus();
        return false;
    }
 
    
 
    return true;
}




