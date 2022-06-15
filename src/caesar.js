// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function (){
  function messageTransformer(message, shift){
    let transformedMessage = "";

    message.forEach((letters) => {
      if(letters.charCodeAt(0) < 97 || letters.charCodeAt(0) > 122){
        transformedMessage += letters; 
    } else {
        const charCode = letters.charCodeAt(0) + shift;
        if (charCode < 97){const numBalance = charCode - 97;
          transformedMessage += String.fromCharCode(122 + numBalance + 1);
        } else if(charCode > 122){const numBalance = charCode - 122;
          transformedMessage += String.fromCharCode(97 + numBalance - 1);
        } else {
          transformedMessage += String.fromCharCode(charCode);
        }
      }
    });
    return transformedMessage;
  };

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25 || shift === undefined) return false;
    
    const codeEntry = input.toLowerCase().split("");
      if(encode) return messageTransformer(codeEntry, shift);
        return messageTransformer(codeEntry, shift * -1);
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
