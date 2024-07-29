import { carBoxs } from "./components/cars.js"
import { reload } from "./libs/utils.js"

let showMore1 = document.querySelector('#all1')
let showMore2 = document.querySelector('#all2')
let showMore3 = document.querySelector('#all3')



fetch("http://localhost:3001/cars")
    .then(res => res.json())
    .then(data => {
        let currentYear = new Date().getFullYear()
        let categorizedData = {
            five_year: [],
            ten_year: [],
            others: []
        }

        data.forEach(car => {
            let carAge = currentYear - car.year
            if (carAge <= 5) {
                categorizedData.five_year.push(car)
            } else if (carAge <= 10) {
                categorizedData.ten_year.push(car)
            } else {
                categorizedData.others.push(car)
            }
        });

        reload(categorizedData.five_year.slice(0, 4), 'five_year', carBoxs)
        reload(categorizedData.ten_year.slice(0, 4), 'ten_year', carBoxs)
        reload(categorizedData.others.slice(0, 4), 'others', carBoxs)

        showMore1.onclick = () => {
            let fiveYear = document.getElementById('five_year')
            if (showMore1.textContent === 'Показать еще 12 автомобилей') {
                fiveYear.innerHTML = ''
                reload(categorizedData.five_year, 'five_year', carBoxs)
                showMore1.textContent = 'Показать меньше'
            } else if (showMore1.textContent === 'Показать меньше') {
                fiveYear.innerHTML = ''
                reload(categorizedData.five_year.slice(0, 4), 'five_year', carBoxs)
                showMore1.textContent = 'Показать еще 12 автомобилей'
            }
        }

        showMore2.onclick = () => {
            let tenYear = document.getElementById('ten_year')
            if (showMore2.textContent === 'Показать еще 12 автомобилей') {
                tenYear.innerHTML = ''
                reload(categorizedData.ten_year, 'ten_year', carBoxs)
                showMore2.textContent = 'Показать меньше'
            } else if (showMore2.textContent === 'Показать меньше') {
                tenYear.innerHTML = ''
                reload(categorizedData.ten_year.slice(0, 4), 'ten_year', carBoxs)
                showMore2.textContent = 'Показать еще 12 автомобилей'
            } 
        }

        showMore3.onclick = () => {
            let othersBox = document.getElementById('others')
            if (showMore3.textContent === 'Показать еще 12 автомобилей') {
                othersBox.innerHTML = ''
                reload(categorizedData.others, 'others', carBoxs)
                showMore3.textContent = 'Показать меньше'
            } else if (showMore3.textContent === 'Показать меньше') {
                othersBox.innerHTML = ''
                reload(categorizedData.others.slice(0, 4), 'others', carBoxs)
                showMore3.textContent = 'Показать еще 12 автомобилей'
            }
        }
    })
    .catch(error => console.log(error))