const contactInfo = [
  {
    name: "Christian",
    email: "christian@yahoo.com",
    phone: "323-555-1234",
    status: "active",
    addressLine1: "6539 Wilton Ave.",
    addressLine2: "Culver City CA 90234",
  },
  {
    name: "Rich",
    email: "rich@tripod.com",
    phone: "323-333-1234",
    status: "active",
    addressLine1: "6539 Wilton Ave.",
    addressLine2: "Culver City CA 90234",
  },
  {
    name: "Scott",
    email: "scott@mailinator.com",
    phone: "323-444-1234",
    status: "active",
    addressLine1: "6539 Wilton Ave.",
    addressLine2: "Culver City CA 90234",
  },
  {
    name: "Danny",
    email: "danny@hotmail.com",
    phone: "323-111-1234",
    status: "active",
    addressLine1: "6539 Wilton Ave.",
    addressLine2: "Culver City CA 90234",
  },
  {
    name: "Taka",
    email: "taka@myspace.com",
    phone: "432-999-1234",
    status: "away",
    addressLine1: "6539 Wilton Ave.",
    addressLine2: "Culver City CA 90234",
  },
  {
    name: "Tim",
    email: "tim@netscape.com",
    phone: "323-331-1234",
    status: "busy",
    addressLine1: "6539 Wilton Ave.",
    addressLine2: "Culver City CA 90234",
  },
  {
    name: "Patrick",
    email: "patrick@live.com",
    phone: "323-931-1234",
    status: "active",
    addressLine1: "6539 Wilton Ave.",
    addressLine2: "Culver City CA 90234",
  },
  {
    name: "Jacques",
    email: "jacques@aol.com",
    phone: "123-000-1234",
    status: "busy",
    addressLine1: "6539 Wilton Ave.",
    addressLine2: "Culver City CA 90234",
  },
];

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

const handleListItemClicked = (event, contactName) => {
  console.log("list item clicked", event.target, contactName);
  const nameContainer = document.getElementById(
    `${contactName}-name-status-container`
  );
  const dropDown = document.getElementById("dropdown");
  const root = document.getElementById(`${contactName}-list-item`);
  const isActive = root.className === "highlighted";

  if (isActive) {
    root.className = "";
    nameContainer.className = "name-status-container";
    dropDown.className = "";
  } else {
    root.className = "highlighted";
    nameContainer.className = "name-status-container highlighted";
    dropDown.className = "show";
  }
};

// Render list items
const contacList = document.getElementById("contact-list");
contactInfo.forEach((contact) => {
  const listItem = document.createElement("li");
  listItem.id = `${contact.name}-list-item`;
  listItem.addEventListener("click", (e) =>
    handleListItemClicked(e, contact.name)
  );

  listItem.innerHTML = `
    <div class="name-status-container" id="${
      contact.name
    }-name-status-container">
      <div class="circle ${contact.status}"></div>
      <p>${contact.name}</p>
    </div>
    <div class="phone-email-container">
      <p class="contact-info">${contact.email}</p>
      <aside id="dropdown">
        <a href="mailto:${contact.email}">${contact.email}</a>
        <p>${contact.phone.replace("-", ".")}</p>
        <p>
          ${contact.addressLine1}<br />
          ${contact.addressLine2}
        </p>
      </aside>
    </div>
  `;
  contacList.appendChild(listItem);
});
