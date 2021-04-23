//Creare un oggetto che rappresenti un tiangolo rettangolo con le proprietà base = 50 e altezza = 20
//calcolare perimetro e area

var triangolo_rettangolo = {
    "base1": 50,
    altezza: 20,
    ipotenusa: 0,
    area: 0,
    perimetro: 0
}

//teorema di pitagora: ipotenusa è uguale alla radice quadrata della somma dei due cateti elevati alla seconda

triangolo_rettangolo.ipotenusa = parseInt(Math.sqrt((Math.pow(50, 2) + Math.pow(20, 2))));

triangolo_rettangolo.perimetro = triangolo_rettangolo.base1 + triangolo_rettangolo.altezza + triangolo_rettangolo.ipotenusa

triangolo_rettangolo.area = (triangolo_rettangolo.base1 * triangolo_rettangolo.altezza) / 2

console.log(triangolo_rettangolo)