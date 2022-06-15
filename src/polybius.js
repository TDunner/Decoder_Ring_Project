// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const polyCodeChars = {
      a: { number: "11" }, b: { number: "21" }, c: { number: "31" },
      d: { number: "41" }, e: { number: "51" }, f: { number: "12" },
      g: { number: "22" }, h: { number: "32" }, i: { number: "42" },
      j: { number: "42" }, k: { number: "52" }, l: { number: "13" },
      m: { number: "23" }, n: { number: "33" }, o: { number: "43" },
      p: { number: "53" }, q: { number: "14" }, r: { number: "24" },
      s: { number: "34" }, t: { number: "44" }, u: { number: "54" },
      v: { number: "15" }, w: { number: "25" }, x: { number: "35" },
      y: { number: "45" }, z: { number: "55" },
    };

  var transformedMessage = "";
    if(encode){
      input.toLowerCase().split("").map((chars) => {
        if(chars.match(/[a-z]/i)){
          for(let key in polyCodeChars){
            if(key === chars) transformedMessage += polyCodeChars[key].number;
          }  
       }else{
          transformedMessage += chars;
       }
     });    
    }else{
       const doubleSpaces = input.toLowerCase().replace(" ", "  ");
        if(doubleSpaces.length % 2 === 1) return false;
         for(let i = 0; i < doubleSpaces.length; i += 2){
           const presentInput = doubleSpaces[i] + doubleSpaces[i + 1];
            if(presentInput === "  ") transformedMessage += " ";
             if(presentInput === "42"){ transformedMessage += "(i/j)";
          }else{                         
              for(let key in polyCodeChars){
               if(presentInput === polyCodeChars[key].number) transformedMessage += key
             } 
           }
         }
       }     
      return transformedMessage;
    }
  return {
    polybius,
  };
})();


module.exports = { polybius: polybiusModule.polybius };
