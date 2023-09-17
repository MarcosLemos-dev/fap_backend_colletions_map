const participante1 = new Map();
const participante2 = new Map();
const participante3 = new Map();
const participante4 = new Map();
const participante5 = new Map();
 

participante1.set("Nome", "João");
participante1.set('pontuacao', 50);
 

participante2.set("Nome", "Pedro");
participante2.set('pontuacao', 120);
 

participante3.set("Nome", "Luiza");
participante3.set('pontuacao', 70);
 

participante4.set("Nome", "Marcela");
participante4.set('pontuacao', 10);
 

participante5.set("Nome", "Yuri");
participante5.set('pontuacao', 34);



 
console.log('relação dos participantes da competição');
console.log(participante1); 
console.log(participante2); 
console.log(participante3); 
console.log(participante4); 
console.log(participante5); 



// Saída: 2
//console.log(frutas.has("laranja")); // Saída: true

//frutas.delete("banana");
//console.log(frutas.has("banana")); // Saída: false