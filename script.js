// Data Jadwal
const jadwalPiket = {
    Senin: ["Langit", "Syawal", "Zahwan", "Gadis", "Shafa", "Zahra"],
    Selasa: ["Aryo", "Ghazi", "Rayyan","Riri", "Rara", "Qiara"],
    Rabu: ["Rafa", "Diaz", "Naufal", "Faraz", "Caca", "Tavisha"],
    Kamis: ["Iga", "Khrisna", "Adli", "Aila", "Niken", "Syifa"],
    Jumat: ["Fabian", "Rian", "Nara", "Gisel", "Fanya", "Al Nadhif"]
};

const jadwalMapel = {
    Senin: ["06.30-07.00 - SHALAT DHUHA","07.00-08.20 - UPACARA","08.20-09.40 - PJOK","09.40-10.00 - ISTIRAHAT", "10.00-10.40 - BK","10.40-11.20 - B.Inggris","11.20-12.00 - IPS","12.00-12.40 - SHALAT DZUHUR","12.40-14.00 - INFORMATIKA","14.00-15.20 - PENGUATAN TAHFIDZ"],
    Selasa: ["06.30-07.00 - SHALAT DHUHA","07.00 -08.20 - PAI","08.20-09.40 - MTK","09.40-10.00 - ISTIRAHAT","10.00-10.40 - B.Indonesia","10.40-12.00 - B.Inggris","12.00-12.40 - SHALAT DZUHUR","12.40-14.00 - IPA","14.00-15.20 - B.SUNDA"],
    Rabu: ["06.30-07.00 - SHALAT DHUHA","07.00-08.20 - MTK","08.20-09.40 - B.INDONESIA","09.40-10.00 - ISTIRAHAT","10.00-11.20 - IPA","11.20-12.00 - SENI MUSIC","12.00 - 12.40 - SHALAT DZUHUR","12.40-13.20 - SENI MUSIC","13.20-14.00 - PELAJARAN DSL","14.00-15.20 - IPS"], 
    Kamis:["06.30-07.00 - SHALAT DHUHA","07.00-08.20 - PRAMUKA","08.20-09.00 - SENAM/JALAN SEHAT/PERMAINAN TRADISIONAL","09.00-09.40 - MAKAN SEHAT","09.40-10.00 - ISTIRAHAT","10.00-12.00 - P5","12.00-12.40 - SHALAT DZUHUR","12.40-13.20 - P5","13.20-14.00 - KAMIS BERSIH"],
    Jumat: ["06.30-07.00 - SHOLAT DHUHA","07.00-08.20 - DSL","08.20-09.40 - B.INDONESIA","09.40-10.00 - ISTIRAHAT","10.00-11.20 - PPKN","11.20-12.40 - SHOLAT JUMAT/KEPUTRIAN"],
    Sabtu: ["06.30-09.40 - EKSKUL WAJIB(KARATE,SILAT,TAEKWONDO","09.40-10.00 - ISTIRAHAT/PULANG","10.00-12.40 - EKSKUL PILIHAN(PASKIBRA,BASKET,FUTSAL,ENGLISH CLUB,VOLLY,PANAHAN,KKR"]
};

// Fungsi untuk mendapatkan hari dalam bahasa Indonesia
function getHariIndonesia() {
    const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const tanggal = new Date();
    return hari[tanggal.getDay()];
}

// Fungsi untuk menampilkan jadwal
function tampilkanJadwal() {
    const hariIni = getHariIndonesia();

    // Jadwal Piket
    const piketHariIni = jadwalPiket[hariIni] || ["Tidak ada piket"];
    document.getElementById("piket-hari-ini").innerHTML = `
        <p><strong>Hari: ${hariIni}</strong></p>
        <ul class="list-group">
            ${piketHariIni.map((nama) => `<li class="list-group-item">${nama}</li>`).join("")}
        </ul>
    `;

    // Jadwal Mapel
    const mapelHariIni = jadwalMapel[hariIni] || ["Tidak ada pelajaran"];
    document.getElementById("mapel-hari-ini").innerHTML = `
        <p><strong>Hari: ${hariIni}</strong></p>
        <ul class="list-group">
            ${mapelHariIni.map((mapel) => `<li class="list-group-item">${mapel}</li>`).join("")}
        </ul>
    `;
}

// Jalankan fungsi saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", tampilkanJadwal);
