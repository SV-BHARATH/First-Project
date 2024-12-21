const optioSelect=document.getElementById("opt");

for(let i=1;i<=100;i++)
{
    let options=document.createElement("option");
    options.value=i;
    options.textContent=i;
    optioSelect.appendChild(options);
}





















document.getElementById("btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission to handle it with JavaScript
    
    var uName = document.getElementById("un").value;
    var fname = document.getElementById("fn").value;
    var lname = document.getElementById("ln").value;
    var email = document.getElementById("em").value;
    var password = document.getElementById("ps").value;
    var mobileno = document.getElementById("mn").value;
    var age = document.getElementById("age").value;
    var usertype = document.getElementById("ut").value;
    var status = document.getElementById("su").value;

    var ageInteger=parseInt(age,10);

    // Basic validation
    if (fname === "" || lname === "" || email === "" || password === "" || mobileno === "" || age === "" || usertype === "" || status === "") {
      alert("All fields are mandatory.");
    } else if (mobileno.length < 10 || mobileno.length > 15) {
      alert("Please enter a valid mobile number.");
    } else if (age <= 0 || isNaN(age)) {
      alert("Please enter a valid age.");
    } else {
      var data = {
        userName: uName,
        firstname: fname,
        lastname: lname,
        email: email,
        passWord: password,
        phoneNumber: mobileno,
        age: ageInteger,
        userRoles: usertype,
        status: status
      };

      fetch('http://localhost:8081/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert("User registered successfully!");
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
      });
    }
  });