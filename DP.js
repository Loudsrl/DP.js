var DP = {
    productionReady : false,
    log: function (type) {
        if (this.productionReady == false) {
            this.generate(type);
        } else {
            console.log("LOG IMPORTANTISSIMO E PER NIENTE BLASFEMO");
        }
    },
    pickRandom: function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },
    generate: function (type) {
        var bestemmia;

        var santi = [
            "Dio",
            "Cristo",
            "Bambino Gesu'",
            "San Giuseppe",
            "Gesu",
            "Papa Francesco",
            "Papa Ratzinger",
            "San Gennaro",
            "San Pasquale",
            "San Pietro",
            "Clero"
        ];

        var imprecazioni_before = [
            "Porco",
            "Merdoso",
            "Pompinaro",
            "Parassita",
            "Rotto in culo"
        ];

        var imprecazioni_after = [
            "Bastardo",
            "Maiale",
            "Cane",
            "Frocio",
            "Merda",
            "Ladro",
            "Lapidato",
            "Crocifisso",
            "sciolto nell'acido",
            "sparato a brucia pelo"
        ];


        bestemmia = this.pickRandom(santi) + ' ' + this.pickRandom(imprecazioni_before) + ' ' + this.pickRandom(imprecazioni_after);
        switch (type) {
            case "l":
                console.log(bestemmia);
                break;
            case "w":
                console.warn(bestemmia);
                break;
            case "e":
                console.error(bestemmia);
                break;

            default:
                console.log(bestemmia);
                break;
        }


    }
};