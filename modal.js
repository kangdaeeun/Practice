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
            // for문이 아니라 내가 선택한 영화 '하나'만 나오게  // 리팩토링할때 분리하기
            movieContainer.addEventListener('click', (event) => {
                const movieCard = event.target.closest('div');
                // console.log(Number(movieCard.id));
                const movieModal = document.getElementById('movieModal');
                movieModal.style.display = 'flex';
                const modal = document.querySelector('.modal-content');
                modal.scrollBy(0, modal.innerHeight);
                modal.scrollTop = 0;
                if (movieCard) {
                const selected = response.results.find((movie) =>
                    String(movie.id) === movieCard.id
            )
            const modalContent = `
        <img src="https://image.tmdb.org/t/p/w220_and_h330_face${selected.poster_path}" class="movie-poster">
        <div class="movie-info">
            <h4>${selected.title}</h4>
            <h4>${selected.overview}</h4>
            <h4>${selected.release_date}</h4>
            <h4>${selected.vote_average.toFixed(1)}</h4>
            </div>
        `;
        modal.innerHTML = modalContent;
                movieModal.addEventListener("click", (event) => {
                    if (event.target === movieModal) {
                        movieModal.style.display = 'none';
                    }
                });
            }
        })
    });
    export const movieModal = document.getElementById('movieModal');
    export const selected = response.results.find((movie) =>
        String(movie.id) === movieCard.id
    )
    export const modalContent = `
    <img src="https://image.tmdb.org/t/p/w220_and_h330_face${selected.poster_path}" class="movie-poster">
    <div class="movie-info">
        <h4>${selected.title}</h4>
        <h4>${selected.overview}</h4>
        <h4>${selected.release_date}</h4>
        <h4>${selected.vote_average.toFixed(1)}</h4>
        </div>
    `;
    export const modal = document.querySelector('.modal-content');
