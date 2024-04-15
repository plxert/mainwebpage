function abschreibung(jahre,value,offset,calc_val) {
  var array = {}
  const ratio = value/jahre 
  var stand = value
  const max = calc_val != null && (calc_val) || jahre
  console.log(max)
  array[ Object.keys(array).length+1] = stand + "| start"
  if (offset == 0) {
      for (i=0;i<max;i++) {
          stand = stand-ratio
          console.log(stand)
          array[1] = stand
      }
  }
    
  
  if (offset > 0) {
      let month_ratio = (offset/12) * ratio
      array[ Object.keys(array).length+1] = "-"+month_ratio //-value
      stand-=month_ratio
      array[Object.keys(array).length+1] =  stand +"| 1" //value
      for (var i=0;i<(max-1);i++) {
          stand = stand-ratio
          array[Object.keys(array).length+1] =  "-"+ratio //-value
          array[Object.keys(array).length+1] =  stand+"|"+(i +2) //value
      }
      stand-=month_ratio
      array[Object.keys(array).length+1] =  "-"+month_ratio //-value
      array[Object.keys(array).length+1] =  stand+"|"+(i +2) //value
     
  }
  if (calc_val != null) {
      array[Object.keys(array).length+1] =  "RESTBETRAG: "+ stand //value
  }
 
  return array
}



document.getElementById("button").onclick = function() {
  const jahre = document.getElementById("jahre").value
  const wert = document.getElementById("wert").value
  const monate_offset = document.getElementById("monate").value 
  
  const abschreib_jahre = document.getElementById("abschreib_jahre").value 
  
  
  const obj = abschreibung(jahre,wert,monate_offset,abschreib_jahre)


    for (i=0;i<Object.keys(obj).length;i++) {
      document.write(obj[i+1] + "<br>") 
    }  }