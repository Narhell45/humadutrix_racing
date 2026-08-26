// let angka = 17;

// if (angka % 2 === 0){
//     console.log("Genap");
// } else {
//     console.log("Ganjil");
// }

function maskEmail (email) {
    const adEmail = email.indexOf('@');
    let UsnChar = email.slice(1, adEmail - 1);
    let sensor = "*".repeat(UsnChar.length);
    let SensorEmail = email.replace(UsnChar, sensor);

    return SensorEmail;
}

function amaskEmail(email) {
  const adEmail = email.indexOf('@');
  let hurufPertama = email[0];
  let sensor = "*".repeat(adEmail - 2);
  let sisaEmail = email.slice(adEmail - 1);

  return hurufPertama + sensor + sisaEmail;
}

// User Story 3 & 4: Deklarasikan variabel email di luar fungsi lalu log hasilnya
console.log("Kode 1 (Replace):", maskEmail("banana.nan@example.com"));
console.log("Kode 2 (Tempel) :", amaskEmail("banana.nan@example.com"));

console.log("-----------------------------------------");

// TES 2: Huruf kembar
console.log("Kode 1 (Replace):", maskEmail("banana.nan@example.com"));
console.log("Kode 2 (Tempel) :", amaskEmail("banana.nan@example.com"));