const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  let index = 0;
  function onKeyDownHandler(e) {
    console.log(e);
    const key = parseInt(e.detail || e.which);
    console.log(key);
    
    
    if ( key === code[index] ) {
      index ++;
      console.log(index);
      if ( index >= 10 ) {
        alert('Congrats! You just got 30 lives!');
      } else {
      console.log(index);
    } 
    }
  }
  
  
  document.body.addEventListener('keydown', onKeyDownHandler)

}
init();