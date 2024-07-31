document.addEventListener('DOMContentLoaded', function() {
    // Selctor ColorBox
    const colorbox = document.getElementById('color-box')
    // get the change color bnutton
    const changeColorBtn= document.getElementById('change-color-btn')


function getRandumColor(){
    const letters = '0123456789ABCDEF' ;
    let color = '#' ;

    // create colors by selecting random letters
    for (let i =0; i<6 ; i++){
        color += letters[Math.floor(Math.random() * 16)];
    
    }
      return color ;
}

      // add event listerner to the click event of the change -color-btn element
      changeColorBtn.addEventListener('click', function(){

        // change the background color of the color-box lelement to a random color

        colorbox.style.backgroundColor = getRandumColor();

      })
})