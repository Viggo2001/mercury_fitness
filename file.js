let popId = document.getElementById('popUp');
let inPop = document.getElementById('inner-pop');
let about_pop = document.getElementById('popUp-wrapper');

let activatePopup = (e) => {
    popId.style.display = "block";
}

let deactivatePopup = (e) => {
    popId.style.display = "none";
}

window.addEventListener('scroll', (e) => {
    
    let nav = document.querySelector('.nav-wrapper');

    nav.style.boxShadow = window.scrollY > 0 ? "0 4px 8px 0 rgba(0, 0, 0, 0.1)" : "0 0px 0px 0 rgba(0, 0, 0, 0)";

});

let details = [
    {name: 'Onodwa Siyotula', description: 'Developed the Home page and the Workout Routine page with Nkululeko', img: 'images/onodwa.jpg', id: "odwa", role: 'Group Leader', email: 'onodwasiyotula7@gmail.com', github: 'https://github.com'},
    {name: 'Nkululeko Ngcobo', description: 'Developed the Home page and the Workout Routine page with Onodwa', img: 'images/profile.jpg', id: "nkululeko", role: 'Group Member', email: 'onodwasiyotula7@gmail.com', github: 'https://github.com'},
    {name: 'Shanlyn Thomas', description: 'Developed the Log in and Sign up pages with Tamryn', img: 'images/profile.jpg', id: "shanlyn", role: 'Group Secretary', email: 'onodwasiyotula7@gmail.com', github: 'https://github.com'},
    {name: 'Tamryn Lewin', description: 'Developed the Log in and Sign up pages with Shanlyn', img: 'images/profile.jpg', id: "tamryn", role: 'Group Member', email: 'onodwasiyotula7@gmail.com', github: 'https://github.com'},
    {name: 'Sinothando Masiki', description: 'Developed the actual activities page with Petlo', img: 'images/profile.jpg', id: "sino", role: 'Group Member', email: 'onodwasiyotula7@gmail.com', github: 'https://github.com'},
    {name: 'Petlo Matabane', description: 'Developed the actual activities page with Sinothando', img: 'images/profile.jpg', id: "petlo", role: 'Group Member', email: 'onodwasiyotula7@gmail.com', github: 'https://github.com'}
];

details.forEach((value, index, arr) => {
    document.getElementById('coders-wrapper').innerHTML += `<div class="coder" id="coder">
    <img src="${value.img}" alt="">
    <div class="details">
        <h3>${value.name}</h3>
        <p><br/>${value.description}</p>
        <button id="${value.id}">More Details</button>
    </div>
    </div>`;
});

details.forEach((value, index, arr) => {
    let id = document.getElementById(`${value.id}`);
    let popVar = document.getElementById("popUp-wrapper");

    id.addEventListener('click', (e) => {
        about_pop.style.display = "block";
        about_pop.style.transition = "0.4s";

        popVar.innerHTML = `<div class="popUp-about">
                <h2>${value.name}</h2>
                <br>
                <img src="${value.img}" alt="">
                <p><strong>Role:</strong> ${value.role}</p>
                <p><strong>Email:</strong> ${value.email}</p>
                <p><strong>GitHub Link:</strong> ${value.github}</p>
            </div>
            <div class="overlay" id="overlay-about" onclick="deactivateAboutPopup()"></div>` 
    });
});

let deactivateAboutPopup = (e) => {
    about_pop.style.display = "none";
} 

console.log('Hello World')
