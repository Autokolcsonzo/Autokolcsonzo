$(function () {
  const myAjax = new MyAjax();
  const felhasznalok = [];
  //const szuloElem = $(".termekek");
    let apiVegpont = "http://localhost:3000/felhasznalo";
   
    
  myAjax.getAdat(apiVegpont, felhasznalok, TermekValasztas);

    function TermekValasztas() {
    // van egy sablonelemünk
    const szuloElem = $(".felhasznalokKiiratasa");
    const sablonElem = $("felhasznalok");
    szuloElem.empty();
    szuloElem.show();
    felhasznalok.forEach(function (elem) {
      const ujElem = sablonElem.clone().appendTo(szuloElem);
      const ujTermek = new Felhasznalo(ujElem, elem);
    });

    //sablonElem.remove();
    sablonElem.hide();
  }
});