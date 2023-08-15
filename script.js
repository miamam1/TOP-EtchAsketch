const container = document.querySelector('.container')
 
 function createGrid(x, bgColor) {
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
        gridSquare.addEventListener('mouseenter' , () => gridSquare.style.background = "#" +  Math.floor(Math.random()*16777215).toString(16) )
        container.appendChild(gridSquare)
        
    }

    
    
}



createGrid(16, "yellow")




function userInputtedGrid() {
    x = prompt("What size would you like your container to be?")
    y = prompt("What background color?")
    createGrid(x, y)
    
}












