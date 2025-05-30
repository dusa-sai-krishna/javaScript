/**
 * fetch is used to make HTTP requets to fetch json objects
 * files and images over the web.
 * syntax fetch(url,{options})
 */

//Let's fetch images of pikachu

const pokemonTextBox = document.getElementById("name");
const btn = document.getElementById("btn");
const imageTag = document.getElementById("image");

// btn.onclick = () => {
//   let name = pokemonTextBox.value.toLowerCase();
//   let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
//   fetch(url)
//     .then((response) => {
//       try {
//         if (!response.ok) {
//           throw new Error(`Fetching Unsuccessfull status:${response.status}`);
//         }
//         return response.json();
//       } catch (error) {
//         console.log(error);
//       }
//     })
//     .then((data) => console.log(data));
// };

// In this case if response object is not received.The
// execution must stop immediatly.
// Hence useing async and await template makes sense
// in this use case

btn.onclick = displayImage;

async function displayImage() {
  try {
    let name = pokemonTextBox.value.toLowerCase();
    if (name == null || name == "") {
      throw new Error("Name is null or Empty");
    }
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
      throw new Error(`Status Code:${response.status}`);
    }

    let data = await response.json();

    if (data == null) {
      throw new Error("Data is null");
    }

    let imageUrl = data.sprites.front_default;
    if (imageUrl == null) {
      throw new Error("Image Url is Null");
    }

    imageTag.src = imageUrl;

    imageTag.style.display = "block";
  } catch (error) {
    window.alert(error);
  }
}
