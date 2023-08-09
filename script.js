const container = document.querySelector('.container')

//so idk what im doing i might need to redo this completely use google n shit
//NVM IM A FUCKING JENIUS HOLY SHITTTIJPEAJEIJERIQJWPJPIEW
//but it doesnt wotk really cus its not 16x16 its just.. 16 need to consider y axis as well 
//this is probably a for loop nested inside a this for loop
//logic is: for each div created, create 16 divs under that div 

for(let i = 0; i < 255; i++) {
    const gridSquare = document.createElement('div')
    gridSquare.style.border = " solid black"
    gridSquare.style.width = "25px"
    gridSquare.style.height = "12px"
    gridSquare.style.background = "white"
    gridSquare.style.border = "1px solid grey"
    container.appendChild(gridSquare)
    
    
}



