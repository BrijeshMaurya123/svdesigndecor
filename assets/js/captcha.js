document.addEventListener('DOMContentLoaded', function() {
    const captchaCanvas = document.getElementById('captchaCanvas');
    const captchaContext = captchaCanvas.getContext('2d');
    const captchaInput = document.getElementById('captcha');
    const refreshCaptchaButton = document.getElementById('refreshCaptcha');

    let captchaCode;

    function generateCaptcha() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        captchaCode = '';
        for (let i = 0; i < 6; i++) {
            captchaCode += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        captchaContext.clearRect(0, 0, captchaCanvas.width, captchaCanvas.height);
        captchaContext.font = 'italic 20px Cursive';
        captchaContext.fillStyle = '#000';
        captchaContext.fillText(captchaCode, 10, 30);
        
        // Add some noise to the CAPTCHA
        for (let i = 0; i < 5; i++) {
            captchaContext.beginPath();
            captchaContext.moveTo(Math.random() * captchaCanvas.width, Math.random() * captchaCanvas.height);
            captchaContext.lineTo(Math.random() * captchaCanvas.width, Math.random() * captchaCanvas.height);
            captchaContext.strokeStyle = '#ccc';
            captchaContext.stroke();
        }
    }

    generateCaptcha();

    refreshCaptchaButton.addEventListener('click', function() {
        generateCaptcha();
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        if (captchaInput.value !== captchaCode) {
            alert('Invalid CAPTCHA. Please try again.');
            event.preventDefault();
            generateCaptcha();
        }
    });
});
