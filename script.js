// DATA PRODUK
let products = [
    {name: "Bumi Manusia"},
    {name: "Negeri 5 Menara"},
    {name: "Pulang"},
    {name: "Dilan 1990"}
];

const productList = document.getElementById("product-list");

// TAMPILKAN PRODUK
function tampilProduk() {
    productList.innerHTML = "";
    products.forEach((p, index) => {
        productList.innerHTML += `
        <div class="card">
            <h3>${p.name}</h3>
            <button onclick="hapus(${index})">Hapus</button>
        </div>`;
    });
}

tampilProduk();

// HAPUS PRODUK
function hapus(index) {
    products.splice(index, 1);
    tampilProduk();
}

// VALIDASI FORM
const form = document.getElementById("formBeli");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    let nama = document.getElementById("nama");
    let email = document.getElementById("email");
    let hp = document.getElementById("hp");

    let errors = document.querySelectorAll(".error");
    errors.forEach(e => e.innerText = "");

    // NAMA
    if (nama.value === "") {
        errors[0].innerText = "Nama wajib diisi";
        valid = false;
    }

    // EMAIL
    if (!email.value.includes("@")) {
        errors[1].innerText = "Email tidak valid";
        valid = false;
    }

    // HP
    if (hp.value <= 0) {
        errors[2].innerText = "Nomor harus positif";
        valid = false;
    }

    if (valid) {
        alert("Pembelian berhasil!");
        form.reset();
    }
});