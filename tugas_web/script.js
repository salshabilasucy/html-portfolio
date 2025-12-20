let total = 0;
let pesanan = [];

function tambah(nama, harga) {
  total += harga;
  pesanan.push(`${nama} - Rp ${harga}`);

  const li = document.createElement("li");
  li.textContent = `${nama} - Rp ${harga}`;

  document.getElementById("listPesanan").appendChild(li);
  document.getElementById("total").textContent = total;
}

function kirimWA() {
  if (pesanan.length === 0) {
    alert("Pesanan masih kosong!");
    return;
  }

  let pesan = "Halo SARI.SEGAR 🍹%0A%0ASaya ingin pesan:%0A";

  pesanan.forEach((item, index) => {
    pesan += `${index + 1}. ${item}%0A`;
  });

  pesan += `%0ATotal: Rp ${total}%0A%0ATerima kasih 🙏`;

  const noWA = "6281234567890"; // GANTI nomor WA tujuan
  const url = `https://wa.me/${noWA}?text=${pesan}`;

  window.open(url, "_blank");
}
