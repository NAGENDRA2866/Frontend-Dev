function getDataf(){
    let fullname = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    // let confirmPassword = document.getElementById('Confirmpassword').value;
    let phone = document.getElementById('phone').value;

    console.log("FullName: " + fullname);
    console.log("phone: " + phone);
    console.log("Email: " + email + "Password: " + password);
    // alert("Email: " + email +"\n" + "Password: " + password + "\n" + "Phone: " + phone);

    let emailPattern = /[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    let phonePattern = /^[0-9]{10}$/;

    if (fullname==="" || email === "" || password === "" || phone === "")
    {
        alert("Please fill all the fields");
    }
    else if(fullname.length < 3)
    {
        alert("Full name must be at least 3 characters");
    }
    else if(!email.includes("@"))
    {
        alert("Please enter a valid email");
    }
    else if (!emailPattern.test(email)) {
        alert("Please enter a valid email");
    } 
    else if (!passwordPattern.test(password)) {
        alert("Password must be 7-15 characters long and include at least one numeric digit and a special character");
    }
    else if(!phone.match(phonePattern))
    {
        alert("Phone number must be exactly 10 digits");
    }
    else
    {
        createPost(fullname, phone, password,country);
    }
}

// // Base API URL
// const API_URL = "https://jsonplaceholder.typicode.com/posts";
// // GET Request - Retrieve Data
// function getPosts() {
// fetch(API_URL)
// .then(response => response.json())
// .then(data => {
// console.log("GET → All Posts:", data);
// })
// .catch(error => console.error("GET Error:", error));
// }

function createPost(fullname,Phone,password,country) {
axios.post("http://localhost:3000/signUp", {
    fullname:fullname,
    Phone:Phone,
    password:password,
    // gender:gender,
    // id:id,
    country:country
})
.then(response => {
console.log("POST Response:", response.data);
})
.catch(error => console.error("POST Error:", error));
}
document.getElementById('button').addEventListener('click', (e) => {
    e.preventDefault();
    getDataf();
    
});