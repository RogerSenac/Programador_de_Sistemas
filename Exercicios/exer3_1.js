function avaliarMedia (media) {
    if (media >= 7.0) {
        return "Aprovado"
     }
        return "Reprovado";
}

console.log (avaliarMedia(10));
console.log (avaliarMedia(7.0));
console.log (avaliarMedia(6.95));
console.log (avaliarMedia(8.8));
console.log (avaliarMedia(0));
console.log (avaliarMedia(2.725));