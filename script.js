document.getElementById('showSpecials').addEventListener('click', function() {
    const specials = document.getElementById('specials');
    if (specials.style.display === 'none') {
        specials.style.display = 'block';
        this.textContent = 'Hide Today\'s Specials';
    } else {
        specials.style.display = 'none';
        this.textContent = 'Show Today\'s Specials';
    }
});
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    showPopup();
});


function showPopup() {
    document.getElementById('popup').style.display = 'block';
}


function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    showLoginPopup();
});

function showLoginPopup() {
    document.getElementById('login-popup').style.display = 'block';
}

function closeLoginPopup() {
    document.getElementById('login-popup').style.display = 'none';
}
