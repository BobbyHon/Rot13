function rot13(message){
    return message.split('').map(function(char){
      
      if (char.match(/[a-z]/i))
        {
          let ASCII = char.charCodeAt()
          let letterCap = ASCII > 90 ? 122 : 90
          
          ASCII = ASCII + 13 > letterCap ? ASCII - 13 : ASCII + 13
          return String.fromCharCode(ASCII)
        }
      else{
        return char
      }
    }).join('')
  }