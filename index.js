const contactInfo = [
  {
    name: "Christian",
    email: "christian@yahoo.com",
    phone: "323-555-1234",
  },
  {
    name: "Rich",
    email: "rich@tripod.com",
    phone: "323-555-1234",
  },
  {
    name: "Scott",
    email: "scott@mailinator.com",
    phone: "323-555-1234",
  },
  {
    name: "Danny",
    email: "danny@hotmail.com",
    phone: "323-555-1234",
  },
  {
    name: "Taka",
    email: "taka@myspace.com",
    phone: "323-555-1234",
  },
  {
    name: "Tim",
    email: "tim@netscape.com",
    phone: "323-555-1234",
  },
  {
    name: "Patrick",
    email: "patrick@live.com",
    phone: "323-555-1234",
  },
  {
    name: "Jacques",
    email: "jacques@aol.com",
    phone: "323-555-1234",
  },
]

const handleSelectChange = () => {
  const selectElementValue = document.getElementById("contact-select").value;
  const contactInfoElements = document.querySelectorAll(".contact-info");
  console.log("contactInfoElements", contactInfoElements);

  contactInfoElements.forEach((element) => {
    console.log(element.innerText, "inner text");
  });
};
