const grid = document.querySelector('.grid');
const fragment = document.createDocumentFragment();

const getDog = async (breed) => {
  try {
    const queryGetDog = await fetch("https://dog.ceo/api/breed/" + breed + "/images");
    const jsonDog = await queryGetDog.json();

    if (jsonDog.status === "error") {
      alert("Error: No se encontró la raza de perro especificada");
      return;
    }

    console.log(jsonDog);

    jsonDog.message.forEach((dog) => {
      const item = document.createElement('div');
      item.className = 'item';

      const img = document.createElement('img');
      img.src = dog;

      img.addEventListener('load', () => {
        item.classList.add('loaded');
      });

      item.appendChild(img);
      fragment.appendChild(item);
    });

    grid.appendChild(fragment);
  } catch (error) {
    console.error("Error:", error);
  }
};

const searcher = document.querySelector('#searcher');
const btnSearch = document.querySelector('#search');

searcher.addEventListener('search', () => {
  searcher.value !== '' ? getDog(searcher.value) : grid.innerHTML = '';
});

btnSearch.addEventListener('click', () => {
  searcher.value !== '' ? getDog(searcher.value) : grid.innerHTML = '';
});
