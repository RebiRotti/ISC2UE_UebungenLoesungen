const API_KEY = "59cdfcc9";

// Eine Template-Literal-Funktion, um die HTML-Ausgabe für einen Film zu generieren
const generateMovieHtml = movie => `
  <section class="col">
    <div class="card">
        <img src="<!--ToDo-->" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title"><!--ToDo--></h5>
            <div class="card-text">
                <p><!--ToDo--><br>
                <!--ToDo--></p>
            </div>
        </div>
        <div class="card-footer">
          <a class="btn btn-dark btn-sm details-link" data-imdb-id="<!--ToDo-->">weitere Details</a>
        </div>
    </div>
  </section>
  `;

// Funktion zum Anzeigen von Filmen auf der Seite
function displayMovies(movies) {
    // Verwenden Sie Array.map, um die HTML-Ausgabe zu generieren
    // ToDo
}

// Funktion zum Anzeigen der Seitennavigation
function displayPagination(page, totalPages, searchTerm) {
    document.querySelector('.pagination').innerHTML = `
    /* ToDo */
  `;
}

// Event-Listener für die Suchanfrage
document.getElementById('search-form').addEventListener('submit', event => {
    /*ToDo*/
});


// Funktion zum Abrufen der Filmliste von der API
function getMovies(searchTerm, page) {
    /* ToDo */
}

// Event-Listener für Details-Links
document.getElementById('movies').addEventListener('click', event => {
    /* ToDo */
});

function getMovieDetails(imdbID) {
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.table(data)
            const modalHtml = `
                <div class="modal fade" id="movieModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel"><!--ToDo--></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <div class="row row-cols-2 g-4">
                            <img src="<!--ToDo-->" class="img-fluid mb-3">
                            <div>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">#</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Jahr</td>
                                  <td><!--ToDo--></td>
                                </tr>
                                <tr>
                                  <td>Writer</td>
                                  <td><!--ToDo--></td>
                                </tr>
                                <tr>
                                  <td>Länge</td>
                                  <td><!--ToDo--></td>
                                </tr>
                                <tr>
                                  <td>Actors</td>
                                  <td><!--ToDo--></td>
                                </tr>
                                <tr>
                                  <td>Awards</td>
                                  <td><!--ToDo--></td>
                                </tr>
                                <tr>
                                  <td>BoxOffice</td>
                                  <td><!--ToDo--></td>
                                </tr>
                                <tr>
                                  <td>Director</td>
                                  <td><!--ToDo--></td>
                                </tr>
                                
                                  <td>Genre</td>
                                  <td><!--ToDo--></td>
                                </tr>
                                <tr>
                                  <td>Production</td>
                                  <td><!--ToDo--></td>
                                </tr>
                                <tr>
                                  <td>Rated</td>
                                  <td><!--ToDo--></td>
                                </tr>
                              </tbody>
                            </table>
                                <ul>
                                  <!--ToDo-->
                                </ul>
                            </div>
                        </div>
                        <p><!--ToDo--></p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>`;

            // Erstellen Sie ein DOM-Element aus dem Modal-HTML
            const modalElement = document.createRange().createContextualFragment(modalHtml);
            // Fügen Sie das Modal-Element zum Body hinzu
            document.body.appendChild(modalElement);
            // Holen Sie das Modal-Element
            const modal = event.target.closest('.modal');
            // Zeigen Sie das Modal an
            const modalInstance = new bootstrap.Modal(modal);
            modalInstance.show();
            // Hinzufügen eines Event-Listeners, um das Modal zu leeren, wenn es geschlossen wird
            modal.addEventListener('hidden.bs.modal', () => {
                modal.remove();
            });
        })
        .catch(error => console.error(error));
}

