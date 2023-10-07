function ifElse() {
    var nama = document.getElementById("nama").value;
    var akun = document.getElementById("account").value;
    var password = document.getElementById("password").value;
    let pesan;

    if (akun == "admin") {
        if (password == "gilang123") {
            pesan = "Selamat Datang Tuan " + nama;
        } else {
            pesan = "Maaf Password Salah!";
        }
    } else {
        pesan = "Akun Tidak Terdaftar!";
    }
    document.getElementById("pesan").innerHTML = pesan;
}

function switchCase() {
    var nama = document.getElementById("nama").value;
    var nilai = document.getElementById("nilai").value;
    let hasil;

    switch (true) {
        case nilai >= 90:
            hasil = "A";
            break;
        case nilai >= 80:
            hasil = "B";
            break;
        case nilai >= 70:
            hasil = "C";
            break;
        case nilai < 70:
            hasil = "D";
            break;
    }
    if (nilai === "") {
        document.getElementById("pesan").innerHTML = "Silahkan Input Nilai Terlebih Dahulu!";
    } if (nilai > 100 || nilai < 0) {
        document.getElementById("pesan").innerHTML = "Input Nilai dari 0-100!"
    } else {
        document.getElementById("pesan").innerHTML = `Nama Lengkap: ${nama}<br/>Nilai Anda adalah ${nilai} dengan predikat ${hasil}`;
    }
}

function forStatement() {
    for (let no = -10; no <= 10; no++) {
        document.write(`<h5>Urutan ke-${no}</h5>`)
    }
}

function whileLoop() {
    let no = 0;
        let kelipatan = 2;
        while (no <=20) {
            document.write(`Cetak Angka ${no}<br/>`);
            kelipatan++;
            no = no + kelipatan;
        }
}