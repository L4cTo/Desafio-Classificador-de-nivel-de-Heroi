function nivelDeHeroi(XP, nome) {

    let nivel;
    do {
        if (XP <= 0) {
            XP ++;
            nivel = "iniciante";
        }
        else if (XP <= 1000) {
            nivel = "Ferro";
        }
        else if (XP > 1000 && XP <= 2000) {
            nivel = "Bronze";
        }
        else if (XP > 2000 && XP <= 5000) {
            nivel = "Prata";
        }
        else if (XP > 5000 && XP <= 7000) {
            nivel = "Ouro";
        }
        else if (XP > 7000 && XP <= 8000) {
            nivel = "Platina";
        }
        else if (XP > 8000 && XP <= 9000) {
            nivel = "Ascendente";
        }
        else if (XP > 9000 && XP <= 10000) {
            nivel = "Imortal";
        }
        else {
            nivel = "Radiante";
        }
    } while (XP < 0);

    console.log(`\nO Heroi de nome ${nome} está no nivel de ${nivel}!!\n`);
}

nivelDeHeroi(-1,"Lucas");