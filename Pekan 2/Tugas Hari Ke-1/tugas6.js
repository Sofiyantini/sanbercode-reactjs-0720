// // soal 1

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var objectDaftarPeserta = {
    nama : "Asep",
    jeniskelamin    : "laki-laki",
    hobi            : "baca buku",
    tahunlahir      : "1992"
}

console.log(objectDaftarPeserta.nama); // Asep
console.log(objectDaftarPeserta.jeniskelamin); // laki-laki
console.log(objectDaftarPeserta.hobi); //baca buku
console.log(objectDaftarPeserta.tahunlahir); // 1992

console.log(arrayDaftarPeserta)

// // --------------------------------------------------------------
// // soal 2

// // 1.nama: strawberry
// // warna: merah
// // ada bijinya: tidak
// // harga: 9000 
// // 2.nama: jeruk
// // warna: oranye
// // ada bijinya: ada
// // harga: 8000
// // 3.nama: Semangka
// // warna: Hijau & Merah 
// // ada bijinya: ada
// // harga: 10000
// // 4.nama: Pisang
// // warna: Kuning
// // ada bijinya: tidak
// // harga: 5000

var buah = [
    {nama: "Strawberry", warna: "merah", ada_bijinya : "tidak", harga: "9000"},
    {nama: "Jeruk", warna: "oranye", ada_bijinya : "ada", harga: "8000"},
    {nama: "Semangka", warna: "hijau & merah", ada_bijinya : "ada", harga: "10000"},
    {nama: "Pisang", warna: "kuning", ada_bijinya : "tidak", harga: "5000"},
]

console.debug(buah[0])

// -----------------------------------------------------------------------------------
// soal 3

function addFilm(newFilm)
{
    dataFilm.push(newFilm);
}

var dataFilm = []

var newFilm = {
    name        : "Amelie",
    duration    : "2h_9m",
    genre       : "Romance",
    year        : "2001"
} 

console.log(addFilm(dataFilm))




