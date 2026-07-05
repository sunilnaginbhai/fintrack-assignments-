let logi=document.querySelector(".login-form");

logi.addEventListener("submit",(elem)=>{
    elem.preventDefault();

    let logusername=document.querySelector("#log-use").value;
    let logpass=document.querySelector("#log-pass").value;

    let sorePassword=localStorage.getItem(logusername);

    if(sorePassword === null){
        alert("User Not found");
    }else{
        if(sorePassword === logpass){
            alert("Login completed...");
            window.location.href='./Home.html'
        }else{
            alert("Password invalid");
            return;
        }
    }
})