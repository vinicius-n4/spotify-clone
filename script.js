const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylists = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result));
}

function displayResults(results) {
    resultPlaylists.classList.add("hidden");
    const artistImage = document.getElementById("artist-img");
    const artistName = document.getElementById("artist-name");
  
    results.forEach((element) => {
      artistImage.src = element.urlImg;
      artistName.innerText = element.name;
    });
    resultArtist.classList.remove("hidden");
}

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylists.classList.remove('hidden');
        resultArtist.classList.add('hidden');
        return;
    }
    requestApi(searchTerm);
})
