var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
request.send();
let N=[];
let ID=[];
let E=[];
request.onload=function()
{
    var result=JSON.parse(request.response);
    console.log(result);
    for(i in result)
    {
     
        N.push(result[i].name);
        ID.push(result[i].email);
        E.push(result[i].id);
        
    }
   
}
//nav tag creation
let nav=document.createElement("nav");
let ul=document.createElement("ul");
ul.setAttribute("class","pagination");
//first button


let li_first=document.createElement("li");
li_first.setAttribute("class","page-item");

let first=document.createElement("button");
first.setAttribute("class","blank");
first.setAttribute("onclick","functionToExecute(0,10)");
first.innerHTML=1;

let li_sec=document.createElement("li");
li_sec.setAttribute("class","page-item");
let sec=document.createElement("button");
sec.setAttribute("onclick","functionToExecute(10,20)");
sec.innerHTML=2;

let li_third=document.createElement("li");
li_third.setAttribute("class","page-item");
let third=document.createElement("button");
third.setAttribute("onclick","functionToExecute(20,30)");
third.innerHTML=3;

let li_four=document.createElement("li");
li_four.setAttribute("class","page-item");
let four=document.createElement("button");
four.setAttribute("onclick","functionToExecute(30,40)");
four.innerHTML=4;

let li_five=document.createElement("li");
li_five.setAttribute("class","page-item");
let five=document.createElement("button");
five.setAttribute("onclick","functionToExecute(40,50)");
five.innerHTML=5;


document.body.append(nav);
nav.append(ul);
ul.append(li_first);
li_first.append(first);

ul.append(li_sec);
li_sec.append(sec);

ul.append(li_third);
li_third.append(third);

ul.append(li_four);
li_four.append(four);

ul.append(li_five);
li_five.append(five);
//table bodycreation
function createTable()
{
  
    let table =document.createElement("table");
    table.setAttribute("class","table table-bordered");
    return table;
}
function createThead()
{
   

    let thead =document.createElement("thead");
    thead.setAttribute("class","thead-dark");
    let tr =document.createElement("tr");
    thead.append(tr);

    let id =document.createElement("th");
    id.setAttribute("scope","col");
    id.innerHTML="ID";
    tr.append(id);

    let name =document.createElement("th");
    name.setAttribute("scope","col");
    name.innerHTML="NAME";
    tr.append(name);
 

    let email =document.createElement("th");
    email.setAttribute("scope","col");
    email.innerHTML="EMAIL";
    tr.append(email);
    return thead;
}
function tbodyCreation()
{
    let tbody =document.createElement("tbody");
    tbody.setAttribute("id","tbody")
    return tbody;
}
//table each button function creation
function functionToExecute(min,max)
{
    var Table = document.getElementById("tbody");
   Table.innerHTML = "";
   for(let i=min;i<max;i++)
   {
     let tr =document.createElement("tr");

       var email=document.createElement("td");
        email.innerHTML=E[i];
        tr.append(email);

        var name=document.createElement("td");
        name.innerHTML=N[i];
        tr.append(name);

        var id=document.createElement("td");
        id.innerHTML=ID[i];
        tr.append(id);
  
    tbody.append(tr)
   }
   
}


let title=document.createElement("h1");
title.setAttribute("id","title");
title.innerHTML=" Pagination using DOM";
document.body.append(title);

let p=document.createElement("p");
p.setAttribute("id","description");
p.innerHTML="table is created using XML http requested data";
document.body.append(p);

let tabel=createTable();
let thead=createThead();
let tbody=tbodyCreation();

let div=document.createElement("div");
div.setAttribute("class","table-responsive");
document.body.append(div);
div.append(tabel);


tabel.append(thead);
tabel.append(tbody);



