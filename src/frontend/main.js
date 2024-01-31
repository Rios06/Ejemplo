import { queryGraph } from "./apis/queryGaph.js";
import { queryRestGet, queryRestPost, queryRestUpdate, queryRestDelete } from "./apis/queryRest.js";

const inputSearch = document.querySelector("#inputSearch");
const containerInput = document.querySelector("#containerInput");
const containerCountries = document.querySelector("#containerCountries");
const buttonConsult = document.querySelector("#consult");
const buttonSend = document.querySelector("#send");

let body = {};

const countriesData = await queryRestGet()

const renderCountries = () => {
  countriesData.forEach(countrie => {
    const li = document.createElement("li")
    li.className = "countrie"
    li.innerHTML = countrie.name
    containerCountries.appendChild(li)
  });
}
renderCountries()

buttonConsult.addEventListener("click", async () => {
  const countrySearch = inputSearch.value;
  try {
    const dataQuery = await queryGraph({ code: countrySearch.toUpperCase() });
    body = dataQuery.data.country;
    console.log(body.name);
    containerInput.children[1].value = body.code;
    containerInput.children[3].value = body.name;
    containerInput.children[5].value = body.capital;
    containerInput.children[7].value = body.continent.name;
  } catch (error) {
    containerInput.children[1].value = "";
    containerInput.children[3].value = "";
    containerInput.children[5].value = "";
    containerInput.children[7].value = "";
    console.log(error);
  }
  buttonSend.removeAttribute("disabled");
  // queryRestUpdate()
  // queryRestDelete()
});

buttonSend.addEventListener("click", () => {
    if (body != null) {
      queryRestPost(body);
      location.reload()
    } else {
      alert("El codigo intriducido no es correcto");
    }
  buttonSend.setAttribute("disabled", "true");
});
