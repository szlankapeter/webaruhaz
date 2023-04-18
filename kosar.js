import { JATEKLISTA, KEPLISTA } from "./adatok.js";
const main = $("main");
$(function () {
    const txt = feltolt();
    main.html(txt);
  });



function feltolt() {
    let txt = "";
    txt += "<header><h1>Admin részleg</h1></header>";
    txt += `<nav>
              <div class="nav_container">
                  <ul>
                  <li><a href = "index.html" class = "user">USER</a></li>
                    <li><a href = "form.html" class = "admin">ADMIN</a></li>
                    <li><a href = "kosar.html" class = "kosar">KOSÁR</a></li>
                  </ul>
              </div>
          </nav>`;
    console.log(txt)
    return txt;
  }