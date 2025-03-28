//Create a function that takes a string and returns a string in which each character is repeated once.*/

// Write your function here

function doubleChar(string){
    let res = '';
    for (let i = 0; i < string.length; i++){
      res += string[i].repeat(2)
    }
    return res;
  
  }
  
  
  // Uncomment these one by one and hit 'Run' to test your code!
  
  console.log(doubleChar("String")) /* -> "SSttrriinngg"*/
  
  console.log(doubleChar("Hello World")) /* -> "HHeelllloo WWoorrlldd"*/
  
  console.log(doubleChar("1234!_")) /* -> "11223344!!__"*/
  
  console.log(doubleChar("Mississippi")) /* -> "MMiissssiissssiippppii"*/
  