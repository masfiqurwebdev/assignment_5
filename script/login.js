console.log('log in');

document.getElementById('loginBtn').addEventListener('click' , function(){
    const inputUsername = document.getElementById('input-username');
    const username = inputUsername.value;
        
    console.log(username);
    
    const inputPassword = document.getElementById('inputPassword');
    const password = inputPassword.value;

    if(username == 'admin' && password == 'admin123'){
        alert('Login Successful');
        window.location.assign("/home.html")
    }
    else{
        alert('login failed')
    }
})

