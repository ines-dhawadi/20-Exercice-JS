// ****************Exercice 1***************/
function Inverser(a,b) {  
tmp = a;
a = b;
b = tmp;
console.log(1,2)
};
Inverser();
//********************* Exercice  2 ********* 
function Afficher(Nom,Age,femme){

    return `${Nom} ${Age} ${femme}`;  

};console.log(Afficher("basma",33,true));

//********************* Exercice  3 ********* 
function somme(a,b){
   
        return a+b
};
console.log(somme(2,6));
//**************************** */
function somme(){
   let a = 2
       b = 6
    return a+b

};
console.log(somme());
//******************* Exercice 4 */
function incrémente (a){
    return a+1
};
console.log(incrémente (8));
//******************* Exercice 5 */
function  surface(a,b){
    return (a*b)/2
};
console.log(surface(3,3));
//******************* Exercice 6 */
let s = 'inesdhawadi';
let rev = s.split('').reverse().join('');
console.log(rev);
//******************* Exercice 7 */
function MAX(A,B,C){
    return Math.max(10, 20,15)
};
console.log(MAX(10,20,15));

//******************* Exercice 8 */
function tableau(){
  
    let t = [1,2,3,4,5];

   return t[0]
};
console.log(tableau());
//******************* Exercice 9 */



//******************* Exercice 10 */

function resteDiv(a, b) {
    return a % b;
    
  };
  console.log(resteDiv(10,3));

//******************* Exercice 11 */
function check() {
    let a = 52,
        b = 30;
  if(a + b < 100){
      console.log(true)
  }
    else{
        console.log(false) 
    }
  };
  check();
  //******************* Exercice 12 */
  function heures(a){
 return a*60*60;
  };
  console.log(heures(1));

//******************* Exercice 13 */
function check1(){
   let a = 1;
  if(a < 0){
      console.log(true)
  }
    else{
        console.log(false) 
    }
  };
  check1()
 //******************* Exercice 14 */
 function retourne() {
    let a = 2,
        b = 0;
  if(a = b){
      console.log(true)
  }
    else{
        console.log(false) 
    }
  };
  retourne();
 //******************* Exercice 15 */
 function divisible() {
    let a = 10;
      
  if(a % 5 === 0){
      console.log(true)
  }
    else{
        console.log(false) 
    }
  };
  divisible();
  //******************* Exercice 16 */
  function convertit(heure, minute) {
    return (heure*3600) + (minute*60);
  };
console.log(convertit(1, 3));
  //******************* Exercice 17 */
 var tab3=[1,2,3,4,5];
    for(var i=0;i< tab3.length-1;i++)
        tab3.push(tab3.splice(-2-i,1)[0]);
        console.log(tab3)
        
  
  

  //******************* Exercice 18 */
  function getLastElem() {
      let tab = [1,2,3,4]
    return tab[tab.length - 1]
  };
  console.log(getLastElem());
  //******************* Exercice 19 */
  function vérifier() {
      let a = 5,
          b = 3;
      if (a === b){
       return true 
    }
      else{
        return false   
      }
  
};
console.log(vérifier());
 //******************* Exercice 20 */
function chaîne() {
      let a ="";
        
      if (a = " "){
       return true 
    }
      else{
        return false   
      }
  
};
console.log(chaîne());