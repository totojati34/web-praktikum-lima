let nilai = document.getElementById("nilai");
let kurs = document.getElementById("kurs");
let btn = document.getElementById("konversi");
let total = document.getElementById("rupiah");

btn.addEventListener("click", function(){
    total.value = "Rp. " + (kurs.value * nilai.value).toFixed(3);
;});
