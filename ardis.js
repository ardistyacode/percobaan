const tulisan = document.getElementById('Subjudul');
const cont = document.getElementById('cont');
const card = document.getElementById('Kotak');
const img = document.getElementById('img');
const text = document.getElementById('Pertanyaan');
const btn = document.getElementById('btn');
const iya = document.getElementById('iya');
const tidak = document.getElementById('tidak');

iya.addEventListener('click', e => {
    tulisan.innerHTML = 'Anda Berbohong!';
    text.innerHTML = 'Anda adalah seorang Teknisi'
    card.style.backgroundColor = "#E12E2E";
    btn.style.display = "none"
    img.src = "image 3.png"
});

tidak.addEventListener('click', e => {
    tulisan.innerHTML = 'Anda Benar!';
    text.innerHTML = 'Anda adalah seorang Mahasiswa'
    card.style.backgroundColor = "#6FD240";
    btn.style.display = "none"
    img.src = "image 2.png"
});