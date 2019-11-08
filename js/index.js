'use strict';
const RACE =
["Dwarf", "Elf" , "Halfling", "Human", "Dragonborn",
"Gnome", "Half-Elf", "Half-Orc", "Teifling", "Aasimar",
"Firbolg", "Goliath", "Kenku", "Lizardfolk", "Tabaxi",
"Triton", "Genasi", "Changeling", "Shifter", "Minotaur"]

const SUB_RACE = {
    "Dwarf": ["Hill Dwarf", "Mountain Dwarf", "Duergar"],
    "Elf": ["High Elf", "Wood Elf", "Dark Elf (Drow)", "Eladrin", "Sea Elf", "Shardar-Kai"],
    "Halfling": ["Lightfoot Halfling", "Stout Halfling", "Ghostwise Halfling"],
    "Dragonborn": [
        "Black Dragonborn", "Blue Dragonborn", "Brass Dragonborn",
        "Bronze Dragonborn", "Copper Dragonborn","Gold Dragonborn",
        "Green Dragonborn", "Red Dragonborn", "Silver Dragonborn",
        "White Dragonborn"
    ],
    "Gnome": ["Forest Gnome", "Rock Gnome", "Deep Gnome"],
    "Half-Elf": ["Base Half-Elf", "Half-Wood Elf", "Half-High Elf",
                 "Half-Drow", "Half-Sea Elf"],
    "Tiefling": ["Asmodeus Tiefling", "Beelzebul Tiefling", "Dispater Tiefling",
                "Fierna Tiefling", "Glasaya Tiefling", "Levistus Tiefling",
                "Mammon Tiefling", "Mephistopheles Tiefling",
                "Zariel Tiefling"],
    "Aasimar": ["Scourge Aasimar", "Protector Aasimar", "Fallen Aasimar"],
    "Genasi": ["Air Genasi", "Earth Genasi", "Water Genasi", "Fire Genasi"],
}

const CLASS = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk",
               "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"]


function fillCard() {
    let $cardHolder = document.getElementById('card_holder')
    while ($cardHolder.childNodes.length > 0) {
        $cardHolder.removeChild($cardHolder.lastChild);
    }
    let $input = document.getElementsByTagName('input')[0];
    if ($input.value != "") {
        makeCard($input.value);
    }
}




function makeCard(name) {
    let $cardHolder = document.getElementById('card_holder')

    let $card = document.createElement("div")
    $card.classList.add("card")

    let raceIndex = getRandomInt(RACE.length - 1);
    let race = RACE[raceIndex];

    if (Object.keys(SUB_RACE).includes(RACE[raceIndex])) {
        race = SUB_RACE[RACE[raceIndex]][getRandomInt(SUB_RACE[RACE[raceIndex]].length - 1)];
    }

    let job = CLASS[getRandomInt(CLASS.length -1)]


    // let $img = document.createElement("img")
    // $img.src = data.img
    // $img.alt = data.name
    //
    // $a.append($img)

    let $title = document.createElement("h1")
    $title.textContent = name

    let $p = document.createElement("p")
    $p.textContent =
    `${race} ${job}`

    $card.append($title)
    $card.append($p)

    $cardHolder.append($card)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

document.getElementsByTagName('button')[0].addEventListener("click", fillCard)
document.getElementsByTagName('form')[0].addEventListener("submit",
(event) => {
    event.preventDefault();
    fillCard();
})
