// Membuat elemen body dan html secara dinamis
const html = document.createElement('html');
const body = document.createElement('body');

// Membuat elemen header dan menambahkannya ke body
const heading = document.createElement('h1');
heading.textContent = 'Selamat datang di Lixia';
body.appendChild(heading);

// Menambahkan elemen gambar
const img = document.createElement('img');
img.src = 'delta.png'; // Path gambar yang benar
body.appendChild(img);

// Menambahkan elemen body ke dalam html
html.appendChild(body);

// Menambahkan seluruh struktur HTML ke dalam document
document.documentElement = html;
document.body = body;  // Menetapkan body ke halaman
