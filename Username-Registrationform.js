class Registrationform {
    canSubmit = true;
    result = true;
    formValues = {
        firstname: "",
        middlename: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
        mobilenumber: ""
    }
    errorValues = {
        firstnameErr: "",
        middlenameErr: "",
        lastnameErr: "",
        emailErr: "",
        passwordErr: "",
        confirmpasswordErr: "",
        mobilenumberErr: ""
    }
    showErrorMsg(index,msg){
        let form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.add('error')
        form_group.getElementsByTagName('span')[0].textContent = msg
        this.canSubmit = false;
    }
    showSuccessMsg(index){
        let form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.remove('error')
        form_group.classList.add('success')
    }
    getinputs(){
        this.formValues.firstname = document.getElementById('firstname').value.trim()
        this.formValues.middlename = document.getElementById('middlename').value.trim()
        this.formValues.lastname = document.getElementById('lastname').value.trim()
        this.formValues.email = document.getElementById('email').value.trim()
        this.formValues.password = document.getElementById('password').value.trim()
        this.formValues.confirmpassword = document.getElementById('confirmpassword').value.trim()
        this.formValues.mobilenumber = document.getElementById('mobilenumber').value.trim()
        console.log(this.formValues);
    }
    validatefirstname(){
        
        console.log(this.formValues);
        if(this.formValues.firstname === ""){
            this.errorValues.firstnameErr = "*Mandatory need to fill"
            this.showErrorMsg(0, this.errorValues.firstnameErr)
        } else if(this.formValues.firstname.length <= 4){
            this.errorValues.firstnameErr = "*Minimum 5 digits"
            this.showErrorMsg(0, this.errorValues.firstnameErr)
        } else if(this.formValues.firstname.length > 14){
            this.errorValues.firstnameErr = "*Maximum 14 digits"
            this.showErrorMsg(0, this.errorValues.firstnameErr)
        } else{
            this.errorValues.firstnameErr = ""
            this.showSuccessMsg(0)
            return true;
        }
        
        console.log(this.errorValues);
        console.log(result);
        return false;
    }
    validatemiddlename(){
        if(this.formValues.middlename === ""){
            this.errorValues.middlenameErr = "*Mandatory need to fill"
            this.showErrorMsg(1, this.errorValues.middlenameErr)
        } else if(this.formValues.middlename.length <= 2){
            this.errorValues.middlenameErr = "*Minimum 3 digits"
            this.showErrorMsg(1, this.errorValues.middlenameErr)
        } else if(this.formValues.middlename.length > 14){
            this.errorValues.middlenameErr = "*Maximum 10 digits"
            this.showErrorMsg(1, this.errorValues.middlenameErr)
        } else{
            this.errorValues.middlenameErr = ""
            this.showSuccessMsg(1)
            return true;
        }
        return false;
    }
    validatelastname(){
            if(this.formValues.lastname === ""){
                this.errorValues.lastnameErr = "*Mandatory need to fill"
                this.showErrorMsg(2, this.errorValues.lastnameErr)
            } else if(this.formValues.lastname.length <= 4){
                this.errorValues.lastnameErr = "*Minimum 5 digits"
                this.showErrorMsg(2, this.errorValues.lastnameErr)
            } else if(this.formValues.lastname.length > 14){
                this.errorValues.lastnameErr = "*Maximum 10 digits"
                this.showErrorMsg(2, this.errorValues.lastnameErr)
            } else{
                this.errorValues.lastnameErr = ""
                this.showSuccessMsg(2)
                return true;
            }
            return false;
    }
    validateemail(){
        let regExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2-8})?$/
        if(this.formValues.email === ""){
            this.errorValues.emailErr = "*Enter Valid Email"
            this.showErrorMsg(3,this.errorValues.emailErr)
        } else if(!(regExp.test(this.formValues.email))){
            this.errorValues.emailErr = "*Invalid Email"
            this.showErrorMsg(3,this.errorValues.emailErr)
        } else {
            this.errorValues.emailErr = ""
            this.showSuccessMsg(3)
            return true;
        }
        return false;
    }
    validatepassword(){
        if(this.formValues.password === ""){
            this.errorValues.passwordErr = "*set password"
            this.showErrorMsg(4, this.errorValues.passwordErr)
        } else if(this.formValues.password.length <= 4){
            this.errorValues.passwordErr = "*Atleast 5 digits"
            this.showErrorMsg(4, this.errorValues.passwordErr)
        } else if(this.formValues.password.length > 10){
            this.errorValues.passwordErr = "*not exceeds 10 digits"
            this.showErrorMsg(4, this.errorValues.passwordErr)
        } else {
            this.errorValues.passwordErr = ""
            this.showSuccessMsg(4)
            return true;
        }
        return false;
    }
    validateconfirmpassword(){
        if(this.formValues.confirmpassword === ""){
            this.errorValues.confirmpasswordErr = "Invalid"
            this.showErrorMsg(5, this.errorValues.confirmpasswordErr)
        } else if(this.formValues.confirmpassword === this.formValues.password && this.errorValues.passwordErr === ""){
            this.errorValues.confirmpasswordErr = ""
            this.showErrorMsg(5)
            this.showSuccessMsg(5)
            return true;
        } else if(this.errorValues.passwordErr){
            this.errorValues.confirmpasswordErr = "*Mismatch to Password"
            this.showErrorMsg(5, this.errorValues.confirmpasswordErr)
        } else {
            this.errorValues.confirmpasswordErr = "*Password mismatch"
            this.showErrorMsg(5, this.errorValues.confirmpasswordErr)
        }
        return false;
    }
    validatemobilenumber(){
        let mobilenumber = /^\d{10}$/
        if(this.formValues.mobilenumber === ""){
            this.errorValues.mobilenumberErr = "*Enter Mobile Number"
            this.showErrorMsg(6, this.errorValues.mobilenumberErr)
        } else if (mobilenumber.test(this.formValues.mobilenumber)){
            this.errorValues.mobilenumberErr = ""
            this.showSuccessMsg(6)
            return true;
        } else {
            this.errorValues.mobilenumberErr = "*Invalid Mobile Number"
            this.showErrorMsg(6, this.errorValues.mobilenumberErr)
        }
        return false;
    }
}

/*
let ValidateUserInputs = new Registrationform()
document.getElementsByClassName('form')[0].
addEventListener('submit' , event => {
    event.preventDefault()
    ValidateUserInputs.canSubmit = true;
    if(ValidateUserInputs.getinputs() &&
    ValidateUserInputs.validatefirstname() &&
    ValidateUserInputs.validatemiddlename() &&
    ValidateUserInputs.validatelastname() &&
    ValidateUserInputs.validateemail() &&
    ValidateUserInputs.validatemobilenumber() &&
    ValidateUserInputs.validatepassword() &&
    ValidateUserInputs.validateconfirmpassword())
    {
        document.getElementById("regForm").submit();
    }

    //submitForm();
});*/

function formSubmit()
{
    console.log("Inside func");
    ValidateUserInputs = new Registrationform();
    ValidateUserInputs.getinputs();
    if(ValidateUserInputs.validatefirstname() &&
    ValidateUserInputs.validatemiddlename() &&
    ValidateUserInputs.validatelastname() &&
    ValidateUserInputs.validateemail() &&
    ValidateUserInputs.validatemobilenumber() &&
    ValidateUserInputs.validatepassword() &&
    ValidateUserInputs.validateconfirmpassword())
    {
        document.getElementById("regForm").submit();
    }
}
