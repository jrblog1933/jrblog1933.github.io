   document.addEventListener('DOMContentLoaded', () => {
    // --- DATOS DE LAS CANCIONES ---
    //
    const songs = [
        {
            title: "Mi Pueblo Paraguachí",
            artist: "José Marcano",
            src: "/recursos/mi paraguachi.mp3", // Ejemplo: Si recursos está al mismo nivel que index.html
            cover: "/recursos/img-f.jpg"
        },
        {
            title: "El Encapotado",
            artist: "José Marcano",
            src: "/recursos/Encapotado.mp3",
            cover: "/recursos/img-f.jpg"
        },
        // --- Añade más canciones aquí si lo necesitas ---
        // {
        //     title: "Nombre Canción 3",
        //     artist: "Artista 3",
        //     src: "/ruta/a/cancion3.mp3",
        //     cover: "/ruta/a/imagen3.jpg"
        // }
    ];

    // --- REFERENCIAS A ELEMENTOS DEL DOM ---
    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = document.getElementById('play-pause-button');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const playerCover = document.getElementById('player-cover');
    const playerTitle = document.getElementById('player-title');
    const playerArtist = document.getElementById('player-artist');
    const playlistSongs = document.getElementById('playlist-songs');
    const musicPlayerContainer = document.querySelector('.music-player'); // Contenedor principal para clase 'is-playing'

    // Referencias para los elementos de progreso
    const progressSlider = document.getElementById('progress-slider');
    const currentTimeDisplay = document.getElementById('current-time');
    const totalDurationDisplay = document.getElementById('total-duration');

    // --- ESTADO DEL REPRODUCTOR ---
    let currentSongIndex = 0;
    let isPlaying = false;

    // --- FUNCIONES AUXILIARES ---

    // Formatea segundos a un string MM:SS
    function formatTime(seconds) {
        // Maneja casos donde seconds no es un número válido (NaN, Infinity)
        if (isNaN(seconds) || !isFinite(seconds)) {
            return '00:00';
        }
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        // padStart asegura que siempre haya dos dígitos (ej: 01:05)
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // --- FUNCIONES PRINCIPALES DEL REPRODUCTOR ---

    // Carga una canción específica en el reproductor y actualiza la interfaz
    function loadSong(songIndex) {
        // Validación básica del índice
        if (songIndex < 0 || songIndex >= songs.length) {
            console.error("Índice de canción inválido:", songIndex);
            return; // No hacer nada si el índice es incorrecto
        }

        const song = songs[songIndex]; // Obtiene los datos de la canción
        audioPlayer.src = song.src;    // Establece la fuente del audio
        playerCover.src = song.cover;  // Establece la imagen de portada
        playerTitle.textContent = song.title; // Actualiza el título
        playerArtist.textContent = song.artist; // Actualiza el artista
        currentSongIndex = songIndex;  // Actualiza el índice actual

        // Resetea el slider y los tiempos al cargar una nueva canción
        progressSlider.value = 0;           // Pone el slider al inicio
        progressSlider.max = 100;          // Valor temporal hasta que cargue metadata
        currentTimeDisplay.textContent = '00:00'; // Resetea tiempo actual
        totalDurationDisplay.textContent = '00:00'; // Resetea duración total

        // Marca la canción como activa en la lista de reproducción
        updateActiveClass();

        // Asegura que el ícono sea 'play' al cargar, a menos que estuviera reproduciendo
        // (El manejo de si debe auto-reproducirse se hace en prev/next/click)
         if (!isPlaying) {
           musicPlayerContainer.classList.remove('is-playing');
         }
    }

    // Resalta la canción que está actualmente cargada/reproduciendo en la playlist
    function updateActiveClass() {
        const items = playlistSongs.querySelectorAll('.playlist-item');
        items.forEach((item, index) => {
            // Añade la clase 'active-song' si el índice coincide, sino la quita
            if (index === currentSongIndex) {
                item.classList.add('active-song');
            } else {
                item.classList.remove('active-song');
            }
        });
    }

    // Inicia o reanuda la reproducción de la canción actual
    function playSong() {
        // Intenta reproducir y maneja el resultado (Promise)
        audioPlayer.play()
            .then(() => {
                isPlaying = true; // Marca como reproduciendo
                musicPlayerContainer.classList.add('is-playing'); // Cambia el icono a pausa
            })
            .catch(error => {
                // Si falla (ej: interacción del usuario requerida), revierte el estado
                console.error("Error al intentar reproducir:", error);
                isPlaying = false;
                musicPlayerContainer.classList.remove('is-playing'); // Asegura icono play
            });
    }

    // Pausa la reproducción de la canción actual
    function pauseSong() {
        audioPlayer.pause(); // Pausa el audio
        isPlaying = false;   // Marca como no reproduciendo
        musicPlayerContainer.classList.remove('is-playing'); // Cambia el icono a play
    }

    // Alterna entre reproducir y pausar
    function togglePlayPause() {
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    }

    // Carga y reproduce la canción anterior en la lista (circular)
    function prevSong() {
        // Calcula el índice anterior, asegurando que sea circular
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex); // Carga la nueva canción
        playSong(); // Intenta reproducir la canción cargada
    }

    // Carga y reproduce la canción siguiente en la lista (circular)
    function nextSong() {
        // Calcula el índice siguiente, asegurando que sea circular
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex); // Carga la nueva canción
        playSong(); // Intenta reproducir la canción cargada
    }

    // --- GENERACIÓN DINÁMICA DE LA PLAYLIST ---

    // Crea los elementos HTML para cada canción en la lista de reproducción
    function populatePlaylist() {
        // Limpia la lista actual por si acaso
        playlistSongs.innerHTML = '';

        songs.forEach((song, index) => {
            const li = document.createElement('li'); // Crea un elemento <li>
            li.classList.add('playlist-item'); // Añade la clase CSS
            li.dataset.index = index; // Almacena el índice en un atributo data-*

            // Define el contenido HTML del elemento de la lista
            li.innerHTML = `
                <img src="${song.cover}" alt="${song.title} cover">
                <div class="song-details">
                    <span class="song-title">${song.title}</span>
                    <span class="song-artist">${song.artist}</span>
                </div>
                <i class="fas fa-music audio-icon"></i>
            `;

            // Añade un event listener a cada item para que al hacer click,
            // cargue y reproduzca esa canción.
            li.addEventListener('click', () => {
                loadSong(index); // Carga la canción del índice clicado
                playSong();      // Intenta reproducirla
            });

            playlistSongs.appendChild(li); // Añade el <li> a la <ul>
        });
    }

    // --- INICIALIZACIÓN DEL REPRODUCTOR ---

    populatePlaylist(); // Crea los elementos de la lista al cargar la página
    loadSong(currentSongIndex); // Carga la primera canción (índice 0) por defecto


    // --- EVENT LISTENERS ---

    // Botones de control
    playPauseButton.addEventListener('click', togglePlayPause);
    prevButton.addEventListener('click', prevSong);
    nextButton.addEventListener('click', nextSong);

    // Eventos del elemento <audio>
    // Se dispara cuando el tiempo de reproducción actual cambia
    audioPlayer.addEventListener('timeupdate', () => {
        // Solo actualiza si la duración es un número válido
        if (!isNaN(audioPlayer.duration)) {
            // Actualiza el valor del slider para que coincida con el tiempo actual
            // Usamos currentTime directamente ya que el max del slider será la duración
            progressSlider.value = audioPlayer.currentTime;
            // Actualiza el texto del tiempo actual formateado
            currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
        }
    });

    // Se dispara cuando los metadatos (como la duración) del audio se han cargado
    audioPlayer.addEventListener('loadedmetadata', () => {
        // Solo actualiza si la duración es un número válido
        if (!isNaN(audioPlayer.duration)) {
            // Establece el valor máximo del slider a la duración total de la canción
            progressSlider.max = audioPlayer.duration;
            // Actualiza el texto de la duración total formateado
            totalDurationDisplay.textContent = formatTime(audioPlayer.duration);
        } else {
            // Si la duración no es válida, muestra 00:00
            totalDurationDisplay.textContent = '00:00';
        }
    });

    // Se dispara cuando la canción actual termina de reproducirse
    audioPlayer.addEventListener('ended', () => {
        nextSong(); // Llama a la función para pasar a la siguiente canción
    });

    // Se dispara si ocurre un error al cargar o reproducir el audio
    audioPlayer.addEventListener('error', (e) => {
        console.error("Error en el elemento de audio:", e);
        playerTitle.textContent = "Error al cargar";
        playerArtist.textContent = "Verifica la ruta del archivo";
        // Resetea el estado visual y de reproducción
        progressSlider.value = 0;
        currentTimeDisplay.textContent = '00:00';
        totalDurationDisplay.textContent = '00:00';
        musicPlayerContainer.classList.remove('is-playing');
        isPlaying = false;
        // Podrías intentar cargar la siguiente o mostrar un mensaje más claro
    });

    // Evento del slider de progreso
    // Se dispara cuando el usuario interactúa con el slider (arrastra)
    progressSlider.addEventListener('input', () => {
        // Cambia la posición actual de reproducción del audio al valor del slider
        audioPlayer.currentTime = progressSlider.value;
        // Actualiza el display del tiempo actual mientras se arrastra para feedback inmediato
        currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
    });

}); // Fin del listener DOMContentLoaded