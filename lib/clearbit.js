// Create all variables
const authorization = "Bearer sk_yourApiKeyFromClearBIT";
const form = document.getElementById("clearbitForm");

// Create the functions
const updateTheDOM = (data) => {
  const fullName = data.person.name.fullName;
  const email = data.person.email;
  const bio = data.person.bio;
  const location = data.person.location;

  const userName = document.getElementById("userName");
  const userEmail = document.getElementById("userEmail");
  const userBio = document.getElementById("userBio");
  const userLocation = document.getElementById("userLocation");

  userName.innerText = fullName;
  userEmail.innerText = email;
  userBio.innerText = bio;
  userLocation.innerText = location;
}

const callTheAPI = (url) => {
  fetch(url, {
    headers: {
      'Authorization': authorization
    }
  })
    .then(response => response.json())
    .then((data) => {
      // console.log(data);
      updateTheDOM(data);
    });
}


// Run things / call the functions
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const currentTarget = event.currentTarget;
  const input = currentTarget.querySelector("#clearbitEmail");
  const searchEmail = input.value;
  const url = `https://person.clearbit.com/v2/combined/find?email=${searchEmail}`
  callTheAPI(url);
});

