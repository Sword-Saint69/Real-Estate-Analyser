const signinForm = document.querySelector("#signin-form");
const signinText = document.querySelector("#login-text");
const loading = document.querySelector("#loader");

signinForm.addEventListener("submit", (e) => {
  const form = e.target;

  if (!form.checkValidity()) {
    return;
  }

  e.preventDefault();
  const formData = new FormData(form);
  console.log(form);
  const formDataObj = {};
  for (const [key, value] of formData.entries()) {
    formDataObj[key] = value;
  }

  signinText.classList.toggle("hidden");
  loading.classList.toggle("hidden");

  console.log(JSON.stringify(formDataObj));
  fetch("/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formDataObj),
    redirect: "follow",
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "Login successful") {
        window.location.replace("/dashboard.html");
      }
    });
});
