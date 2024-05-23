let menu = document.querySelector(".menu");
let Tmenu = document.querySelector(".text-menu");
let ul = document.querySelector(".ul");
let arrowt = document.querySelector(".arrow-top");

// popup menu
function arrow1() {
  menu.classList.toggle("menuu");
  arrowt.classList.toggle("arroww");
  ul.classList.toggle("ull");
}
// Popup text menu!!
// popup Board
const board = document.getElementById("board");
let Cboard = document.querySelector(".board");
board.addEventListener("mouseover", () => {
  Cboard.classList.add("muncul");
});
board.addEventListener("mouseout", () => {
  Cboard.classList.remove("muncul");
});
// popup photo
const photo = document.getElementById("photo");
let Tphoto = document.querySelector(".photo");

photo.addEventListener("mouseover", () => {
  Tphoto.classList.add("muncul");
});
photo.addEventListener("mouseout", () => {
  Tphoto.classList.remove("muncul");
});
photo.addEventListener("click", () => {
  location.href = "memory/index.html";
});
// popup spotify
const spotify = document.getElementById("spotify");
let Tspotify = document.querySelector(".spotify");

spotify.addEventListener("mouseover", () => {
  Tspotify.classList.add("muncul");
});
spotify.addEventListener("mouseout", () => {
  Tspotify.classList.remove("muncul");
});
spotify.addEventListener("click", () => {
  location.href =
    "https://open.spotify.com/playlist/1mJPdZwpo3DY9AmLxkHqce?si=ced15c99ca104a09";
});

// menu items
let txt = [
  document.querySelector(".container-txt"),
  document.querySelector(".start-footer"),
  document.querySelector(".start-header"),
];
// board
const btns = document.querySelectorAll(".btn");
const sidebar = document.querySelector(".sidebar");
const user = document.querySelectorAll(".fa-user");
const classRoom = document.querySelector(".container-classroom");
let ClsStart = document.querySelector(".class-start");
let namaF = document.querySelector(".snama");
let noF = document.querySelector(".sno");
let jaF = document.querySelector(".sjabatan");
let Pnama = document.querySelector(".p-nama");
let bgdata = document.querySelector(".bg-data");
let sideIcon = document.querySelector(".side-icon");
let biasa = document.querySelector(".pc-biasa");
let bendahara = document.querySelector(".pc-bendahara");
let sekertaris = document.querySelector(".pc-sekertaris");
let ketua = document.querySelector(".pc-ketua");
let sepuh = document.querySelector(".pc-sesepuh");
board.addEventListener("click", () => {
  var classroom = localStorage.setItem("page", "classroom");
  location.reload();
});
ClsStart.addEventListener("click", () => {
  var start = localStorage.setItem("page", "start");
  location.reload();
});
if (localStorage.getItem("page") === "classroom") {
  txt.forEach((element) => {
    element.classList.add("hide");
    document.getElementById("bg").style = "filter: brightness(80%)";
  });
  classRoom.classList.add("visible");
  user.forEach((item) => {
    item.classList.add("up");
  });
} else if (localStorage.getItem("page") === "start") {
  txt.forEach((element) => {
    element.classList.add("visible");
    document.getElementById("bg").style = "filter: brightness(100%)";
  });
  classRoom.classList.remove("visible");
}

const data = [
  {
    nama: "Bu Nisfia Yuliani",
    role: "Sesepuh Desa",
  },
  {
    nama: "Abdilah Fattan C.",
    no: 1,
    role: "Warga Biasa",
  },
  {
    nama: "Aldi Hamzah A.",
    no: 2,
    role: "Warga Biasa",
  },
  {
    nama: "Alfredo Putra C.",
    no: 3,
    role: "Warga Biasa",
  },
  {
    nama: "Alya Rosma Sari N.",
    no: 4,
    role: "Warga Biasa",
  },
  {
    nama: "Amelia Putri A.",
    no: 5,
    role: "Warga Biasa",
  },
  {
    nama: "Ananda Friski",
    no: 6,
    role: "Wakil Ketua Suku",
  },
  {
    nama: "Ananado Febian A.",
    no: 7,
    role: "Warga Biasa",
  },
  {
    nama: "Berri Alfaro Benites",
    no: 9,
    role: "Warga Biasa",
  },
  {
    nama: "Briyan Rizki A.",
    no: 10,
    role: "Warga Biasa",
  },
  {
    nama: "Chesya Syeren N.",
    no: 11,
    role: "Warga Biasa",
  },
  {
    nama: "Dea Ananda K.",
    no: 12,
    role: "Kapitalis 2",
  },
  {
    nama: "Dinda Ratna Dwi.",
    no: 13,
    role: "Warga Biasa",
  },
  {
    nama: "Farel Aditya P.",
    no: 14,
    role: "Warga Biasa",
  },
  {
    nama: "Fasterino Rafael V.",
    no: 15,
    role: "Kapitalis 1",
  },
  {
    nama: "Iffat Azka M.",
    no: 16,
    role: "Warga Biasa",
  },
  {
    nama: "Larasati Prameswari Y.",
    no: 17,
    role: "Warga Biasa",
  },
  {
    nama: "Lutfi Habibah H.",
    no: 18,
    role: "Absensi 2",
  },
  {
    nama: "Muhammad Irsyad S.",
    no: 19,
    role: "Warga Biasa",
  },
  {
    nama: "Muhammad Wahyu N.",
    no: 20,
    role: "Warga Biasa",
  },
  {
    nama: "Muhammad Noland Akbar R.",
    no: 21,
    role: "Warga Biasa",
  },
  {
    nama: "Nabila Nihayassifa",
    no: 22,
    role: "Warga Biasa",
  },
  {
    nama: "Syerly Damayanti",
    no: 23,
    role: "Warga Biasa",
  },
  {
    nama: "Shinta Devi A.",
    no: 24,
    role: "Absensi 1",
  },
  {
    nama: "Surya Januari P.",
    no: 25,
    role: "Warga Biasa",
  },
  {
    nama: "Saifullah Fajri",
    no: 26,
    role: "Warga Biasa",
  },
  {
    nama: "Wildan Putra Pratama",
    no: 27,
    role: "Warga Biasa",
  },
  {
    nama: "Yogi Putra Pratama",
    no: 28,
    role: "Ketua Suku",
  },
  {
    nama: "Zanwar Putra Prastya",
    no: 29,
    role: "Warga Biasa",
  },
  {
    nama: "Shakira Najwa Dizasalfany",
    no: 30,
    role: "Warga Biasa",
  },
];

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    sidebar.classList.toggle("side");
    namaF.innerHTML = data[index].nama;
    noF.innerHTML = data[index].no;
    jaF.innerHTML = data[index].role;
    if (noF.innerHTML === "undefined") {
      noF.innerHTML = "-";
    } else {
      noF.innerHTML = data[index].no;
    }
    if (jaF.innerHTML === "Kapitalis 1" || jaF.innerHTML === "Kapitalis 2") {
      sideIcon.style = "visibility:visible";
      biasa.classList.add("hidden");
      bendahara.classList.add("visible");
      bgdata.classList.add("bendahara");
      sekertaris.classList.remove("visible");
      ketua.classList.remove("visible");
      bgdata.classList.remove("sekertaris");
      bgdata.classList.remove("ketua");
      sepuh.classList.remove("visible");
      bgdata.classList.remove("sesepuh");
    } else if (jaF.innerHTML === "Absensi 1" || jaF.innerHTML === "Absensi 2") {
      sideIcon.style = "visibility:visible";
      biasa.classList.add("hidden");
      sekertaris.classList.add("visible");
      bgdata.classList.add("sekertaris");
      bendahara.classList.remove("visible");
      ketua.classList.remove("visible");
      bgdata.classList.remove("bendahara");
      bgdata.classList.remove("ketua");
      sepuh.classList.remove("visible");
      bgdata.classList.remove("sesepuh");
    } else if (
      jaF.innerHTML === "Ketua Suku" ||
      jaF.innerHTML === "Wakil Ketua Suku"
    ) {
      sideIcon.style = "visibility:hidden";
      biasa.classList.add("hidden");
      ketua.classList.add("visible");
      bgdata.classList.add("ketua");
      bendahara.classList.remove("visible");
      sekertaris.classList.remove("visible");
      bgdata.classList.remove("bendahara");
      bgdata.classList.remove("sekertaris");
      sepuh.classList.remove("visible");
      bgdata.classList.remove("sesepuh");
    } else if (jaF.innerHTML === "Sesepuh Desa") {
      sideIcon.style = "visibility:hidden";
      biasa.classList.add("hidden");
      sepuh.classList.add("visible");
      bgdata.classList.add("sesepuh");
      bendahara.classList.remove("visible");
      sekertaris.classList.remove("visible");
      bgdata.classList.remove("sekertaris");
      ketua.classList.remove("visible");
      bgdata.classList.remove("bendahara");
      bgdata.classList.remove("ketua");
    } else {
      sideIcon.style = "visibility:visible";
      bendahara.classList.remove("visible");
      sekertaris.classList.remove("visible");
      ketua.classList.remove("visible");
      sepuh.classList.remove("visible");
      bgdata.classList.remove("sesepuh");
      bgdata.classList.remove("bendahara");
      bgdata.classList.remove("sekertaris");
      bgdata.classList.remove("ketua");
      biasa.classList.remove("hidden");
    }
  });
  btn.addEventListener("mouseover", () => {
    Pnama.innerHTML = data[index].nama;
  });
});

function arrow() {
  sidebar.classList.remove("side");
}
function start() {
  location.reload();
}
// txt start
let i = 0;
let quotes1 = "'STAY HUNGRY, AND STAY FOOLISH'";
let quotes2 = "'DONT'LOOK BACK, YOU'RE NOT GOING THAT WAY'";
let quotes3 = "'STAY IN THE DARK'";
let quotes4 = "'NOBODY KNOWS WHAT YO DO,KEEP SWIMMING!'";
let delay = 50;

function typeText(text, callback) {
  if (i < text.length) {
    document.querySelector(".text-start").innerHTML += text.charAt(i);
    i++;
    setTimeout(() => typeText(text, callback), delay);
  } else {
    i = 0;
    setTimeout(callback, 4000);
  }
}
function deleteText(callback) {
  let txtStart = document.querySelector(".text-start");
  if (txtStart.innerHTML.length > 1) {
    txtStart.innerHTML = txtStart.innerHTML.slice(0, -1);
    setTimeout(() => deleteText(callback, delay));
  } else {
    setTimeout(callback, delay);
  }
}

function tulisan() {
  typeText(quotes1, () => {
    deleteText(() => {
      typeText(quotes2, () => {
        deleteText(() => {
          typeText(quotes3, () => {
            deleteText(() => {
              typeText(quotes4, () => {
                deleteText(() => {
                  tulisan();
                });
              });
            });
          });
        });
      });
    });
  });
}

window.onload = function () {
  tulisan();
};
