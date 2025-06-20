export function getInfo(arr, titleVal, val) {
	const targetYear = new Date().getFullYear().toString()
	const targetMonth = new Date().toLocaleDateString('uk-UA').slice(3, 5)
	const test = new RegExp(`\\d{2}.${targetMonth}.${targetYear}`)
 const correctMonth = arr.filter((item) => item.date.match(test))
   //  return Math.ceil(correctMonth.reduce((prevEl, el) => prevEl + el[titleVal], 0) * val)
	 if (targetYear >= 2025) return Math.ceil(correctMonth.reduce((prevEl, el) => prevEl + el[titleVal], 0) * val.tax2025)
     else return Math.ceil(correctMonth.reduce((prevEl, el) => prevEl + el[titleVal], 0) * val.tax2024)
}
export function getMySalary(arr, titleVal, val) {
    const targetYear = new Date().getFullYear().toString()
    const targetMonth = new Date().toLocaleDateString('uk-UA').slice(3, 5)
    const test = new RegExp(`\\d{2}.${targetMonth}.${targetYear}`)
    const correctMonth = arr.filter((item) => item.date.match(test))
     return Math.ceil(correctMonth.reduce((prevEl, el) => prevEl + el[titleVal], 0) * val)
}

export function getSalaryPerMonth(arr,titleVal,val){
	const targetYear = new Date().getFullYear().toString()
	const test = new RegExp(`\\d{2}.(0${val}||${val}).${targetYear}`)

    const correctMonth = arr.filter((item) => item.date.match(test))

	 return Math.ceil(correctMonth.reduce((prevEl, el) => prevEl + el[titleVal], 0))
		
	 
}

export function test(arr, titleVal, val) {
    const targetMonth = new Date().toLocaleDateString('uk-UA').slice(3, 5)
    const targetYear = new Date().getFullYear()
    const dateRegex = new RegExp(`\\d{2}.([0][1-3]).${targetYear}`)
    const dateRegex2 = new RegExp(`\\d{2}.([0][4-6]).${targetYear}`)
    const dateRegex3 = new RegExp(`\\d{2}.([0][7-9]).${targetYear}`)
    const dateRegex4 = new RegExp(`\\d{2}.([1][0-2]).${targetYear}`)

    let result
    if (targetMonth === '01' || targetMonth === '02' || targetMonth === '03') {
		 result = arr.filter((item) => item.date.match(dateRegex)) 
    } else if (targetMonth === '04' || targetMonth === '05' || targetMonth === '06') {
        result = arr.filter((item) => item.date.match(dateRegex2))
    } else if (targetMonth === '07' || targetMonth === '08' || targetMonth === '09') {
        result = arr.filter((item) => item.date.match(dateRegex3))
    } else if (targetMonth === '10' || targetMonth === '11' || targetMonth === '12') {
        result = arr.filter((item) => item.date.match(dateRegex4))
    }
	 
	 if (targetYear >= 2025) return Math.ceil(result.reduce((prevEl, el) => prevEl + el[titleVal], 0) * val.tax2025)
		else  return Math.ceil(result.reduce((prevEl, el) => prevEl + el[titleVal], 0) * val.tax2024)
 }


 export function searchPaymentList(arr,titleVal,data) {
	console.log(arr)
	
     const searchYear = new RegExp(`\\d{2}.(0${data.date}||${data.date}).${data.year}`)
     let result = arr.filter((el) => el[titleVal].match(searchYear))
	  
	//   console.log(result)
	  
     return result
 }

export function sortData(arr) {
    return arr.sort((a, b) => (a.date > b.date ? 1 : -1))
}

export async function getWeatherInfo() {
    const server =
        'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=fb85ba079f55e0cb44d67f9451503453'
	

    const response = await fetch(server, {
        method: 'GET',
    })
    const responseResult = await response.json()

    if (response.ok) {
      return getWeather(responseResult)
		  
    }
	  
}

 function getWeather(data) {
    const location = data.name
    const temp = Math.round(data.main.temp)
    const feelsLike = Math.round(data.main.feels_like)
    const weatherStatus = data.weather[0].main
    const weatherIcon = data.weather[0].icon

    return { location, temp, feelsLike, weatherStatus, weatherIcon }
}

export function test2(arr, titleVal, val) {

    const targetMonth = new Date().toLocaleDateString('uk-UA').slice(3, 5)
    const targetYear = new Date().getFullYear()
    const dateRegex = new RegExp(`\\d{2}.([0][1-3]).${targetYear}`)
    const dateRegex2 = new RegExp(`\\d{2}.([0][4-6]).${targetYear}`)
    const dateRegex3 = new RegExp(`\\d{2}.([0][7-9]).${targetYear}`)
    const dateRegex4 = new RegExp(`\\d{2}.([1][0-2]).${targetYear}`)
		
    let result
    if (targetMonth === '01' || targetMonth === '02' || targetMonth === '03') {
        result = arr.filter((item) => item.cashDay?.match(dateRegex))
    } else if (targetMonth === '04' || targetMonth === '05' || targetMonth === '06') {
        result = arr.filter((item) => item.cashDay?.match(dateRegex2))
    } else if (targetMonth === '07' || targetMonth === '08' || targetMonth === '09') {
        result = arr.filter((item) => item.cashDay?.match(dateRegex3))
    } else if (targetMonth === '10' || targetMonth === '11' || targetMonth === '12') {
        result = arr.filter((item) => item.cashDay?.match(dateRegex4))
    }
	 
    if (targetYear >= 2025) return Math.ceil(result.reduce((prevEl, el) => prevEl + el[titleVal], 0) * val.tax2025)
    else return Math.ceil(result.reduce((prevEl, el) => prevEl + el[titleVal], 0) * val.tax2024)
}













