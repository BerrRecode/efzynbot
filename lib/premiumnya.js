const fs = require('fs')
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const getPremiumExpired = (sender) => {
		let position = null
		Object.keys(premium).forEach((i) => {
		if (premium[i].id === sender) {
		position = i 
	}
})
		if (position !== null) {
		return premium[position].expired 
	}
} 

const expiredCheck = () => {
		setInterval(() => {
		let position = null
		Object.keys(premium).forEach((i) => {
		if (Date.now() >= premium[i].expired) {
		position = i 
	}
})
		if (position !== null) {
		console.log(`Premium expired: ${premium[position].id}`)
		prem.splice(position, 1)
		fs.writeFileSync('./database/premium.json', JSON.stringify(prem)) 
		}
	}, 1000)
} 
		
const getAllPremiumUser = () => {
const array = []
		Object.keys(premium).forEach((i) => {
		array.push(premium[i].id)
	})
		return array 
	}
	
module.exports = { 
         getAllPremiumUser, 
         expiredCheck, 
         getPremiumExpired 
     }