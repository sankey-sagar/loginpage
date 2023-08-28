fetch("https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817").then((data)=>{
  return data.json();
}).then((objectdata)=>{
  console.log(objectdata);
  let Text="";
  for(let i=0;i<objectdata.data.length;i++){
    Text+=`<tr><td>${objectdata.data[i].name}</td> 
    <td>${objectdata.data[i].office}</td>
    <td>${objectdata.data[i].position}</td>  
    <td>$${objectdata.data[i].salary}</td>
    </tr>`
 }
 document.getElementById("table_body").innerHTML=Text;
})
