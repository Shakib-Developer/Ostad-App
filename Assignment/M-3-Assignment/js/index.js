// function getDayOfWeek(dateString) {
//     const date = new Date(dateString);
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const dayOfWeekIndex = date.getDay();
//     return daysOfWeek[dayOfWeekIndex];
//   }
  
//   // Example usage:
//   const currentDate = new Date();
//   const formattedDate = currentDate.toISOString().slice(0, 10); // Get current date in "YYYY-MM-DD" format
//   const dayOfWeek = getDayOfWeek(formattedDate);
//   console.log(dayOfWeek); // Output: The day of the week for the current date

// //   1.Date Object Close---------------------------------

// function squareRootOfSumOfSquares(numbers) {
//     const sumOfSquares = numbers.reduce((total, num) => total + Math.pow(num, 2), 0);
//     const squareRoot = Math.sqrt(sumOfSquares);
//     return Math.floor(squareRoot);
//   }
  
//   // Example usage:
//   const numbers = [3, 4, 7];
//   const result = squareRootOfSumOfSquares(numbers);
//   console.log(result); // Output: The square root of the sum of squares for the given array of numbers

//     2.Math Object Close---------------------------------

//   function isPrime(number) {
//     if (number <= 1) {
//       return false;
//     }
    
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
    
//     return true;
//   }
  
//  // Example usage:
//   const number = 4;
//   const result = isPrime(number);
//   console.log(result); // Output: true

//     3.Numbers Close---------------------------------


//   function openNewWindow(url, width, height) {
//     window.open(url, '_blank', `width=${width}, height=${height}`);
//   }
  
//   // Example usage:

//   const url = 'https://www.example.com';
//   const width = 800;
//   const height = 600;
//   openNewWindow(url, width, height);

//      4.Window Object Close---------------------------------


  //  function getBrowserInfo() {
  //   const userAgent = navigator.userAgent;
  //   const browserInfo = {};
  
  //   if (/firefox/i.test(userAgent)) {
  //     browserInfo.name = "Mozilla Firefox";
  //     browserInfo.version = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
  //   } else if (/chrome/i.test(userAgent)) {
  //     browserInfo.name = "Google Chrome";
  //     browserInfo.version = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
  //   } else if (/safari/i.test(userAgent)) {
  //     browserInfo.name = "Apple Safari";
  //     browserInfo.version = userAgent.match(/Version\/(\d+\.\d+)/)[1];
  //   } else if (/opera|opr/i.test(userAgent)) {
  //     browserInfo.name = "Opera";
  //     browserInfo.version = userAgent.match(/(?:Opera|OPR)\/(\d+\.\d+)/)[1];
  //   } else if (/edge/i.test(userAgent)) {
  //     browserInfo.name = "Microsoft Edge";
  //     browserInfo.version = userAgent.match(/Edge\/(\d+\.\d+)/)[1];
  //   } else if (/trident|msie/i.test(userAgent)) {
  //     browserInfo.name = "Internet Explorer";
  //     browserInfo.version = userAgent.match(/(?:MSIE |rv:)(\d+\.\d+)/)[1];
  //   } else {
  //     browserInfo.name = "Unknown";
  //     browserInfo.version = "Unknown";
  //   }
  
  //   return browserInfo;
  // }
  
  // // Example usage:
  // const browserInfo = getBrowserInfo();
  // console.log("Browser Name:", browserInfo.name);
  // console.log("Browser Version:", browserInfo.version);

//      5.Navigator Object Close---------------------------------


//    function getCurrentLocation() {
//     return new Promise((resolve, reject) => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           position => {
//             const latitude = position.coords.latitude;
//             const longitude = position.coords.longitude;
//             resolve({ latitude, longitude });
//           },
//           error => {
//             reject(error);
//           }
//         );
//       } else {
//         reject("Geolocation is not supported by this browser.");
//       }
//     });
//   }
  
//   // Example usage:
//   getCurrentLocation()
//     .then(location => {
//       console.log("Latitude:", location.latitude);
//       console.log("Longitude:", location.longitude);
//     })
//     .catch(error => {
//       console.log("Error:", error);
//     });

//       6.Geolocation Object Close---------------------------------


//     function handleClick(event) {
//         const x = event.clientX;
//         const y = event.clientY;
//         alert("Clicked at coordinates: (" + x + ", " + y + ")");
//       }
  
//       function handleKeyPress(event) {
//         const keyCode = event.keyCode;
//         alert("Key pressed: " + keyCode);
//       }
  
//       function changeImageNext() {
//         const image = document.getElementById("myImage");
//         image.src = "img/team-2.jpg";
//       }
//       function changeImagePrev() {
//         const image = document.getElementById("myImage");
//         image.src = "img/team-3.jpg";
//       }

//       document.addEventListener("click", handleClick);
//       document.addEventListener("keypress", handleKeyPress);

//       7.JS Common Events Close---------------------------------

//     function changeText() {
//         const paragraph = document.getElementById("myParagraph");
//         paragraph.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";
//       }

//       8.HTML DOM Document Close---------------------------------


    // function validateForm() {
    //     const nameInput = document.getElementById("name");
    //     const emailInput = document.getElementById("email");
    //     const passwordInput = document.getElementById("password");
    //     const confirmPasswordInput = document.getElementById("confirmPassword");
  
    //     const nameValue = nameInput.value.trim();
    //     const emailValue = emailInput.value.trim();
    //     const passwordValue = passwordInput.value;
    //     const confirmPasswordValue = confirmPasswordInput.value;
  
    //     // Name validation
    //     if (nameValue === "" || !/^[a-zA-Z]+$/.test(nameValue)) {
    //       alert("Invalid name. Please enter a valid name.");
    //       nameInput.focus();
    //       return false;
    //     }
  
    //     // Email validation
    //     if (
    //       emailValue === "" ||
    //       !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailValue)
    //     ) {
    //       alert("Invalid email. Please enter a valid email address.");
    //       emailInput.focus();
    //       return false;
    //     }
  
    //     // Password validation
    //     if (
    //       passwordValue === "" ||
    //       !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(passwordValue)
    //     ) {
    //       alert(
    //         "Invalid password. Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit."
    //       );
    //       passwordInput.focus();
    //       return false;
    //     }
  
    //     // Confirm Password validation
    //     if (confirmPasswordValue !== passwordValue) {
    //       alert("Passwords do not match. Please re-enter your password.");
    //       confirmPasswordInput.focus();
    //       return false;
    //     }
  
    //     // All validations passed
    //     return true;
    //   }


//       9.JS DOM Working with Form Input Close---------------------------------

    // const button = document.getElementById("myButton");
    // const paragraph = document.getElementById("myParagraph");

    //     button.addEventListener("click", function() {
    //         paragraph.classList.add("highlight");
    //     });

//       10.DOM Manipulate CSS Class Close---------------------------------

    // const btn = document.getElementById("btn");

    //   function myFunc(){
    //     var list = document.getElementById("myList");

    //     for (var i = 1; i <= 5; i++) {
    //         var listItem = document.createElement("li");
    //         listItem.textContent = i;
    //         list.appendChild(listItem);
    //     }
    //   }

  //   btn.addEventListener("click",  myFunc);

//       11.Create Element & Append Element Close---------------------------------

  //  var image = document.getElementById("myImage");
  //       var button = document.getElementById("btn");

  //       button.addEventListener("click", function() {
  //           image.src = "img/team-2.jpg";

  //       });
  //       button.addEventListener("dblclick", function() {
  //           image.src = "img/team-3.jpg";

  //       });

//       12.DOM Change Image Attribute Value Close---------------------------------

// function paragraph(){
//   const pOdd = document.getElementsByTagName("p");
//   for(let i = 0; i < pOdd.length; i++){
//     pOdd[i].style.color = "red";
//   }
// }

// let button = document.getElementById("btn");

// button.addEventListener("click", paragraph);

// let btn = document.getElementById("btn-1");

// btn.addEventListener("click", function(){
//   const pId = document.getElementById("number");
//   pId.classList.add("bgcolor");
// });

//       13.DOM Query Selector Close---------------------------------

// const axios = require('axios');

// function sendGetRequest() {
//     axios.get('https://jsonplaceholder.typicode.com/posts/1')
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(error => {
//             console.error(error);
//         });
// }

// sendGetRequest();


//       14..AJAX Get Request Close---------------------------------

// const axios = require('axios');

// function sendPostRequest() {
//     const data = {
//         name: "John Doe",
//         email: "johndoe@example.com"
//     };

//     axios.post('https://jsonplaceholder.typicode.com/posts', data)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(error => {
//             console.error(error);
//         });
// }

// sendPostRequest();

//       15..AJAX Post Request Close---------------------------------



  
  