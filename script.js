const vardi=['Rober Kamol', 'Reiny Melgailis','Kaspars Ķirsis','Daniel Kazainis','Francis Pūliņš'];
const balvas=['Galds','Durvju Zvans','Krēsls ar divām kājām','Kviešu grauds','Bērns'];
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






 