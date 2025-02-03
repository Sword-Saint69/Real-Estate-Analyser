const dashboardLink = document.querySelector("#dashboard");
const profileLink = document.querySelector("#profile");
const loginLink = document.querySelector("#login");

if (document.cookie.indexOf("authorization") != -1){
  dashboardLink.classList.toggle('hidden')
  profileLink.classList.toggle('hidden')
  loginLink.classList.toggle('hidden')
  submitBtn.toggleAttribute('disabled')
} 