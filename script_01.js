"use strict";

/***** Variablen 01 *******/

<<<<<<< HEAD
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

//03a Konstanten//
const test2 = "HI"; //Deklaration und Wertzuweisung MUSS in einer Zeile erfolgen
// test2 = 2; //Assignment auf eine Konstante wärend der Laufzeit nicht möglich!
console.log(test2);

// BEISPIEL //

// Deklaration //

let ageJohn, ageMark;
let birthYearJohn, birthYearMark;

// let year = 2022 ; // kann als Variable angegeben werden
// const year = 2022; // besser ist allerdings die Konstante (da sich der Wert nicht ändern soll)
let date = new Date(); //neuen Datentyp : Datum erzeugen
let year = date.getFullYear(); //volles Jahr aus dem Datum verwenden

//Wertzuweisung//
ageJohn = 25;
ageMark = 30;

//Berechnung//

birthYearJohn = year - ageJohn;
birthYearMark = year - ageMark;

//Ausgabe
console.log("Das Geburtsjahr von John ist " + birthYearJohn);
console.log("Das Geburtsjahr von Mark ist " + birthYearMark );

// BEISPIEL ENDE //





=======
/** 
 * 
 *  Block-Kommentar
 * 
*/
>>>>>>> 6adbf8bf17f88a7820b3300225626927f7c2a23d

// Zeilen-Kommentar

// Konsolen-Ausgabe
// console.log("Hello World!");
// console.log(firstName); // nicht deklarierte Var. --> Fehler

/***** 02 Deklaration + Wertzuweisung I *******/

// let firstName; // Deklaration (Definition)
// firstName = "Max"; // Wertzuweisung
// console.log(firstName); // Ausgabe

// let familyName = "Mütze"; // Deklaration + Wertzuweisung
// console.log(familyName);
// console.log(firstName + " " + familyName);

/***** 03 Deklaration + Wertzuweisung II *******/

// let firstName,familyName;
// firstName = prompt("Bitte Vornamen eingeben:");
// familyName = prompt("Bitte Nachnamen eingeben:");
// console.log(firstName + " " + familyName);

// JS ist eine untypisierte Sprache! | untyped
// let test;
// test = "Hi";
// test = 2;
// test = true;

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);

/***** 03a Konstanten *******/

// const test = "hi"; // Variable mit KONSTANTEM Inhalt
// test = 2; // KEINE neue Zuweisung zur LZ möglich! --> Fehler
// console.log("Inhalt: " + test);

/***** 04 Beispiel *******/

// Deklaration
let ageJohn, ageMark;
let birthYearJohn, birthYearMark; 

// let year = 2022;
let date = new Date();
let year = date.getFullYear();

// Wertzuweisung
ageJohn = 25;
ageMark = 30;

// Berechnung
birthYearJohn = year - ageJohn;
birthYearMark = year - ageMark;

// Ausgabe
console.log("birthYearJohn: " + birthYearJohn);
console.log("birthYearMark: " + birthYearMark);