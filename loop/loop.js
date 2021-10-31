//Ülesanne 3.1 Äratus//
/*let kordus=prompt("Sisestage mitu korda äratus heliseb")

for (let i = 0; i < kordus; i++) {

    console.log("Tõuse ja sära!")

}*/
//Ülesanne 3.2
/*let ringid=prompt("Sisesta ringide arv")
let i=1
let porgandid=0

while (i <= ringid) {

    if (i % 2 == 0) {
        porgandid=porgandid+i

    }
    i++
}
console.log("Porgandite koguarv on " + String(porgandid))*/

//Ülesanne 3.3 Täringumäng//
/*let taringute_arv=prompt("Sisestage täringute arv")
for (let i = 0; i < taringute_arv; i++) {
    let suvaline_arv =Math.floor(Math.random() *(6-1)+1)
    console.log(suvaline_arv)
}*/

//Ülesanne 3.4 Õunte jagamine//
let poialpoiss_arv=prompt("Mitu pöialpoissi tahab õunu?")
let max_ounu=14
let i=1
while (i <= poialpoiss_arv) {
    let ounte_arv =Math.floor(Math.random() *(3-1)+1)
    max_ounu=max_ounu-ounte_arv
    console.log(ounte_arv)
    i++
}
console.log("Lumivalgekesele jäi " + String(max_ounu))

