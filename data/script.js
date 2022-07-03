function adicionar(){

   let text  = document.getElementById("texto").value;
       
    let list = document.getElementById("lista").innerHTML;

        list += "<li>" + text  + "</li>";
       
            if (text == ""){null}

            else{
        document.getElementById("lista").innerHTML = list;

            }
              
    
        document.getElementById("texto").value = null;
    }


    //Evento DOM, aciona o onclick ao precionar a pecla ENTER 
document.addEventListener("keypress", function(e){
        if (e.key === "Enter"){
            const btn = document.querySelector("#button");
             btn.click();
        }
})