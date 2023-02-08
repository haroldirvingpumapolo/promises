let arrayAnimals = ['perro','gato','loro','tigre', 'cerdo']

const myFn = ()=> new Promise 
((resolve, reject) => {
  if(arrayAnimals.filter(value => value === 'gato').length>0) {
    resolve({name: 'Toma tu gato'})
  } else {
    reject(['algo salio mal xd', 'hay problemas', 'ayuda'])
  }
}
)



myFn(arrayAnimals)
.then((v) => console.log(v))
.catch((err) => console.log(err))
.finally(() => console.log('acabo la promesa'))

/*setInterval(() => {
console.log('imprimir')
}, 3000);*/