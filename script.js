/* ********************* DAILY CHALLENGE ************************** */

/**
 * @author : KAMATE Fanta
 * @description :  ecrire les mots entrés par un utilisateur à l'intérieur des étoiles
 * qui se présente sous la forme rectangle en se basant sur la longueur du mot le plus long 
 * @returns : les mots par ligne dans un cadre rectangulaire
 */

//Invitez l’utilisateur à entrer plusieurs mots (séparés par des virgules)
let stringUser = prompt("Entrer plusieurs mots séparés par des virgules");

// mettre les mots saisis à l'interieur d'un tableau
let tab = stringUser.split(",");

let max = tab[0];

//cette boucle permet de rechhercher le mot le plus long saisi par l'utilisateur
function tailleMot(){
    for(let i = 0; i < tab.length; i++){
        if(max.length < tab[i].length){
            max = tab[i];
    
        }

    }
    //console.log(max);
    return max;
}

 tailleMot();

// cette boucle permet d'écrire les mots saisis par l'utilisateur dans un cadre rectangullaire
function stars(){

    console.log("*".repeat(max.length + 4));
        
        //console.log("* " + j +  "  ".repeat(max.length - j.length) + " *");
        tab.forEach(mot => console.log(`* ${mot}${" ".repeat(max.length - mot.length)} *`));

     console.log("*".repeat(max.length + 4));
   

}

stars();

