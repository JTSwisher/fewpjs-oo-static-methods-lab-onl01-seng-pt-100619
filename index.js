class Formatter {
  //add static methods here

    static capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    static sanitize (string) {
      return string.replace( /[^A-Za-z0-9 '-]/g, '');
    }

    static titleize(string) {
      let container = [];
      let stringIntoArray = string.split(' ')

      for(let i = 0; i < stringIntoArray.length; i++) {
        if (i === 0) {
          container.push( this.capitalize(stringIntoArray[i]) )
         } else {
            switch(stringIntoArray[i])  {
              case "the":
              case "a":
              case "an":
              case "but":
              case "of":
              case "and":
              case "for":
              case "at":
              case "by":
              case "from":
                container.push(stringIntoArray[i]);
                break;
              default:
                container.push( this.capitalize(stringIntoArray[i]) ) ;
            };
         }  
      }
      return container.join(' ')
    }

}