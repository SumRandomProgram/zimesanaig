laukums.width = 650
laukums.height = 550
let ctx = laukums.getContext("2d")

let ota = false
let platums = 0
let augstums = 0
let otasK = "black"

/*
Lai zīmētu ar roku:
1. nospiež peli
2. palaiž vaļā peli
3. kursora atrašanās vieta
*/
dzest.addEventListener("click", function(){
    ctx.clearRect(0,0, laukums.width, laukums.height)
})

otaZimet.addEventListener("click", function(){
    ota = true
    otaZimet.style.backgroundColor = "orange"

})

otasKrasa.addEventListener("change", function(){
    otasK = otasKrasa.value
})

saglabat.addEventListener("click", function(){
    const fails = document.createElement("a")
    fails.download = "attels.png"
    fails.href = laukums.toDataURL("image/png")
    fails.click()
    otaZimet.style.backgroundColor = "blue"
})
// Nolasa peles kursora atrašanās vietu
function pozicija(event){
    platums = event.clientX - 195
    augstums = event.clientY - 145
}

// Sāk zīmēšanu
function sakt(event){
    if(ota == true) {
        document.addEventListener("mousemove", zimet)
        pozicija(event)
    }
}
// Aptur zīmēšanu
function stop(){
    document.removeEventListener("mousemove", zimet)
}
// Zīmēšanas process
function zimet(event){
    ctx.beginPath()
    ctx.lineWidth = 5
    ctx.lineCap = "round"
    ctx.strokeStyle = otasK
    ctx.moveTo(platums, augstums)
    // atjauno x, y
    pozicija(event)
    ctx.lineTo(platums, augstums)
    ctx.stroke()
}


document.addEventListener("mousedown", sakt)
document.addEventListener("mouseup", stop)
