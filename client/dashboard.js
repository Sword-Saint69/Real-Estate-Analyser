const saveBtn = document.querySelector("#edit-form-button");
const propertiesEl = document.querySelector("#property-list");
const editModal = document.querySelector("#edit-modal");
const editModalForm = document.querySelector("#edit-modal-form");
const modalForm = document.querySelector("#modal-form");

if (document.cookie.indexOf("authorization") == -1) {
  window.location.replace("/signin.html");
}

editModal.addEventListener("click", () => {
  editModal.classList.toggle("hidden");
});

editModalForm.addEventListener("click", (e) => {
  e.stopPropagation();
});

fetch("/api/properties")
  .then((response) => response.json())
  .then((data) => {
    propertiesEl.innerHTML = "";
    let formatCurrency = new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "USD",
    });

    console.log(data.data)

    if (data.data.length < 1) {
      propertiesEl.innerHTML = "<div class='text-center text-white font-semibold'>You aren't tracking any properties yet.</div>"
      return;
    }

    data.data.forEach((property) => {
      const {
        id,
        name,
        address,
        purchase_price,
        down_payment,
        loan_length,
        interest_rate,
        rental_income,
        expenses,
      } = property;
      // const cashFlow = calculateCashFlow()
      const propertyCard = document.createElement("div");
      const editBtn = document.createElement("button");
      editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>`;
      editBtn.addEventListener("click", (e) => {
        e.preventDefault();
        editModal.classList.toggle("hidden");
        modalForm.setAttribute("data-id", id);

        document.querySelector("input[name='name']").value = name;
        document.querySelector("input[name='address']").value = address;
        document.querySelector("input[name='purchase_price']").value =
          purchase_price;
        document.querySelector("input[name='down_payment']").value =
          down_payment;
        document.querySelector("input[name='loan_length']").value = loan_length;
        document.querySelector("input[name='interest_rate']").value =
          interest_rate;
        document.querySelector("input[name='rental_income']").value =
          rental_income;
        document.querySelector("input[name='expenses']").value = expenses;

        console.log("edit mode");
      });
      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>`;
      deleteBtn.addEventListener("click", (e) => {
        setTimeout(() => {
          propertyCard.remove();
        }, 500)
        fetch(`/api/properties/${id}`, {
          method: "DELETE",
        });
      });
      const buttonDiv = document.createElement("div");
      buttonDiv.append(editBtn);
      buttonDiv.append(deleteBtn);

      propertyCard.classList.add(
        "text-white",
        "border-2",
        "px-2",
        "py-2",
        "my-1",
        "rounded-md",
        "flex",
        "justify-between",
        "border-neutral-700"
      );
      propertyCard.innerHTML = `
        <div data-id="${id}" class="w-2/3">
          <h2 class="font-semibold" contenteditable="false">${name}</h2>
          <h3 contenteditable="false">${address}</h3>
          <p contenteditable="false">${formatCurrency.format(
            purchase_price
          )}</p>
          <details class="cursor-pointer">
            <summary>See More</summary>
            <p contenteditable="false">Down payment: ${formatCurrency.format(
              down_payment
            )}</p>
            <p contenteditable="false">Loan length: ${loan_length} years</p>
            <p contenteditable="false">Interest rate: ${interest_rate}%</p>
            <p contenteditable="false">Income: ${formatCurrency.format(
              rental_income
            )}</p>
            <p contenteditable="false">Expenses: ${formatCurrency.format(
              expenses
            )}</p>
          </details>
        </div>
        <div class="flex flex-col items-center">
          <h3 class="font-semibold">Cash Flow</h3>
          <p class=${
            rental_income - expenses < 0 ? "text-red-500" : ""
          }>${formatCurrency.format(rental_income - expenses)}/mo</p>
        </div>
      `;
      propertyCard.append(buttonDiv);
      propertiesEl.append(propertyCard);
    });
  });

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const { form } = e.target;
  const formData = new FormData(form);

  const formDataObj = {};
  for (const [key, value] of formData.entries()) {
    formDataObj[key] = value;
  }

  const propertyId = form.getAttribute("data-id");

  fetch(`/api/properties/${propertyId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formDataObj),
    redirect: "follow",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.location.replace("/dashboard.html");
    });
});
