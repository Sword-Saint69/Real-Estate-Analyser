const registerForm = document.querySelector("#register-form");
const registerText = document.querySelector("#register-text");
const loading = document.querySelector("#loader");

registerForm.addEventListener("submit", (e) => {
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

  registerText.classList.toggle("hidden");
  loading.classList.toggle("hidden");

  fetch("/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formDataObj),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "Signup successful") {
        window.location.replace("/");
      }
    });
});
