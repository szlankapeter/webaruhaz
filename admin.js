import { JATEKLISTA, KEPLISTA, VIDEOLISTA } from "./adatok.js";
const main = $("main");

$(function () {
  const txt = feltolt();
  main.html(txt);
  passwordPopUp();
});

function feltolt() {
  let txt = "";
  txt += "<header><h1>Adatok Listázása</h1></header>";
  txt += `<nav>
            <div class="nav_container">
                <ul>
                <li><a href = "index.html" class = "user">USER</a></li>
                  <li><a href = "admin.html" class = "admin">ADMIN</a></li>
                  <li><a href = "kosar.html" class = "kosar">KOSÁR</a></li>
                </ul>
            </div>
        </nav>`;
  return txt;
}
