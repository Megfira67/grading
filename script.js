const loginForm = document.getElementById("loginForm");

if(loginForm){
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const role = document.getElementById("role").value;

        if(role === "teacher" && username === "teacher" && password === "1234"){
            window.location.href = "teacher.html";
        }
        else if(role === "student" && username === "student" && password === "1234"){
            window.location.href = "student.html";
        }
        else{
            alert("Invalid Login Information");
        }
    });
}

function logout(){
    window.location.href = "index.html";
}

function printResult(){
    window.print();
}
