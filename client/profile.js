const logoutBtn = document.querySelector("#logout");

logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.cookie = "authorization= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";

  setTimeout(() => {
    window.location.replace("/signin.html");
  }, 1000);
});
