function encontraPrimo(num) {
	if(num < 2) return false;
	for(var div=2; div<num; div++) {
		if(num % div == 0) return false;
}
return true;
}


console.log(encontraPrimo(7)); // true
console.log(encontraPrimo(10)); //false
console.log(encontraPrimo(13)); //true
console.log(encontraPrimo(0)); //false
console.log(encontraPrimo(1)); //false
console.log(encontraPrimo(2)); //true
console.log('-----');
console.log(encontraPrimo(327)); //false
console.log(encontraPrimo(847)); //false
console.log(encontraPrimo(1573)); //false
console.log(encontraPrimo(31)); //true