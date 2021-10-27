let nimi = "Kaspar" //Sõne ehk String tüüpi
nimi = "Elissa" //Muudame sõne teistsuguseks
console.log(nimi)

let vanus = 22 //Täisarvu ehk Integeri tüüpi
console.log(vanus)

const nimi2 = "Mehikesemees" //Muutmatu/Konstantne väärtus
let andmed = { //Andmete kogumik
    eesnimi : "Peeter",
    perekonnanimi : "Termomeeter",
    age : 70
}

console.log(andmed)
console.log(andmed.eesnimi) //Selle käsuga näitame ainult andmete kogumist eesnime

andmed.eesnimi = "Kaspar"
console.log(andmed.eesnimi)

let massiiv = [1,2,3,4] //see on list
massiiv.push(3) //See käsk lisab arvu massiivi
console.log(massiiv)
//--------------------------------------------------
//Teisendused

let number1 = 25 //See on numbri tüüpi muutuja
let s6ne = "Elissa vanus on: "

number1 = String(24) //See on nüüd sõne ehk string tüüpi
console.log(s6ne + number1) //Kokku saab liita ainult sama tüüpi muutujaid, String+Strin(tekst + tekst) või ainult number+number

let arvuke = "25"
arvuke = Number("25")

let number_sonena = "29"
number_sonena = Number(number_sonena)
console.log(typeof number_sonena)

//---------------------------------------------------
//Ülesanne 1.2
let aasta = 2016
let president = "Kersti Kaljulaid"
let lause_keskosa = ". aastal valiti Eesti presidendiks "
let lause = String(aasta + lause_keskosa + president)
console.log(lause)

//----------------------------------------------------
//Arvutamine
let arvutus
arvutus = Math.PI
console.log(arvutus);
let umardamine = Math.round(7.2)
console.log(umardamine);
let umardame_alla =  Math.floor(4.3)
console.log(umardame_alla)
let umardame_ulesse = Math.ceil(4.3)
console.log(umardame_ulesse)
let suurim_listis = Math.max(2,69,5,666,420,615,1337)
console.log(suurim_listis)
let suvaline_arv = Math.round(Math.random() * 19)
console.log(suvaline_arv)

//var person = prompt("Please enter your name", "Harry Potter"); //Küsib inimeselt mingi küsimuse
//console.log(person)
//---------------------------------
//Ülesanne 1.3
//let astmealus = prompt("Sisestage astme alus")
//let astendaja = prompt("Sisestage astendaja")
//let vastus = astmealus ** astendaja
//console.log(vastus)
//-----------------------------------
//Ülesanne 1.4
//let nimi3 = prompt("Sisestage oma nimi")
//let lubatud_kiirus = prompt("Sisestage lubatud kiirus")
//let tegelik_kiirus = prompt("Sisestage tegelik kiirus")
//let trahv = (Number(tegelik_kiirus) - Number(lubatud_kiirus)) * 3
//näitevastus: Jürgen, kiiruse ületamise eest on teie trahv 30 eurot.
//let lausevastus = String (nimi3) + (" kiiruse ületamise eest on teie trahv ") + String (trahv) + (" eurot.")
//console.log(lausevastus)
//-----------------------------------
//Ülesanne 1.5
let EKAP = prompt("Sisestage ainepuktid numbriga")
let nadal = prompt("Sisestage nädalate arv")
let EKAP_teisendus = Number(EKAP) * 26
let EKAP_arvutus = Math.trunc(EKAP_teisendus / nadal)
let lahendus = ("Ajakulu ") + String(EKAP_arvutus) +(" tundi nädalas.")
console.log(lahendus)




