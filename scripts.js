// retrieve html elements
const form = document.querySelector('form');
const nameInput =document.querySelector("#fitness-form-name");
const emailInput = document.querySelector("#fitness-form-email");
const passwordInput =document.querySelector("#fitness-form-password");
const confirmPasswordInput =document.querySelector("#fitness-form-confirmPassword");
const errorMessageName = document.querySelector('#error-message-name');
const errorMessageEmail= document.querySelector('#error-message-email');
const errorMessagePassword= document.querySelector('#error-message-password');
const successMessage =document.querySelector("#success-message");
const submit =document.querySelector('#submit-button');

// real time input validation
nameInput.addEventListener('input',
function(){
   
    const nameValue =  nameInput.value.trim();
    const namePatttern = /^[A-Za-z]+$/; 
    form.dataset.nameIsValid = "";

    if(nameValue.match(namePatttern)  && nameValue.length>0){
        errorMessageName.textContent ="✅";
        form.dataset.nameIsValid= "true";    
    }
    else{
        errorMessageName.textContent = "Please enter a name containing only alphabetical characters";
    }
})

emailInput.addEventListener('input',
function(){
    
    const emailValue =  emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    form.dataset.emailIsValid = "";

    if(emailValue.match(emailPattern)  &&emailValue.length>0){
        errorMessageEmail.textContent = "✅";
        form.dataset.emailIsValid = "true";    
    }
    else{
        errorMessageEmail.textContent = "Please enter a valid email address";
    }
})

passwordInput.addEventListener('input',
function(){
    
    const passwordValue =  passwordInput.value.trim();
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$&+,:;=?@#|'<>.^*()%!-]).{8,}$/;
    
    if(passwordValue.match(passwordPattern) && passwordValue.length >0){
        errorMessagePassword.textContent =  "✅";
    }
    else{
          errorMessagePassword.textContent = "Please enter a valid password";
      }

})

confirmPasswordInput.addEventListener('input',
function(){

    const passwordValue =  passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();
    form.dataset.passwordIsValid = "";

        if(confirmPasswordValue.match(passwordValue)){
            errorMessagePassword.textContent = "✅";
            form.dataset.passwordIsValid ="true";

        }else{
            errorMessagePassword.textContent = "The passwords do not match";
        } 
      

})



// function to show password 
 //tooltip when clicked on input field
function showTooltip() {
    let inputField = document.querySelector("#fitness-form-password");
    let tooltip = document.querySelector("#tooltip");
    tooltip.style.display = "block";
    tooltip.style.left = (inputField.offsetLeft + inputField.offsetWidth) + "px";
    tooltip.style.top = (inputField.offsetTop - tooltip.offsetHeight) + "px";
}
// function to hide tooltip when not clicked on field//
function hideTooltip() {
    let tooltip = document.querySelector("#tooltip");
    tooltip.style.display = "none";
}

const bmiButton= document.querySelector("#bmi");
//event listener to listen when calculate BMI button is clicked
bmiButton.addEventListener('click', ()=>{

     //Calculate bmi
   let weight =document.querySelector("#fitness-form-weight");
   let  height = document.querySelector("#fitness-form-height");
   const output1 =document.querySelector("#output1");
   const output2 =document.querySelector("#output2");
    let weightValue = weight.value;
    let heightValue = height.value.trim();
    let bmi = weightValue/(heightValue)**2
   
    if(bmi<18.5){
        output1.textContent= bmi
        output2.textContent ="You are currently underweight, select your weight goal accordingly";
    }else if(bmi>18.5 && bmi<25){
        output1.textContent= bmi
        output2.textContent ="Your weight is in the normal range, select your weight goal accordingly";
    }else if(weightValue=="" || heightValue==""){
        output1.textContent= "Weight and height values not entered"
        output2.textContent= "Weight and heightt values not entered"
    }
    else{
        output1.textContent= bmi
        output2.textContent ="You are currently overweight, select your weight goal accordingly";
    }

})



form.addEventListener('submit', e =>{
    // prevent form from being submitted
    e.preventDefault();

    // input is valid, submit form

    if(form.dataset.nameIsValid==="true" && form.dataset.emailIsValid==="true" && form.dataset.passwordIsValid=== "true"){
      successMessage.textContent = "Form successfully completed!"
       form.submit();
      window.location.href = "completion.html"
    }else{
        successMessage.textContent = "Form not successfully completed!"
    }

    

})
