function print(x) {
    document.getElementById("p").innerText = x
}

while (document.activeElement) {
    console.log(document.activeElement)
}
function letssee() {
    var see = document.getElementById("infobox").value
    print(see)
}
