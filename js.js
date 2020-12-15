//data entered into an object
var enemyData = [
    {
        name : "Ape",
        health : 19,
        type : "beast",
        ac : "15",
        str : 14,
        dex : 14,
        con : 14,
        int : 6,
        wis: 12,
        cha: 7,
        attack:"  Fist: Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage.  Rock: Ranged Weapon Attack: +5 to hit, range 25/50 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage.",
        special:"Multiattack. The ape makes two fist attacks.",
        speed:"30",
        exp: 100
    },
    
    {
        name : "Centaur",
        health : 45,
        ac : 12,
        str : 18,
        dex : 14,
        con : 14,
        int : 9,
        wis : 13,
        cha : 11,
        attack : "Multiattack : The centaur makes two attacks: one with its pike and one with its hooves or two with its longbow.Pike: Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 9 (1d10 + 4) piercing damage.Hooves :Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.Longbow: Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
        special : "Charge: If the centaur moves at least 30 feet straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra 10 (3d6) piercing damage",
        speed : "50",
        exp : 250
    },
    {
        name : "Ghoul",
        health : 22,
        ac : 12,
        str : 13,
        dex : 15,
        con : 10,
        int : 7,
        wis : 10,
        cha : 6,
        attack : "Bite: Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) piercing damage. Claws: Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        special : " Damage Immunities :  poison, Condition Immunities: charmed, exhaustion, poisoned, Senses: darkvision 60 ft ",
        speed : "30",
        exp : 200
    },
    {
        name : "Ghast",
        health : 36,
        ac : 13,
        str : 16,
        dex : 17,
        con : 10,
        int : 11,
        wis : 10,
        cha : 8,
        attack : "Bite : Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 12 (2d8 + 3) piercing damage. Claws : Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage. If the target is a creature other than an undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        special : "Stench : Any creature that starts its turn within 5 feet of the ghast must succeed on a DC 10 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the ghast's Stench for 24 hours. Turn Defiance : The ghast and any ghouls within 30 feet of it have advantage on saving throws against effects that turn undead.",
        speed : "30",
        exp : 200
    },
    // {
    //     name : "",
    //     health : ,
    //     ac : ,
    //     str : ,
    //     dex : ,
    //     con : ,
    //     int : ,
    //     wis : ,
    //     cha : ,
    //     attack : "",
    //     special : "",
    //     speed : "",
    //     exp :
    // },
   
]
//vars
var players;
var difficulty;
var weight;

//set a random number for random selection
function getRandomNun(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)+min);
}
//take inputs from the boxes, set then to vars
function takeInputs(){
    var players = document.getElementById("players-input");
    var difficulty = document.getElementById("difficulty");
    this.players = parseInt(players.value);
    this.difficulty = difficulty.value;   
}
//reset function to clear screen, activate when submit is clicked
function reset(){
    var remove = document.getElementById("output");
    remove.innerHTML= "";
}
//take difficulty amount, set weight for multipliers
function setDifficulty(){
    if (difficulty === "easy"){
        weight = .5
    }
    else if(difficulty === "medium"){
        weight = 1
    }
    else{
        weight = 1.5
    }
}
//create divs for output 
function createDivs(){
   for (let i = 0; i < players; i++) {
       //select the random number
       e= getRandomNun(0,3)
       //create the div
       var newdiv = document.createElement("div")
       //div gets an id id
       newdiv.className = "spawn";
       
       //smash em
       document.getElementById("output").appendChild(newdiv);
       //enter the data (THERE MUST BE A BETTER WAY TO DO THIS) 
       newdiv.innerHTML= ("<p> name : "+enemyData[e].name+"</p> <p> health : "+ (enemyData[e].health *weight) +" , AC : " +enemyData[e].ac  +"</p>"+ 
       "<p> str : "+ Math.round (enemyData[e].str + (weight* .5)) + " dex : " +Math.round ( enemyData[e].dex +(weight* .5)) +" con : " +Math.round (enemyData[e].con +(weight* .5))  + " int : " +Math.round (enemyData[e].int+(weight* .5))  + " wis : " +Math.round (enemyData[e].wis+(weight* .5))  + " cha : " +Math.round (enemyData[e].cha+(weight* .5))  + "</p>"+
       "<p> Attacks : "+enemyData[e].attack+"</p>" +
       "<p> Special cases : " +enemyData[e].special +"</p>"+
       "<p> speed : " +enemyData[e].speed +" , exp : " + Math.round (enemyData[e].exp *(weight*1.25))  +"</p>"  );
   }    
}

// put all functions into a function
function play(){
    reset()
    takeInputs()
    setDifficulty()
    createDivs()
    
}
//run play on click of submit
var submit = document.getElementById("submit").onclick = play;

