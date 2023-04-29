const signUp = document.getElementById('signup');
const message = document.getElementById('message');


function redirectToProfile(){
    if(localStorage.getItem('token')){
        //here i'm adding the file
        location.href='./profile.html';
    }
    else{
        alert('Please Sign Up')
        location.href='./index.html';
    }

}

function redirectToSignUp(){
    //here i'm adding the file
    location.href='./index.html';
}


signUp.addEventListener('click',()=>{
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('u-password').value;
    const conPassword = document.getElementById('confirm-password').value;

    if(name=='' || email=='' || pass=='' || conPassword==''){
        message.innerHTML=`<div style='color:red;'>Error : All the fields are mandatory</div>`;
        return;
    }

    if(pass!=conPassword){
        message.innerHTML=`<div style='color:red;'>Error : Passwords should be Same</div>`;
        return;
    }

    //i'm creating obj
    let user = {
        name:name,
        email:email,
        password:pass
    }
   
    //here i'm coverting the user object into in string
    localStorage.setItem("user",JSON.stringify(user));
  
    // here i  create empty string
    let token = '';
    
    for (let i = 0; i < 16; i++) {
      token += String.fromCharCode(Math.floor(Math.random() * 256));
    }
    
    // Store the token in local storage
    //The btoa() method creates a Base64-encoded ASCII string from a binary string 
    //(i.e., a string in which each character in the string is treated as a byte of binary data).
    
    localStorage.setItem('token', btoa(token));

    message.innerHTML=`<div style='color:red;'>Successfully Signed Up!</div>`;

    location.href='./profile.html';
})