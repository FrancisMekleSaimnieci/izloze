const vardi=['Rober Kamol', 'Reiny Melgailis','Kaspars Ķirsis','Daniel Kazainis','Francis Pūliņš'];
const balvas=['2 lati','1g sāls','100 santīmi','0,03 santīmi','0,15 santīmi'];
const naudaKopa= 30;
let uzvaretajuSkaits = 5;
let rindas=document.querySelector('.rindas');
//Math.random=Math.random()*10;
for (let i=0;i<uzvaretajuSkaits;i++){
    let rand=Math.random()*vardi.length;
    rand=Math.floor(rand);
    let uzvaretajs = vardi[rand];
    let laimests = balvas[rand];
    rindas.innerHTML +=`
    <tr>
    <td>${i+1}</td>
    <td>${uzvaretajs}</td>
    <td>${laimests}</td>
    </tr>`

}






 