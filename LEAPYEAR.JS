console.log("TYPE THE LEAP YEAR");

const ly = () => {
    let LY = document.getElementById("LEAPYEAR");

    if (LY.value / 4 == Math.floor(LY.value / 4)) {
        document.querySelector(".correct").style.display = 'block' 
    }
    else if (LY.value.length == "0") {
       alert("TYPE THE YEAR")
    }
    else {
        alert("WRONG TRY AGAIN")
    }
}

setInterval(() => {
    document.querySelector(".correct").style.display = 'none'
    
}, 3000);


// document.querySelector('.body').addEventListener('copy',e=>e.preventDefault()
