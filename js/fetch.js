// import testProfile from './script1';


function results(){
  fetch('https://api.github.com/users/'+document.getElementById('user').value)
   .then(res=> {
       if(res.ok){
         return res.json()
       } else {
         document.getElementById('results').style.visibility = "visible";
         document.getElementById('form').style.borderTopLeftRadius = "20px/3px";
         document.getElementById('form').style.borderTopRightRadius = "20px/3px";
         document.getElementById('form').style.borderBottomRightRadius = "0";
         document.getElementById('form').style.borderBottomLeftRadius = "0";
         document.getElementById('completed').classList.add("radius2");
         document.getElementById('completed').classList.add("boxShadow");
         document.getElementById('completed').style.visibility = "visible";
         document.getElementById('completed').style.height = "180px";
       }})
   .then(data=>{
    let output =
       `
        <img src=${data.avatar_url} width=76 height=76>
        <div id="loginInfo">
          <p class="userName">@${data.login}</p>
          <p class="fullName">${data.login}</p>
          <p class="bio">this is the bio...</p>
        </div>
        <break></break>
       `
    document.getElementById('results').innerHTML = output;
    document.getElementById('list').style.display = "block";
    document.getElementById('form').style.borderRadius = "10px 10px 0 0";
    document.getElementById('results').style.visibility = "visible";
    document.getElementById('results').style.borderRadius = "0";
    document.getElementById('completed').classList.add("boxShadow");
    document.getElementById('completed').classList.add("radius2");
    document.getElementById('form').style.boxShadow = "none";

    document.getElementById('completed').style.height = "470px";
 }).catch(error=>console.log(error));

  fetch('https://api.github.com/users/'+document.getElementById('user').value+'/repos')
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
      var repos = '<div class="static">Repositories</div>';
      data.forEach(repo=>{
      repos +=
        `
         <li>
           <div class="name">
             ${repo.name}
           </div>
           <div>
             <i class="fas fa-star" style="margin-right: 10px"></i>${repo.stargazers_count}
           </div>
           <div>
             <i class="fas fa-code-branch" style="margin-right:5px; margin-left: -20px"></i>${repo.forks_count}
           </div>
         </li>
       `;
     });
  document.getElementById('list').innerHTML = repos;
  document.getElementById('list').style.visibility = "visible";
  document.getElementById('completed').style.visibility = "visible";
  document.getElementById('completed').style.borderRadius = "10px";
  }).catch(error=>console.log(error));
};
