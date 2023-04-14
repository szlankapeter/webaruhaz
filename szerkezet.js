import { KUTYALISTA } from "./adatok.js";
const main = $("main");
$(function () {
  const txt = feltolt();
  main.html(txt);
  popUp();
});

function feltolt() {
  let txt = "";
  txt += "<header><h1>Adatok Listázása</h1></header>";
  txt += `<nav class="navbar navbar-default">
            <div class="container-fluid">
                <p class="navbar-brand">Kutya adatainak megtekintése</p>
                <p class="navbar-brand">Admin felület</p>
            </div>
        </nav>`;

  txt += `<article class="row">`;
  for (let i = 0; i < KUTYALISTA.length; i++) {
    txt += `<div class="col-sm-3">`;
    txt += `<h2>${KUTYALISTA[i].nev}</h2>`;
    txt += `<p>kor: ${KUTYALISTA[i].kor}</p>`;
    txt += `<p>fajta: ${KUTYALISTA[i].fajta}</p>`;
    txt += "<button>Mutat</button>";
    txt += `</div>`;
  }
  txt += "</article>";
  
  return txt;
}

function ablakSzerk() {
  let txt = "";
  txt += `<div class="ablak_container">`;
  txt += `<a class="bezar">X</a>`;
  txt += `<h2>${KUTYALISTA[0].nev}</h2>`;
  return txt;
}

function popUp() {
  const alap = feltolt();
  const txt = ablakSzerk();
  $("button").on("click", function(){
    main.append(txt);
  })

  $(document).on('click', ".bezar", function(){
    
  })
  
}
