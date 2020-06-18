var txtReader = {
  getTextContent: function(fileLocation) {
    try {
      if (
        fileLocation !== undefined &&
        fileLocation !== "undefined" &&
        fileLocation !== ""
      ) {
        var fr = new FileReader();
        fr.onload = function() {
          // document.getElementById('output').textContent=fr.result;
          console.log(fr.result);
        };
        // fr.readAsText(fileLocation);
        fr.readAsDataURL(fileLocation);

        /*
        const fs = require("fs");

        // Reading data in utf-8 format
        // which is a type of character set.
        // Instead of 'utf-8' it can be
        // other character set also like 'ascii'
        fs.readFile("./../AssignmentTask5.txt", "utf-8", (err, data) => {
          if (err) throw err;

          // Converting Raw Buffer to text
          // data using tostring function.
          console.log(data);

        });
        */

        /*
        var fr=new FileReader();
        fr.onload=function(){ 
                document.getElementById('output') 
                        .textContent=fr.result; 
            } 
              
            fr.readAsText(this.files[0]); 
        */

        /*
        fetch('/sample.txt')
    .then((r) => r.text())
    .then(text  => {
      console.log(text);
    })
    */
      } else {
        console.log("bad request");
      }
    } catch (ex) {
      console.log(ex);
    }
  }
};
export { txtReader };
