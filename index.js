const contactInfo = [
  {
    name: "Christian",
    email: "christian@yahoo.com",
    phone: "323-555-1234",
  },
  {
    name: "Rich",
    email: "rich@tripod.com",
    phone: "323-333-1234",
  },
  {
    name: "Scott",
    email: "scott@mailinator.com",
    phone: "323-444-1234",
  },
  {
    name: "Danny",
    email: "danny@hotmail.com",
    phone: "323-111-1234",
  },
  {
    name: "Taka",
    email: "taka@myspace.com",
    phone: "432-999-1234",
  },
  {
    name: "Tim",
    email: "tim@netscape.com",
    phone: "323-331-1234",
  },
  {
    name: "Patrick",
    email: "patrick@live.com",
    phone: "323-931-1234",
  },
  {
    name: "Jacques",
    email: "jacques@aol.com",
    phone: "123-000-1234",
  },
];

// Render list items on first render
const contacList = document.getElementById("contact-list");
contactInfo.forEach((contact) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <div class="name-status-container">
      <div class="circle"></div>
      <p>${contact.name}</p>
    </div>
    <p class="contact-info">${contact.email}</p>
  `;
  contacList.appendChild(listItem);
});

const handleSelectChange = () => {
  const desiredContactInfoValue =
    document.getElementById("contact-select").value;
  const oppositeContactInfoValue =
    desiredContactInfoValue === "phone" ? "email" : "phone";
  const contactInfoElements = document.querySelectorAll(".contact-info");

  contactInfoElements.forEach((element) => {
    const individualContactData = contactInfo.find((contact) => {
      return contact[oppositeContactInfoValue] === element.innerText;
    });
    element.innerText = individualContactData[desiredContactInfoValue];
  });
};
