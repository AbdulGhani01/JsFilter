let input;
let table = document.getElementById("myTable");

let tr = document.getElementsByTagName("tr");

function filter(){
    input = document.getElementById("myInput");
    input = input.value.toUpperCase();
    console.log(input);
    for (let i = 1; i < tr.length; i++) {
        console.log(tr[i]);
        td = tr[i].getElementsByTagName("td")[1];
        console.log(td);
      if (td) {
        country = td.innerText || td.textContent
        if (country.toUpperCase().indexOf(input) <= -1) {
            tr[i].style.display = "none";   
         }  
         else{
            tr[i].style.display = ""; 
         }
    }
}
}