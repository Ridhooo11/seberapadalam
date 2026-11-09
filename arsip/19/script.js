// JavaScript untuk menambahkan lebih banyak salju
const numSnowflakes = 50; // Ubah jumlah salju sesuai keinginan
const container = document.querySelector('.snowflakes-container');

for (let i = 0; i < numSnowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    container.appendChild(snowflake);
    const delay = Math.random() * 5; // Untuk mengatur penundaan jatuh
    snowflake.style.animationDelay = `${delay}s`;
}

// Mendapatkan semua elemen border foto
const photoFrames = document.querySelectorAll('.photo-frame');

// Daftar file audio yang sesuai dengan masing-masing border
const audioFiles = [
    'sound1.mp3',
    'sound2.mp3',
    'sound3.mp3',
    'sound4.mp3',
    'sound5.mp3',
    'sound6.mp3'
];

// Menambahkan event listener ke setiap border foto
photoFrames.forEach((frame, index) => {
    let audioPlayed = false; // Menyimpan status apakah audio telah diputar

    frame.addEventListener('mouseover', () => {
        if (!audioPlayed) {
            playSound(audioFiles[index]);
            audioPlayed = true; // Setel status pemutaran audio menjadi true
        }
    });
});

// Fungsi untuk memutar audio berdasarkan file yang diberikan
function playSound(audioFile) {
    const newAudio = new Audio(audioFile);
    newAudio.play();
}
