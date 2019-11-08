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
const SUB_CLASS = {
    "Barbarian": ["Berserker", "Totem Warrior", "Zealot", "Storm Herald", "Ancestral Guardian"],
    "Bard": ["College of Lore", "College of Valor", "College of Glarmour",
              "College of Swords", "College of Whispers"],
    "Cleric": ["Knowledge Domain", "Life Domain", "Light Domain", "Nature Domain",
               "Tempest Domain", "Trickery Domain", "War Domain", "Grave Domain",
               "Forge Domain", "Arcana Domain", "Order Domain"],
    "Druid": ["Circle of the Land", "Circle of the Moon",
              "Circle of Dreams", "Circle of the Shepherd",
              "Circle of Spores" ],
    "Fighter": ["Champion", "Battle Master", "Eldricth Knight",
                "Samurai", "Cavalier", "Arcane Archer"],
    "Monk": ["Way of the Open Hand", "Way of Shadow", "Way of the Four Elements",
             "Way of the Long Death", "Way of the Drunken Master",
             "Way of the Kensei", "Way of the Sun Soul"],
    "Paladin": ["Oath of Devotion", "Oath of the Ancients", "Oath of Vengence",
                "Oath of Conquest", "Oath of Redemption"],
    "Ranger": ["Hunter", "Beast Master", "Gloom Stalker", "Horizon Walker",
               "Monster Slayer"],
    "Rogue": ["Thief", "Assassin", "Arcane Trickster", "Swashbuckler",
              "Mastermind", "Inquisitive", "Scout"],
    "Sorceror": ["Draconic Bloodline", "Wild Magic", "Divine Soul",
                 "Shadow Magic", "Storm Sorcery"],
    "Warlock": ["Archfey", "Great Old One", "Fiend",
                "Undying", "Celestial", "Hexblade"],
    "Wizard": ["Abjuration", "Conjuration", "Divinition",
               "Enchantment", "Evocation", "Illusion",
               "Illusion", "Necromancy", "Transmutation",
               "War"]
}

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

    let race = RACE[getRandomInt(RACE.length - 1)];

    if (Object.keys(SUB_RACE).includes(race)) {
        race = SUB_RACE[race][getRandomInt(SUB_RACE[race].length - 1)];
    }

    let job = CLASS[getRandomInt(CLASS.length -1)]
    let subJob = SUB_CLASS[job][getRandomInt(SUB_CLASS[job].length - 1)];

    let $title = document.createElement("h1")
    $title.textContent = name

    let $p = document.createElement("p")

    $p.textContent =
    `${race} ${subJob} ${job}`


    // let $img = document.createElement("img")
    // $img.src = data.img
    // $img.alt = data.name
    //
    // $a.append($img)



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
