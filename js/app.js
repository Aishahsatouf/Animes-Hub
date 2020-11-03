'use strict';
Animes.all=[];
var array=['Anime Title','Category','Rando Season','Remove'];
var table = document.getElementById('renderTable');
console.log(Animes.all);
function Animes(title,category,season){
    this.title=title;
    this.category=category;
    this.season=season;
   Animes.all.push(this);
}
Animes.prototype.getRandom=function(){
    this.season=Math.floor(Math.random() * (7 - 1) + 1);

};
var myForm = document.getElementById('myForm');
myForm.addEventListener('submit',handleSubmit);
function handleSubmit(event){
  event.preventDefault();
 var  title = event.target.title.value;
 var category = event.target.category.value;
 var anime = new Animes(title,category,1);
 anime.getRandom();
 clear();
 render();
 sendToLs();
 
}
function sendToLs(){
    var Anime=localStorage.setItem('items',JSON.stringify(Animes.all));
}
function getFromLs(){
    if(localStorage.getItem('items')){
        var animes = JSON.parse(localStorage.getItem('items'));
        for(var i=0;i<animes.length;i++){
            new Animes(animes[i].title,animes[i].category,animes[i].season);
        }
    }
   render(); 
}
getFromLs();
function addHeader(){

    var tr1=document.createElement('tr');
    table.appendChild(tr1);
    for (var j=0;j<array.length;j++){
        var th = document.createElement('th');
        tr1.appendChild(th);
        th.textContent= array[j];
    }
}
 function render(){
     addHeader();
    // var array=['Anime Title','Category','Rando Season','Remove'];
    // var table = getElementById('renderTable');
    for (var x =0 ;x<Animes.all.length;x++){
        var row =document.createElement('tr');
        table.appendChild(row);
          var td = document.createElement('td');
          row.appendChild(td);
          td.textContent= Animes.all[x].title;
          var td1 = document.createElement('td');
          row.appendChild(td1);
          td1.textContent= Animes.all[x].category;
          var td2 = document.createElement('td');
          row.appendChild(td2);
          td2.textContent= Animes.all[x].season;
          var td3 = document.createElement('td');
          row.appendChild(td3);
          var button = document.createElement('button');
          td3.appendChild(button);
          button.setAttribute('id',Animes.all[x].title);
          button.textContent='X';
      }

 }

 function clear(){
     var table = document.getElementById('renderTable');
     table.textContent='';
 }
 var remove = document. getElementById('renderTable');
 remove.addEventListener('click',Remove);
 function Remove (event){
  if(event.target.id!=='renderTable'){
   var tableRow=
  }
 }