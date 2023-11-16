function form() {
    const name = document.getElementById("first").value;
    const email = document.getElementById("email").value;
    const rate = document.getElementById("rate").value;
   
    console.log(rate);
    if (name === "") {
        alert("Name shouldn't be empty.");
        return false;
    }
    else if(email === ""){
        alert("E-mail shouldn't be empty.");
        return false;
    }
    else if(rate === ""){
        alert("Rating shouldn't be empty.");
        return false;
    }
   
}