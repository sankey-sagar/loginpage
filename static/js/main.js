function seterorr(id,error){
    element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML=error;
}
function clearerorr(id){
    element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML=" ";     
}
function validateForm(){
    var returnval=false;
    var email = document.forms['validation']["email"].value;
    var pass =document.forms['validation']['pass'].value;
    console.log(email);  
    console.log(pass);  
    if(email=="sagar.t@sankeysolutions.com" && pass=="sankey123"){
        window.location.href = "http://127.0.0.1:5500/validate.html";
    }
    else if(email!="sagar.t@sankeysolutions.com" && pass!="sankey123"){
        seterorr("email","Email is Incorrect");
        seterorr("pass","Password is Incorrect");
    }
    else if(email=="sagar.t@sankeysolutions.com" && pass!="sankey123"){
        seterorr("pass","Password is Incurrect");
        seterorr("email"," ");
    }
    else if(email!="sagar.t@sankeysolutions.com" && pass=="sankey123"){
        seterorr("email","Email is Incurrect")
        seterorr("pass"," ");
    }
    return returnval;
}