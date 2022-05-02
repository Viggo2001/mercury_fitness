let popId = document.getElementById('popUp');
let inPop = document.getElementById('inner-pop');

let activatePopup = (e) => {
    popId.style.display = "block";
    inPop.style.transition = "1s"; // doesn't work
}


let deactivatePopup = (e) => {
    popId.style.display = "none";
}

window.addEventListener('scroll', (e) => {
    
    let nav = document.querySelector('.nav-wrapper');

    nav.style.boxShadow = window.scrollY > 0 ? "0 4px 8px 0 rgba(0, 0, 0, 0.1)" : "0 0px 0px 0 rgba(0, 0, 0, 0)";

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

