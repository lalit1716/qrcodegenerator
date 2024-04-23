const wrapper = document.querySelector(".wrapper"),
    qrInput = wrapper.querySelector(".form input"),
    generateBtn = wrapper.querySelector(".form button"),
    qrImg = wrapper.querySelector(".qr-code img");
downBtn = wrapper.querySelector(".down-btn");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";

    });

    const downBtnTime = () =>{
        downBtn.classList.add('active')

    }

    setTimeout(downBtnTime, 650);

});

downBtn.addEventListener('click', () => {
    downBtn.href = qrImg.src;
})

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";

    }


});