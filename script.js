
//// =========== xxxxxxxxxx ============ (ATM) ========== ////



var fun = document.getElementById("screen")

function one(button){
    fun.value += button
}

function dele(button){
fun.value = ""
}

function one1C(button){
    fun.value = fun.value.slice(0,-1)
}


var money = 75000
var pin = 1234
var signedIn = false;


function entersub() {
    if(fun.value == pin){
        signedIn = true
        fun.value = "Correct select an option below"

    }
    else if(fun.value == ""){
         fun.value = "Pin requird"
    }

    else{
        fun.value = "Incorrect pin"
   }

}

function dep() {
    if(signedIn){

      if(isNaN(fun.value) || fun.value <= 0){
        fun.value = "Please enter valid amount"
      }

      else{
        var plus = Number(fun.value) 

        var depp = plus + money
        money = depp
        fun.value = "Deposit succesfully now total balance is $" + depp
      }
      
    } else{
        fun.value = "Pin requird"
   }
   
 }

 
 function withd() {

    if(signedIn){

      if(isNaN(fun.value) || fun.value <= 0){
        fun.value = "Please enter valid amount"
      }

      else{
        var minuss = Number(fun.value) 
        var tot  = money  - minuss
        money = tot
          fun.value =  "Withdraw succesfully now total balance is $" + tot
      
      }
   
  }   else{
    fun.value = "Pin required"
}
    
 }

 function bal() {
    if(signedIn){

    fun.value =  "Your total balance... $" + money
  }
  else{
    fun.value = "Pin requird"
}
  
 }


