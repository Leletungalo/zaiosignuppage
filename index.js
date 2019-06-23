let dataArr = new Array();
//Funstion called by on submit
function submitForm(){
    //getting form from the document object
    let form = document.forms["myForm"]; 
    //getting button from form
    let password = form["password"].value;
    //getting button from form
    let confimPassword = form["Cpassword"].value;
     
    //Compere passwords
    if(password == confimPassword && password != ""){
        dataArr.push(form["Name"].value);
        dataArr.push(form["Surname"].value);
        dataArr.push(form["Email"].value);
        dataArr.push(form["Age"].value);
        dataArr.push(form["password"].value);
        dataArr.push(form["Cpassword"].value);
        alert("success");
    }else{
        alert("passwords do not match");
    }
}

var a = document.getElementsByClassName("mainHeader");