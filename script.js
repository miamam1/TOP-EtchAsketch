const container = document.querySelector('.container')
 
 function createGrid(x, bgColor, penColor) {
    // so - 2 is needed to account for the space taken up by the border.
    // i think border takes up double the px: so eg. a border with 7px solid black 
    // would require another 14px to be accounte for, so calculation would be -14 instead
    // of 2
    let y = (600 / x) - 2
    x *= x
    container.innerHTML = ''
    for(let i = 0; i < x; i++) {
        const gridSquare = document.createElement('div')
        gridSquare.style.border = "1px solid black"
        gridSquare.style.width = y + 'px'
        gridSquare.style.height = y + 'px'
        gridSquare.style.background = bgColor
        gridSquare.addEventListener('mouseenter' , () => gridSquare.style.background = penColor)
        container.appendChild(gridSquare)
        
    }
    
    
}

function rainbow(x, bgColor) {
    // so - 2 is needed to account for the space taken up by the border.
    // i think border takes up double the px: so eg. a border with 7px solid black 
    // would require another 14px to be accounte for, so calculation would be -14 instead
    // of 2
    let y = (600 / x) - 2
    x *= x
    container.innerHTML = ''
    for(let i = 0; i < x; i++) {
        const gridSquare = document.createElement('div')
        gridSquare.style.border = "1px solid black"
        gridSquare.style.width = y + 'px'
        gridSquare.style.height = y + 'px'
        gridSquare.style.background = bgColor
        gridSquare.addEventListener('mouseenter' , () => gridSquare.style.background = "#" + Math.floor(Math.random()*16777215).toString(16))
        container.appendChild(gridSquare)
        
    }
    
    
}













// Math.floor(Math.random()*16777215).toString(16)
 createGrid(16, "white" , "black")


let userSize = 16
let userColor = "white"
let userPenColor = "black"

function userInputtedGrid() {
    userSize = prompt("What size would you like your container to be?")
    userColor = prompt("What background color?")
    userPenColor = prompt("What pen color?")
    createGrid(userSize, userColor, userPenColor)
    
    
}



console.log(userSize)
console.log(userColor)

function clearGrid() {
    if(rainbowActive == true) {
        rainbow(userSize, userColor)
    }
    else{
        createGrid(userSize, userColor, userPenColor)
        
    }
    
}



let rainbowActive = false



function rainbowBtn() {
    rainbow(userSize, userColor)
    rainbowActive = true
    document.getElementById('HTMLrainbowBtn').style.color = "#" + Math.floor(Math.random()*16777215).toString(16)
    document.getElementById('HTMLrainbowBtn').onclick = rainbowBtnToggle
}




function rainbowBtnToggle() {
    rainbowActive = false
    createGrid(userSize, userColor, userPenColor)
    document.getElementById('HTMLrainbowBtn').onclick = rainbowBtn
    document.getElementById('HTMLrainbowBtn').style.color = "black"
}