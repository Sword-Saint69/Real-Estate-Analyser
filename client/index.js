const submitForm = document.querySelector("#property-form");
const submitBtn = document.querySelector("#property-form-button");
const dashboardLink = document.querySelector("#dashboard");
const profileLink = document.querySelector("#profile");
const loginLink = document.querySelector("#login");

if (document.cookie.indexOf("authorization") != -1){
  dashboardLink.classList.toggle('hidden')
  profileLink.classList.toggle('hidden')
  loginLink.classList.toggle('hidden')
  submitBtn.toggleAttribute('disabled')
  submitBtn.textContent = "Analyze Property"
} 

submitForm.addEventListener("submit", (e) => {
  const form = e.target;

  if (!form.checkValidity()) {
    return;
  }

  e.preventDefault();
  const formData = new FormData(form);

  const formDataObj = {};
  for (const [key, value] of formData.entries()) {
    formDataObj[key] = value;
  }

  fetch("/api/properties", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formDataObj),
    redirect: "follow",
  }).then((response) => {
    window.location.replace("/dashboard.html");
    response.json();
  });

  // TODO: add a copy straight to the DOM. I think its called optimistic loading or something like that.

  console.log(formDataObj);
});
