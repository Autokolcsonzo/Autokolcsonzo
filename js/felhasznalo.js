class Felhasznalo {
    constructor(elem, adat, i) {
        this.adat = adat;
        this.adat.i = i;
        this.elem = elem;
        this.jogkor = this.elem.children(".jogkor p");
        this.felhasznalonev = this.elem.children(".felhnev p");
        this.e_mail = this.elem.children(".email p");
        this.reg_datum = this.elem.children(".regDatum p");
/*         this.Gomb = this.elem.children(".kivalaszt");
        this.Gomb = this.elem.children(".kivalaszt");
        this.Gomb = this.elem.children(".kivalaszt"); */

        this.setAdat(adat);

    /*     this.Gomb.on("click", () => {
            this.kattintasTrigger();
        }); */
    }
    setAdat(adat) {
        this.jogkor.text(adat.berlo.jogkor);
        this.felhasznalonev.text(adat.berlo.felhasznalonev);
        this.e_mail.text(adat.berlo.e_mail);
        this.reg_datum.text(adat.berlo.reg_datum);
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