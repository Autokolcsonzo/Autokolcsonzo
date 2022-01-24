class Felhasznalo {
  constructor(elem, adat) {
    this.adat = adat;
    this.elem = elem;
    this.jogkor = this.elem.children("td .jogkor");
    this.felhasznalonev = this.elem.children("td .felhnev");
    this.e_mail = this.elem.children("td .email");
    this.reg_datum = this.elem.children("td .regDatum");
    /*         this.Gomb = this.elem.children(".kivalaszt");
        this.Gomb = this.elem.children(".kivalaszt");
        this.Gomb = this.elem.children(".kivalaszt"); */

    this.setAdat(adat);

    /*     this.Gomb.on("click", () => {
            this.kattintasTrigger();
        }); */
  }
  setAdat(adat) {
    this.jogkor.text(adat.jogkor);
    this.felhasznalonev.text(adat.felhasznalonev);
    this.e_mail.text(adat.e_mail);
    this.reg_datum.text(adat.reg_datum);
    /*         this.Gomb.text("Kiválaszt");
        this.elem.css("backgroundColor", adat.szin); */
  }
  /*     kattintasTrigger() {
        let esemeny = new CustomEvent("szereploKattintas", {
            detail: this.adat,
        });
        window.dispatchEvent(esemeny);
    } */
}
