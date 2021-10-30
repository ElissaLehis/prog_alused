/*
//Ülesanne 2.1 jäätumine//
let temperatuur = prompt("Sisestage õhutemperatuur")
if (temperatuur > 4.0) {
    console.log("Ei ole jäätumise ohtu")
}
else {
    console.log("On jäätumise oht")
} */

//Ülesanne 2.2 pulss//
/*let vanus = prompt("Sisestage vanus täisarvuna")
let sugu = prompt("Sisestage oma sugu")
let treening = prompt("Sisestage treeningu tüüp")
let miinimum_pulss
let maksimum_pulss

if (sugu=="M"||sugu=="m"&&treening==1) {
    miinimum_pulss =Math.round((220-vanus)*0.5)
    maksimum_pulss =Math.round((220-vanus)*0.7)
    console.log("Pulsisagedus peaks olema vahemikus " + String(miinimum_pulss) + " kuni " + String(maksimum_pulss))
}
else if(sugu=="M"||sugu=="m"&&treening==2) {
    miinimum_pulss =Math.round((220-vanus)*0.7)
    maksimum_pulss =Math.round((220-vanus)*0.8)
    console.log("Pulsisagedus peaks olema vahemikus " + String(miinimum_pulss) + " kuni " + String(maksimum_pulss))

}
else if (sugu=="M"||sugu=="m"&&treening==3) {
    miinimum_pulss =Math.round((220-vanus)*0.8)
    maksimum_pulss =Math.round((220-vanus)*0.87)
    console.log("Pulsisagedus peaks olema vahemikus " + String(miinimum_pulss) + " kuni " + String(maksimum_pulss))
}
else if(sugu=="N"||sugu=="n"&&treening==1) {
    miinimum_pulss = Math.round((206 - (vanus * 0.88)) * 0.5)
    maksimum_pulss = Math.round((206 - (vanus * 0.88)) * 0.7)
    console.log("Pulsisagedus peaks olema vahemikus " + String(miinimum_pulss) + " kuni " + String(maksimum_pulss))
}
else if(sugu=="N"||sugu=="n"&&treening==2) {
    miinimum_pulss = Math.round((206 - (vanus * 0.88)) * 0.7)
    maksimum_pulss = Math.round((206 - (vanus * 0.88)) * 0.8)
    console.log("Pulsisagedus peaks olema vahemikus " + String(miinimum_pulss) + " kuni " + String(maksimum_pulss))
}
else if(sugu=="N"||sugu=="n"&&treening==3) {
    miinimum_pulss = Math.round((206 - (vanus * 0.88)) * 0.8)
    maksimum_pulss = Math.round((206 - (vanus * 0.88)) * 0.87)
    console.log("Pulsisagedus peaks olema vahemikus " + String(miinimum_pulss) + " kuni " + String(maksimum_pulss))
}*/
//Ülesanne 2.3 Istekoht//
/*let istekoht=prompt("Kas soovite istekohta ise valida ('ise') või loosida ('loos')")
if (istekoht=="ise") {
    let aknakinnitus=prompt("Kas soovite istuda akna ääres ('aken') või mitte ('muu')?")
    if (aknakinnitus=="aken") {
        console.log("Valisite ise. Aknakoht")

    }
    else if (aknakinnitus=="muu") {
        console.log("Valisite ise. Vahekäigukoht")
    }
}
else if (istekoht=="loos") {
    let arvutus=Math.floor(Math.random()*3)
    if (arvutus==1) {
        console.log("Istekoht loositi. Aknakoht")
    }
    else {
        console.log("Istekoht loosit. Vahekäigukoht")
    }
}*/
//Ülesanne 2.4 Spämm//
let suurus=prompt("Sisestage kirja suurus:")
let pealkiri=prompt("Sisestage kirja teema pealkiri")
let fail=prompt("Kas kirjaga on kaasas fail?")
    if (suurus > 1 || pealkiri=="" || fail == "ei"){
        console.log("Kiri on spämm")
}
    else {
        console.log("Kiri ei ole spämm")
    }



