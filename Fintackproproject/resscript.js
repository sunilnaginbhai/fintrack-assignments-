let res=document.querySelector("#Register-form")
res.addEventListener("submit",(elem)=>{
    elem.preventDefault();

    let resusername=document.querySelector("#res-use").value;
    let respass=document.querySelector("#res-pass").value;
    
    if(localStorage.getItem(resusername)){
        alert("This username alredy taken try another one");
        return;
    }


    localStorage.setItem(resusername,respass)
    alert("Registetion compelte Now move to log in");

    window.location.href="login.html";

})