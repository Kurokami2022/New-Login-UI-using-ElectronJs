document.querySelector('#btnsub').addEventListener("click", () => {
    
    var email = document.getElementById('email').value;
    if(email === "" || email == null){
        document.getElementById('i1').style.background="red";
        document.getElementById('i1').style.animation = "shake 0.2s ease-in-out 0s 4";
        document.getElementById('error1').style.color = "red";
        document.getElementById('emailspan').style.color="red";
    } else {
        document.getElementById('i1').style.background="";
        document.getElementById('i1').style.animation = "";
        document.getElementById('emailspan').style.color="";
        document.getElementById('error2').style.color = "";
    }
})
