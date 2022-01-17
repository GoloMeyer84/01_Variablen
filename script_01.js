"use strict";

/***** Variablen 01 *******/

// // Zeilenkommentar//
console.log("Zeilenkommentar");
/*
Block-
Kommentar
*/
console.log("Blockkommentar");

// //Konsolenausgabe//

console.log("Hallo Welt");

// //Ausgabe der Variable : firstName //

var firstName = "Thilo"

console.log(firstName);

/* 02 Deklaration + Wertzuweisung I */

let firstName2; //Deklaration (Definition)//
firstName2 = "Thilo2" //Wertzuweisung - Assignment //
console.log(firstName2); // Ausgabe des Inhalts der Variable firstName2//

let lastName = "Schönemeyer"; //Deklaration und Wertzuweisung//
console.log(lastName); 

// //verknüpfen der Variablen firstName und lastName incl. Leerzeichen durch " "//

console.log(firstName + " " + lastName); 


/* 03 Deklaration + Wertzuweisung II */

// let firstName3, lastName2; //zusammenfassen von Deklarationen//
// firstName3 = prompt("Bitte Vornamen eingeben"); //Eingabe firstName//
// lastName2  = prompt("Bitte geben Sie den Familienname ein"); //Eingabe lastName//

// console.log(firstName3 + " " + lastName2);

//JS ist eine untypisierte Sprache (untyped)

let test;
test = "Hi";    //string
test = 2;       //number
test = true;    //bool
//Inhalt der Variable test wird überschrieben (Datentyp wird geändert)

console.log("Datentyp: " + typeof test); //zeigt den Datentyp von test an
console.log("Inhalt: " + test); //zeigt den Inhalt von test an


