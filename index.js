/***** Deliverable 1 *****/
    const header = document.querySelector("#header");
    console.log("Here's your header:", header);


/***** Deliverable 2 *****/
    header.style.color = "red";


/***** Deliverable 3 *****/
const playerContainer = document.querySelector(".player-container");

for(let player of PLAYERS) {

    const pDiv = document.createElement("div");
    pDiv.class = "player";
    pDiv.dataset.number = `${player.number}`;

    const pInfo = 
    `<h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}"></img>`

    pDiv.innerHTML = pInfo;

    playerContainer.append(pDiv);
}

/***** Deliverable 4 *****/
let raz = document.querySelector("[data-number='7']");
raz.remove();