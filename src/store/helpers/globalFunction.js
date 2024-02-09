export function getInfo(arr, titleVal, val) {
	const targetYear = new Date().getFullYear().toString()
	const targetMonth = new Date().toLocaleDateString('uk-UA').slice(3, 5)
	const test = new RegExp(`\\d{2}.${targetMonth}.${targetYear}`)
 const correctMonth = arr.filter((item) => item.date.match(test))
    return Math.ceil(correctMonth.reduce((prevEl, el) => prevEl + el[titleVal], 0) * val)
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

    return Math.ceil(result.reduce((prevEl, el) => prevEl + el[titleVal], 0) * val)
 }

