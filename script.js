window.addEventListener("load",function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
      response.json().then( function(json){
        const div = document.getElementById("container");
        for(index=0; index<json.length; index++){

         let html = `
        <div class="astronaut">
   <div class="bio">
      <h3>${json[index].firstName}&nbsp;${json[index].lastName}</h3>
      <ul>
         <li>Hours in space: ${json[index].hoursInSpace}</li>
         <li>Active: ${json[index].active}</li>
         <li>Skills: ${json[index].skills}</li>
      </ul>
   </div>
   <img src=${json[index].picture} class="avatar"></img>
</div>`
    container.innerHTML = container.innerHTML + html;
        }
    });
     
    });
  });
