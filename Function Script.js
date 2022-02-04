function onCreateCard(imageName, name, gender) {
  /* INPUT SYSTEM 
  imageName => nama foto *(beserta nama jenis fotonya (contoh: Wawa.jpeg, Reyhan.png)
  name => Nama siswa
  gender => ya gender, lk => laki laki, pr => perempuan
  */
  // JIKA MENGUBAH NAMA FOLDER UNTUK FOTO, GANTI JUGA NAMA FOLDER UNTUK DIBAWAH
  imageName = "img/card/" + imageName;
  if (gender === "lk") {
    document.getElementById("mulai-foto").innerHTML +=
      `
    <div class="col-lg-3 mb-3" data-aos="flip-left">
      <div class="card border-info">
        <img src=
    ` +
      imageName +
      `  
        class="mx-auto card-img-top" alt=
      ` +
      name +
      `
        />
        <div class="card-body">
          <h5 class="card-title text-center">
          ` +
      name +
      `
          <img src="img/lk.jpeg" width= 25 class='rounded'/></h5>
          <p class="card-text"></p>
        </div>
      </div>
    </div>
    `;
  } // jika input gender tidak ada, otomatis akan membuat logo gender perempuan
  else {
    document.getElementById("mulai-foto").innerHTML +=
      `
  <div class="col-lg-3 mb-3" data-aos="flip-left">
    <div class="card border-danger">
      <img src=
  ` +
      imageName +
      `  
      class="mx-auto card-img-top" alt=
    ` +
      name +
      `
      />
      <div class="card-body">
        <h5 class="card-title text-center">
        ` +
      name +
      `
        <img src="img/pr.jpeg" width= 25 class='rounded'/></h5>
        <p class="card-text"></p>
      </div>
    </div>
  </div>
  `;
  }
}

/* CARA MENGGUNAKAN
1. Semua input dibuka dan ditutup dengan tanda kutip 2 / 1 *(penggunaan dalam html) *(kecuali dalam beberapa hal, keterangan ada dalam setiap fungsi)
  Contoh: onCreateCard('Salwa', "Salwa", 'pr')
          onAddSlide('Pembelajaran IPA.jpeg', 'Pembelajaran IPA', "ipa nih bos hai hai", "2")
2. Jangan mengedit sciprt apapun yang ada diatas kecuali anda tau apa yang anda buat
3. Dipersilahkan menambahkan input baru asalkan anda mengerti apa yang anda buat
4. Kesederhanaan program akan diusahakan
*/

// Make by Billy
// Modified by "taruh nama lu disini"
