 //to number card
 cardNumber = document.getElementById('number-card').addEventListener('change',function(){
        document.getElementById('write-number-card').innerHTML = document.getElementById('number-card').value;    

        })

          function maskNumberCard(){
            var maskCardnumber = document.getElementById('number-card')
            if (maskCardnumber.value.length == 4 || maskCardnumber.value.length == 9 || maskCardnumber.value.length == 14){
              maskCardnumber.value += " "
              
                          }
          }

         //to full name
 cardName = document.getElementById('holder').addEventListener('change',function(){
  document.getElementById('write-full-name').innerHTML = document.getElementById('holder').value;    

  })

            //to date expires
 cardExpires = document.getElementById('expires').addEventListener('change',function(){
  document.getElementById('write-date-expires').innerHTML = document.getElementById('expires').value;    

  })

    function maskNumberExpires(){
      var maskCardnumber = document.getElementById('expires')
      if (maskCardnumber.value.length == 2 ){
        maskCardnumber.value += "/"
        
                    }
    }

    //to csv
 cardCsv = document.getElementById('csv').addEventListener('change',function(){
  document.getElementById('write-number-csv').innerHTML = document.getElementById('csv').value;    

  })
