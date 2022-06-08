let IngredientesPizza = ['Harina','levadura','sal','aceite','azucar','agua','queso','tomate','aceituna','jamon']

let IngredientesPares = IngredientesPizza.filter(IngredientesPizza => IngredientesPizza.length %2===0)
console.log("Los ingredientes Pares son;")
console.log(IngredientesPares)

let IngredientesImpares = IngredientesPizza.filter(IngredientesPizza => IngredientesPizza.length %2 !=0)
console.log("Los ingredientes Impares son:")
console.log(IngredientesImpares)
    