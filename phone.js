// console.log("hello from phone js");

// Async await
const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phone);
  displayPhones(phones);
};

const displayPhones = (phones) => {
  // In this container cards are gonna added
  const phoneContainer = document.getElementById("phone-container");
  // Clear previous searchData
  phoneContainer.textContent = ''
  // console.log(phones);
  phones.forEach((phone) => {
    console.log(phone);
    // Creating a div named phonecard
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-base-100 p-5 shadow-xl`;
    phoneCard.innerHTML = `
            <figure>
              <img
                src=${phone.image} />
            </figure>
            <div class="card-body">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>${phone.slug}</p>
              <div class="card-actions justify-center">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
        `;
    phoneContainer.appendChild(phoneCard);
  });
};

// Handle search

const handleSearch = () => {
  // console.log("search button clicked");
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText);
};

// loadPhone();
