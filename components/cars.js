function carBoxs(item) {

    let carBox = document.createElement('div')
    carBox.className = 'car_box'

    let carName = document.createElement('h3')
    carName.className = 'name'
    carName.textContent = item.name

    let carInfo = document.createElement('div')
    carInfo.className = 'car_info'

    let color = document.createElement('p')
    color.className = 'color'
    color.textContent = 'Color: '

    let body = document.createElement('p')
    body.className = 'body'
    body.textContent = 'Body: '

    let year = document.createElement('p')
    year.className = 'year'
    year.textContent = 'Year: '

    let colorTxt = document.createElement('span')
    colorTxt.className = 'color_txt'
    colorTxt.textContent = item.color

    let bodyTxt = document.createElement('span')
    bodyTxt.className = 'body_txt'
    bodyTxt.textContent = item.body

    let yearTxt = document.createElement('span')
    yearTxt.className = 'year_txt'
    yearTxt.textContent = item.year

    let btnMore = document.createElement('button')
    btnMore.className = 'more'
    btnMore.textContent = 'Подробнее'

    carBox.append(carName, carInfo, btnMore)
    carInfo.append(color, body, year)
    color.append(colorTxt)
    body.append(bodyTxt)
    year.append(yearTxt)

    return carBox
}

export { carBoxs }