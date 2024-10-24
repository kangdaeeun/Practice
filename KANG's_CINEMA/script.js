const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjkzM2U3MDczMWQ3NmQ0OGM3OTllZGNkMTk3ZDNhNyIsIm5iZiI6MTcyOTA2MDI1My40MjE3NTgsInN1YiI6IjY3MGUwZjdhNDJlMTM5MWM1NjY2ZjgxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vvZK3WbTncdIDdFnxzAqw0dD6VAdcsyTuQowwHYX_Y0'
    }
};
fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
.then(response => response.json())
.then((response) => {
    // console.log(response)
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
                // movieContainer.innerHTML += html; // 더 간편하게 추가
                document.querySelector(".movie-container").innerHTML =
                document.querySelector(".movie-container").innerHTML + html;   // 누적
                // console.log(response.results[i]);
            }
            
        //     // for문이 아니라 내가 선택한 영화 '하나'만 나오게  // 리팩토링할때 분리하기
        //     movieContainer.addEventListener('click', (event) => {
        //         const movieCard = event.target.closest('div');
        //         // console.log(Number(movieCard.id));
        //         const movieModal = document.getElementById('movieModal');
        //         movieModal.style.display = 'flex';
        //         const modal = document.querySelector('.modal-content');
        //         modal.scrollBy(0, modal.innerHeight);
        //         modal.scrollTop = 0;
        //         if (movieCard) {
        //             const selected = response.results.find((movie) =>
        //                 String(movie.id) === movieCard.id
        //         )
                
        //         const modalContent = `
        //         <img src="https://image.tmdb.org/t/p/w220_and_h330_face${selected.poster_path}" class="movie-poster">
        //         <div class="movie-info">
        //         <h4>${selected.title}</h4>
        //         <h4>${selected.overview}</h4>
        //         <h4>${selected.release_date}</h4>
        //         <h4>${selected.vote_average.toFixed(1)}</h4>
        //         </div>
        //         `;
        //         modal.innerHTML = modalContent;
        //         movieModal.addEventListener("click", (event) => {
        //             if (event.target === movieModal) {
        //                 movieModal.style.display = 'none';
        //             }
        //         });
        //     }
        // })
    })
import {searchInput} from "./search.js"
import {modalContent, modal, movieModal} from "./modal.js"







    //     // 검색 (필터링)
    //     const searchInput = document.querySelector('#searchInput');
    //     searchInput.addEventListener('input', (event) => {
    //         // const searchTerm = event.target.value.toLowerCase();
    //         // const searchedMovie = response.results.filter((movie) => 
    //         //     movie.title.toLowerCase().includes(searchTerm)
    //         // );
    //         // console.log(searchedMovie)
    //         const searchValue = searchInput.value
    //         fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`, options)
    //             .then(response => response.json())
    //             .then((response) => {
    //                 // console.log(response)
    //                 const movieContainer = document.querySelector('.movie-container');
    //                 movieContainer.replaceChildren()
    //                 for (let i = 0; i < response.results.length; i++) {
    //                     const html = `
    //     <div id="${response.results[i].id}" class="movie-card">
    //     <img src="https://image.tmdb.org/t/p/w220_and_h330_face${response.results[i].poster_path}" alt="" class="movie-poster">
    //     <div class="movie-info">
    //     <h4>${response.results[i].title}</h4>
    //     <h4>${response.results[i].vote_average.toFixed(1)}</h4>
    //     </div>
    // </div>
    // `;
    //                     // movieContainer.innerHTML += html; // 더 간편하게 추가
    //                     document.querySelector(".movie-container").innerHTML =
    //                         document.querySelector(".movie-container").innerHTML + html;   // 누적
    //                     // console.log(response.results[i]);
    //                 }

    //                 // for문이 아니라 내가 선택한 영화 '하나'만 나오게  // 리팩토링할때 분리하기
    //                 movieContainer.addEventListener('click', (event) => {
    //                     const movieCard = event.target.closest('div');
    //                     // console.log(Number(movieCard.id));
    //                     const movieModal = document.getElementById('movieModal');
    //                     movieModal.style.display = 'flex';
    //                     const modal = document.querySelector('.modal-content');
    //                     modal.scrollBy(0, modal.innerHeight);
    //                     modal.scrollTop = 0;
    //                     if (movieCard) {
    //                         const selected = response.results.find((movie) =>
    //                             String(movie.id) === movieCard.id
    //                         )

    //                         const modalContent = `
    //     <img src="https://image.tmdb.org/t/p/w220_and_h330_face${selected.poster_path}" class="movie-poster">
    //     <div class="movie-info">
    //         <h4>${selected.title}</h4>
    //         <h4>${selected.overview}</h4>
    //         <h4>${selected.release_date}</h4>
    //         <h4>${selected.vote_average.toFixed(1)}</h4>
    //         </div>
    //     `;
    //                         modal.innerHTML = modalContent;
    //                         movieModal.addEventListener("click", (event) => {
    //                             if (event.target === movieModal) {
    //                                 movieModal.style.display = 'none';
    //                             }
    //                         });
    //                     }
    //                 })
    //             })
    //     })
    
// .catch(err => console.error(err));

