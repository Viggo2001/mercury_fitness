let popId = document.getElementById('popUp');
let inPop = document.getElementById('inner-pop');

let activatePopup = (e) => {
    popId.style.display = "block";
    popId.style.transition = "ease-in";
    inPop.style.transition = "0.3s";
}


let deactivaePopup = (e) => {
    popId.style.display = "none";
}

window.addEventListener('scroll', (e) => {
    
    let nav = document.querySelector('.nav-wrapper');
    
    if (window.scrollY > 0) {
        nav.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.1)";
    } else {
        nav.style.boxShadow = "0 0px 0px 0 rgba(0, 0, 0, 0)";
    }

});

let details = [
    {name: 'Onodwa Siyotula', description: 'Developed the Home page and the Workout Routine page with Nkululeko', img: 'images/profile.jpg'},
    {name: 'Nkululeko', description: 'Developed the Home page and the Workout Routine page with Onodwa', img: 'images/profile.jpg'},
    {name: 'Shanlyn', description: 'Developed the Log in and Sign up pages with Tamryn', img: 'images/profile.jpg'},
    {name: 'Tamryn', description: 'Developed the Log in and Sign up pages with Shanlyn', img: 'images/profile.jpg'},
    {name: 'Sinothando Masiki', description: 'Developed the actual activities page with Petlo', img: 'images/profile.jpg'},
    {name: 'Petlo', description: 'Developed the actual activities page with Sinothando', img: 'images/profile.jpg'}
];


details.forEach((value, index, arr) => {
    document.getElementById('coders-wrapper').innerHTML += `<div class="coder">
    <img src="${value.img}" alt="">
    <div class="details">
        <h3>${value.name}</h3>
        <p><br/>${value.description}</p>
    </div>
    </div>`;
});

