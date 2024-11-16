document.addEventListener('DOMContentLoaded', function () {
    // Set the date we're counting down to
    var countDownDate = new Date("Dec 31, 2024 00:00:00").getTime();

    // Update the count down every 1 second
    var countdownFunction = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();
        
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in an element with id="countdown"
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
        
        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);

    // Coupon code validation
    window.validateCoupon = function() {
        var couponCode = document.getElementById('couponInput').value;
        var couponMessage = document.getElementById('couponMessage');

        if (couponCode.toLowerCase() === 'curvedashingift') {
            couponMessage.textContent = 'Congratulations! Your coupon code is valid. You get one free product of your choice!';
            couponMessage.classList.remove('error');
        } else {
            couponMessage.textContent = 'Invalid coupon code. Please try again.';
            couponMessage.classList.add('error');
        }
    }
});