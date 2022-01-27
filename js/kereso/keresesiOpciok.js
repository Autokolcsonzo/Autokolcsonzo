$(function () {
  const myAjax = new MyAjax();
  let opciok = [];
  let apiVegpont = "http://localhost:3000/keresoParameter";

  myAjax.getAdat(apiVegpont, opciok, opcioFeltoltes);

  $("#marka").change(function () {
    let valasztottMarka = $("#marka").val();
    if (valasztottMarka == "--Márka--") {
      $("#marka option").remove();
      $("#modell option").remove();
      opcioFeltoltes();
    } else {
      $("#modell").empty();
      markaModellKapcsolat(valasztottMarka);
    }
  });

  function markaModellKapcsolat(valasztottMarka) {
    opciok.forEach(function (obj) {
      for (let marka in obj.marka) {
        if (valasztottMarka == marka && valasztottMarka != "--Márka--") {
          $("#modell").empty();
          for (let index = 0; index < obj.marka[marka].length; index++) {
            console.log("modell : " + obj.marka[marka][index]);
            let option = `<option value='${obj.marka[marka][index]}'>${obj.marka[marka][index]}</option>`;
            $("#modell").append(option);
          }
        }
      }
    });
  }

  function opcioFeltoltes() {
    opciok.forEach(function (obj) {
      for (let index = 0; index < obj.helyszin.length; index++) {
        let option = `<option value='${obj.helyszin[index]}'>${obj.helyszin[index]}</option>`;
        $("#helyszinek").append(option);
      }
      if (obj.marka) {
        for (let marka in obj.marka) {
          let option = `<option value='${marka}'>${marka}</option>`;
          $("#marka").append(option);
        }
        for (let modell in obj.marka) {
          for (let index = 0; index < obj.marka[modell].length; index++) {
            let option = `<option value='${obj.marka[modell][index]}'>${obj.marka[modell][index]}</option>`;
            $("#modell").append(option);
          }
        }
      }

      for (let index = 0; index < obj.kivitel.length; index++) {
        let option = `<option value='${obj.kivitel[index]}'>${obj.kivitel[index]}</option>`;
        $("#kivitel").append(option);
      }
      for (let index = 0; index < obj.uzemanyag.length; index++) {
        let option = `<option value='${obj.uzemanyag[index]}'>${obj.uzemanyag[index]}</option>`;
        $("#uzemanyag").append(option);
      }
      for (let index = 0; index < obj.valto.length; index++) {
        let option = `<option value='${obj.valto[index]}'>${obj.valto[index]}</option>`;
        $("#valto").append(option);
      }
    });
  }
});
