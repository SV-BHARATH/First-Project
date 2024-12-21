
			
document.getElementById("btn").addEventListener("click", function(event) {
			  event.preventDefault(); // Prevent form submission to handle it with JavaScript
			  
			  var uName = document.getElementById("un").value;
			  var password = document.getElementById("ps").value;
		
			  // Basic validation
			  if (uName === "" || password === "") {
				alert("All fields are mandatory.");
			  } else {
				var data = {
				  username:uName,
				  password:password
				};
		
			fetch('http://localhost:8081/login', {
             method: 'POST',
			 headers:{
				'Content-Type':'application/json'
			 },
			 body:JSON.stringify(data)
            })
            .then(response => {
                  if (!response.ok) {
                      alert("Username Details Not Correct Plz Enter Again");
                      throw new Error('Network response was not ok');
                    }
                    return response.json(); // Parse JSON data from the response
                })
                .then(data => {
                    console.log(data); // Handle the data from the response
					alert("Login Succesful")
                 })
                .catch(error => {
                     console.error('There was a problem with the fetch operation:', error);
                 });
				}
			});