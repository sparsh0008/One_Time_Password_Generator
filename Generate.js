var btnTranslate = document.querySelector("#btn-generate");
var outputDiv    = document.querySelector("#Results");


function generateOTP() {
    console.log("hello");
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    console.log(OTP);
    outputDiv.textContent = "hello";
};

btnTranslate.addEventListener("click", generateOTP);