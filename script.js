import { options } from "./search.js";
fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
.then(response => response.json())
.then((response) => {
    const movieContainer = document.querySelector('.movie-container');
    for (let i = 0; i < response.results.length; i++) {
            const html = `
            <div id="${response.results[i].id}" class="movie-card">
            <img src="https://image.tmdb.org/t/p/w220_and_h330_face${response.results[i].poster_path}" class="movie-poster">
            <div class="movie-info">
            <h4>${response.results[i].title}</h4>
                <h4>${response.results[i].vote_average.toFixed(1)}</h4>
                </div>
                </div>
                `;
                document.querySelector(".movie-container").innerHTML =
                document.querySelector(".movie-container").innerHTML + html;   // 누적
            }
    })
import {searchInput} from "./search.js"
import {modalContent, modal, movieModal} from "./modal.js"