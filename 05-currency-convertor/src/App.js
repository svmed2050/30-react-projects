import React from 'react'
import { Block } from './Block'
import './index.scss'

/* 
https://apilayer.com/marketplace/exchangerates_data-api
*/

function App() {
	const [fromCurrency, setFromCurrency] = React.useState('RUB')
	const [toCurrency, setToCurrency] = React.useState('USD')
	const [rates, setRates] = React.useState({})
	const apikey = 'MGQcCrvbmwnmNKXujVcUnRM8hiV9XLDt'
	const requestOptions = {
		method: 'GET',
		headers: {
			apikey,
		},
	}

	React.useEffect(() => {
		const url =
			'https://api.apilayer.com/exchangerates_data/convert?to=EUR&from=USD&amount=20'
		fetch(url, requestOptions)
			.then((res) => res.json())
			.then((json) => {
				setRates(json.result)
				console.log(json.result)
			})
			.catch((err) => {
				console.warn(err)
				alert('Failed to get information')
			})
	}, [])

	return (
		<div className='App'>
			<Block
				value={0}
				currency={fromCurrency}
				onChangeCurrency={setFromCurrency}
			/>
			<Block value={0} currency={toCurrency} onChangeCurrency={setToCurrency} />

			<Block value={0} currency='USD' />
		</div>
	)
}

export default App
