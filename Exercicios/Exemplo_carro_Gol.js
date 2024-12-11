var gol = {
        cor: "prata",
        velocidade: 0,
        acelerar: function() {
            this.velocidade += 5;

            console.log("Gol prata a" + this.velocidade + "Km por hora!")
        },
    frear: function() {
            this.velocidade = Math.max(this.velocidade - 13, 0);

            console.log("Reduziu velocidade para" + this.velocidade + "Km/h");
    }
};
console.log("\tGol prata")

while(gol.velocidade < 80) gol.acelerar();
while(gol.velocidade > 60) gol.frear();
while(gol.velocidade < 80) gol.acelerar();
while(gol.velocidade >  0) gol.frear();