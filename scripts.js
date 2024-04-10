/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

//-------------------my code----------------
// This is my player class that holds information on the player(name, number, and position)
class Player {
    constructor(name, number,position){
        this.name = name;
        this.number = number;
        this.position = position;
    }
}
// This is an array of strings (players)
let players = [];
players = addPayersTolist();

//this function will return an array of newly created squad list
function addPayersTolist(){
    const Lunin = new Player("Lunin", 13, "goalkeeper");
    const Carvajal = new Player("Carvajal", 2, "right back");
    const Tchouameni = new Player("Tchouameni", 18, "center back");
    const Rudiger = new Player("Rudiger", 22, "center back");
    const Mendy = new Player("Mendy", 23, "left back");
    const Camavinga = new Player("Camavinga", 12, "center midfield");
    const Kroos = new Player("Kroos", 8, "center midfield");
    const Bellingham = new Player("Bellingham", 5, "center midfield");
    const Valverde = new Player("Valverde", 15, "right forward");
    const Rodrygo = new Player("Rodrygo", 11, "left forward");
    const Junior = new Player("Junior", 7, "central forward");
    return [Lunin, Carvajal, Tchouameni, Rudiger, Mendy, Camavinga, Kroos, Bellingham, Valverde, Rodrygo, Junior];
}

//this will line up all the players in the order of the array
function formatPlayers(){
    const cardContainer = document.getElementById("starting-players");
    cardContainer.innerHTML = "";
    const templatePlayer = document.querySelector(".player");
    for(let i = 0; i < players.length; i++){
            const nextPLayer = templatePlayer.cloneNode(true);
            editCardContent(nextPLayer, players[i].name, players[i].number, players[i].position);
            cardContainer.appendChild(nextPLayer);
    }
}

//this will edit the html components to add value
function editCardContent(player, newName, newNumber, newPosition) {
    player.style.display = "block";
    const cardName = player.querySelector(".playerName");
    const cardNumber = player.querySelector(".playerNumber");
    const cardPosition = player.querySelector(".playerPosition");
    
    cardName.textContent = "Name: " + newName;
    cardNumber.textContent = "Number: " + newNumber;
    cardPosition.textContent = "Position: " + newPosition;
}

//this runs the program when loading
document.addEventListener("DOMContentLoaded", formatPlayers);

function subPlayer() {
    console.log("Button Clicked!")
    let oldPlayer = prompt("who will you like to substitude off?: enter name: ");
    let newPlayerName = prompt("what is the new player's name?: ");
    let newPlayerNumber = prompt("what is the new player's number?: ");
    let newPlayerPosition = prompt("what is the new player's position?: ");

    let newPlayer = new Player(newPlayerName, newPlayerNumber, newPlayerPosition);

    //search thru the array of players to replace the player
    for(let i = 0; i < players.length; i++){
        if(players[i].name == oldPlayer){
            players.splice(i, 1, newPlayer);
        }
    }
    alert("substitution made!");
    formatPlayers(); // Call formatPlayers again to refresh
}

function removePlayer() {
    let oldPlayer = prompt("who got expelled? enter name: ");
    for(let i = 0; i < players.length; i++){
        if(players[i].name == oldPlayer){
            players.splice(i, 1);
        }
    }
    formatPlayers(); // Call formatPlayers again to refresh
}
//-------------------my code----------------
