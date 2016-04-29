var prompt = function(message) {
    console.log(message);
    process.stdin.resume();
    var fs = require('fs');
    var response = fs.readSync(process.stdin.fd, 100, 0, "utf8");
    process.stdin.pause();
    
    return response[0].substring(0,response[0].length-2 );
};


/*
une action doit retourner un objet
{
    degats : 0, // le nombre de degats subit par l'action
    experience : 0 // le nombre de point d'experience gagné suite à l'aciotn
    points : 0 // le nombre de point gagné suite à l'action
    ....
}
*/

var Zone = {
  type : "feu"  
};




console.log("\n"
+ "                      .     _///_,\n"
+ "                     .      / ` ' '>\n"
+ "                       )   o'  __/_'>\n"
+ "                      (   /  _/  )_\\'>\n"
+ "                       ' \"__/   \/_\/\_>\n"
+ "                           ____/_/_/_/\n"
+ "                          /,---, _/ /\n"
+ "                         \"\"  /_/_/_/\n"
+ "                            /_(_(_(_                 \\\n"
+ "                           (   \\_\\_\\\\_               )\\\n"
+ "                            \\'__\\_\\_\\_\\__            ).\\\n"
+ "                            //____|___\\__)           )_/\n"
+ "                            |  _  \\'___'_(           /'\n"
+ "                             \\_ (-'\\'___'_\      __,'_'\n"
+ "                             __) \\  \\\\___(_   __/.__,'\n"
+ "       Dragon of Luck         ,((,-,__\\  '\", __\\_/. __,'\n"
+ "                                       '\"./_._._-'\n"
);

var createResultat = function() {
    return {
        "degats" : 0, // le nombre de degats subit par l'action
        "experience" : 0, // le nombre de point d'experience gagné suite à l'aciotn
        "points" : 0 ,// le nombre de point gagné suite à l'action
        "dragon" : 0
    };
}

var actionCourir = function(){
    var resultat = createResultat();
    console.log("Votre vitesse est de " + utilisateur.vitesse);
    console.log("La vitesse du dragon est de " + dragon.vitesse);
    console.log(utilisateur.nom + ", tu te fais rattraper !");
    var vaPlusVite = prompt("Tu trouves une potion de vitesse dans un buisson mais tu diminues tes chances de lui echapper.L'avantage de la potion est que ta vitesse est augmentée de 10. Veux-tu la prendre ?","OUI ou NON").toUpperCase();
    var tuTrouvesUnePotionDeVitesse = Math.floor(Math.random() * 10);
    var nePrendsPasLaPotionDeVitesse = Math.floor(Math.random() * 10);
    var leDragonSeCoinceDansLesArbres = Math.floor(Math.random() * 10);
    if(vaPlusVite === "OUI" && tuTrouvesUnePotionDeVitesse <= 6) {
        console.log("Grâce à la potion, tu as réussi à lui échapper !!! Félicitation !!!");
       resultat.points = 1;
    } else if(vaPlusVite === "NON" && nePrendsPasLaPotionDeVitesse <= 5 || leDragonSeCoinceDansLesArbres <= 2) {
        console.log("Tu as réussi à lui échapper !!! Félicitation !!!");
        resultat.points = 5;    
    } else {
        console.log("Dommage, le dragon vous a rattrapé, et vous vous faîtes manger.");
        resultat.degats = 1;       
    }
    return resultat;
};

var actionBattre = function(){
    var resultat = createResultat();
    console.log("Votre force est de " + utilisateur.force);
    console.log("La force du dragon est de " + dragon.force);
    console.log(utilisateur.nom + ", tu te fait battre !");
    var plusDeForce = prompt("Tu trouves une potion de force dans un buisson mais tu diminue tes chances de le battre. L'avantage est que ta force est augmentée de 15. Veux-tu la prendre ?","OUI ou NON");
    var TuTrouvesLaPotionDeForce = Math.floor(Math.random() * 10);
    var nePrendsPasLaPotionDeForce = Math.floor(Math.random() * 10);
    var leDragonSeTordLaCheville = Math.floor(Math.random() * 10);
    if(plusDeForce === "OUI" && TuTrouvesLaPotionDeForce <= 5) {
        console.log("Grâce à la potion, tu as réussi à le battre !!! Félicitation !!!");
        resultat.points = 20;
    } else if(plusDeForce === "NON" && nePrendsPasLaPotionDeForce <= 3 || leDragonSeTordLaCheville <= 2) {
        console.log("Tu as réussi à le battre !!! Félicitation !!!");
        resultat.points = 40
    } else {
        console.log("Dommage, le dragon t'a tué en te tranchant la gorge.");
        resultat.degats = 1;       
    }
    return resultat;
}

var actionApprivoiser = function(){
    var resultat = createResultat();
    console.log("Votre gentillesse est de " + utilisateur.gentilesse);
    console.log("La gentillesse du dragon est de " + dragon.gentillesse);
    console.log(utilisateur.nom + ", tu n'arrives pas à l'apprivoiser car le dragon bouge beaucoup trop.");
    var potionParalysante = prompt("tu essayes de l'apprivoiser mais il remue trop. Heureusement,il y a une potion paralysante qui augmente tes chances de 1. Veux-tu la prendre.","OUI ou NON");
    var TuPrendsLaPotionParalysante = Math.floor(Math.random() * 10);
    var nePrendsPasLaPotionParalysante = Math.floor(Math.random() * 10);
    var leDragonCommenceADormir = Math.floor(Math.random() * 10);
    if(potionParalysante === "OUI" && TuPrendsLaPotionParalysante <= 4) {
        console.log("Grâce à la potion, tu as réussi à l'apprivoiser !!! Félicitation !!!");
        resultat.points = 30
    } else if(potionParalysante === "NON" && nePrendsPasLaPotionParalysante <= 2 || leDragonCommenceADormir <= 1) {
        console.log("Tu as réussi à l'apprivoiser !!! Félicitation !!!");
        resultat.points = 50;
    } else {
        console.log("Dommage, le dragon bougeait beaucoup trop et t'a planté sa queue pointue dans le ventre.");
        resultat.degats = 1;       
    }
    return resultat;
}

var utilisateur = new Object();
utilisateur.vitesse = 10;
utilisateur.force = 12;         
utilisateur.gentilesse = 10;
utilisateur.nom = prompt("Quel est ton nom ?").toUpperCase();
utilisateur.vie = 5;
utilisateur.point = 0;
utilisateur.dragons = 0;
utilisateur.serpents = 0;

var serpent = new Object();
serpent.vitesse = 15;
serpent.force = 10;
serpent.gentillesse = 5;

var dragon = new Object();
dragon.vitesse = 12;
dragon.force = 20;
dragon.gentillesse = 5;

var position = new Object();
position.x = 1;
position.y = 1;

var  choisirAction = function(){
    var solution = prompt("Vous vous promenez, puis soudain, un dragon surgit de nulle part. Vous avez 3 solutions, soit COURIR, soit vous BATTRE, ou sinon, la plus compliquée, l'APPRIVOISER.").toUpperCase();
    console.log("Votre nombre de vies : " +utilisateur.vie);
    console.log("Votre nombre de points : " +utilisateur.point);
   
    while((solution != "COURIR")
       && (solution != "BATTRE")
       && (solution != "APPRIVOISER")) {
        console.log("Vous n'avez pas donner la réponse qui fallait.");
        solution = prompt("Il faut donner soit COURIR, soit vous BATTRE, ou sinon, la plus compliquée, l'APPRIVOISER.").toUpperCase(); 
    }
    return solution;
}


var rencontrerUnDragon = function() {
     var resultat;
   switch(choisirAction()) {
        case "COURIR":
            resultat = actionCourir();
        break;
        case "BATTRE":
           resultat = actionBattre();
        break;
        case "APPRIVOISER":
            resultat = actionApprivoiser();
        break;
    }
    
    utilisateur.vie = utilisateur.vie - resultat.degats;
    utilisateur.point = utilisateur.point + resultat.points;
};


var rencontrerUnSerpent = function (){
    
};


while(utilisateur.vie != 0) {
    if(Math.random()> 0.5) {
        rencontrerUnDragon();  
    }else {
        rencontrerUnSerpent();
    }
}

console.log("                                   >>>>>>>>>>>>>> GAME OVER <<<<<<<<<<<<<<");