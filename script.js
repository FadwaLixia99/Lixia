
// Membuat elemen HTML dan menambahkannya ke dalam body

// Membuat container
const container = document.createElement('div');
container.className = 'container';

// Membuat gambar
const img = document.createElement('img');
img.src = 'img/delta.png'; // Gantilah dengan URL gambar Anda
img.alt = 'Delta Image';
container.appendChild(img);

// Membuat kutipan
const quote = document.createElement('p');
quote.className = 'quote';
quote.textContent = '"Sholatlah kamu sebelum kamu di Sholatkan"';
container.appendChild(quote);

// Membuat nama penulis
const author = document.createElement('p');
author.className = 'author';
author.textContent = '--- Lixia ---';
container.appendChild(author);

// Menambahkan container ke body
document.body.appendChild(container);

// Menambahkan CSS secara dinamis
const style = document.createElement('style');
style.textContent = `
    /* Mengatur tampilan dasar */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        background-color: #224747;
        color: #f5f5f5;
    }

    /* Mengatur tata letak utama */
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 20px;
        text-align: center;
    }

    /* Gaya gambar */
    img {
        width: 300px;
        max-width: 100%;
        height: auto;
        display: block;
        border: solid #333 5px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
        margin-bottom: 20px;
    }

    /* Gaya teks kutipan */
    .quote {
        font-size: 1.5rem;
        font-style: italic;
        margin-bottom: 10px;
        color: #e0ffff;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }

    /* Gaya teks penulis */
    .author {
        font-size: 1.2rem;
        font-weight: bold;
        color: #ffdab9;
        text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    }

    /* Responsif untuk layar kecil */
    @media (max-width: 600px) {
        .quote {
            font-size: 1.2rem;
        }

        .author {
            font-size: 1rem;
        }

        img {
            width: 250px;
        }
    }
`;

// Menambahkan CSS ke dalam head
document.head.appendChild(style);
