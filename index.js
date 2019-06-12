let dataArr = new Array();
function submitForm(){
    let form = document.forms["myForm"]; 
    let password = form["password"].value;
    let confimPassword = form["Cpassword"].value;
    
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