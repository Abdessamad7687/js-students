
let TabEtudiant 
if(localStorage.Etudiant != null){
   TabEtudiant = JSON.parse(localStorage.Etudiant)
}
else{
   TabEtudiant = []
}
let Nom = document.getElementById("Nom")
let Prenom = document.getElementById("Prenom")
let Telephone = document.getElementById("Telephone")
let Filliere = document.getElementById("select")
let Email = document.getElementById("email")
let Ajouter = document.querySelector("#Ajouter")
let bi = document.getElementById("bi")
let select = document.getElementById("select")   

Ajouter.addEventListener("click" , function(){
   let Etudiant = {
      Nom : Nom.value,
      Prenom : Prenom.value,
      Telephone : Telephone.value,
      Email : Email.value,
      Filliere : select.value
   }
    
  TabEtudiant.push(Etudiant)
   localStorage.setItem("Etudiant",JSON.stringify(TabEtudiant))
   ajouterEtudiant()
})
ajouterEtudiant()
/**/
function deleteItem(i){
   console.log(i)
   TabEtudiant.splice(i,1)
   localStorage.Etudiant = JSON.stringify(TabEtudiant)
   window.location.reload()
}
function ajouterEtudiant(){
   let tble = ''
   let tbody = document.getElementById("tbody")
   for (let i = 0; i<TabEtudiant.length ;i++) {
      tble += `
      <tr>
         <td>${i+1}</td>
         <td>${TabEtudiant[i].Nom}</td>
         <td>${TabEtudiant[i].Prenom}</td>
         <td>${TabEtudiant[i].Email}</td>
         <td>${TabEtudiant[i].Telephone}</td>
         <td>${TabEtudiant[i].Filliere}</td> 
         <td><button class="btn btn-danger" id="Supprimer" onclick="deleteItem(${i})">Delete</button></td>  
      </tr>
   `
   } 
   tbody.innerHTML = tble 
   clearData()
}

document.querySelectorAll("input").forEach(elem=>{
   //elem.addEventListener("change", validate)
})

function clearData(){
   Nom.value = ''
   Prenom.value = ''
   Email.value = ''
   Telephone.value = ''
}

function validate(event){
   let check = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if(Nom.value.length > 3 && Prenom.value.length > 3 && Telephone.value.length == 10 && Email.value.match(check)){
         document.getElementById("bii").style.visibility = 'visible'
         msg.innerHTML = ''
         return true 
      }
      else{
         alert("Empty fields")
         return false
      }
}


document.getElementById('deleteAll').addEventListener('click', function(){
   localStorage.clear()
})
lo