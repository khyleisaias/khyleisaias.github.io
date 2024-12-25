const date = new Date()

var mm = date.getMonth() + 1
var dd = date.getDate()
var yy = date.getFullYear()

//var dd = 1



function isChristmas(mm, dd, yy) {
    if (mm === 12) {
        if (dd < 25) {
            document.getElementById("header1").innerText = `Date today is ${mm}-${dd}-${yy}`
            document.getElementById("par1").innerHTML = `Not yet Christmas<br><br>Still <mark>${25 - dd} day/s</mark> before Christmas`     
        } else if (dd > 25) {
            document.getElementById("header1").innerText = `Date today is ${mm}-${dd}-${yy}`
            document.getElementById("par1").innerText = "Christmas has passed"
        } else {
            document.getElementById("header1").innerText = `Date today is ${mm}-${dd}-${yy}`
            document.getElementById("par1").innerText = "It's Christmas!!\nMerry Christmas to you!!"
        }
    } else {
        document.getElementById("header1").innerText = `Date today is ${mm}-${dd}-${yy}` 
        document.getElementById("par1").innerText = "Not yet Christmas"
    }
    
}

isChristmas(mm, dd, yy)
