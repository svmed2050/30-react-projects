import React from 'react'
import { Block } from './Block'
import './index.scss'

/* 
https://apilayer.com/marketplace/exchangerates_data-api
*/

function App() {
	const [fromCurrency, setFromCurrency] = React.useState('USD')
	const [toCurrency, setToCurrency] = React.useState('USD')
	const [fromPrice, setFromPrice] = React.useState(0)
	const [toPrice, setToPrice] = React.useState(0)

	const apikey = 'MGQcCrvbmwnmNKXujVcUnRM8hiV9XLDt'

	React.useEffect(() => {
		const requestOptions = {
			method: 'GET',
			headers: {
				apikey,
			},
		}
		if (fromPrice) {
			const url = `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${fromPrice}`
			fetch(url, requestOptions)
				.then((res) => res.json())
				.then((json) => {
					setToPrice(json.result)
				})
				.catch((err) => {
					console.warn(err)
					alert('Failed to get information')
				})
		}
	}, [toCurrency, fromCurrency, fromPrice])

	const onChangeFromPrice = (value) => {
		setFromPrice(value)
	}

	const onChangeToPrice = (value) => {
		setToPrice(value)
	}

	return (
		<div className='App'>
			<Block
				value={fromPrice}
				currency={fromCurrency}
				onChangeCurrency={setFromCurrency}
				onChangeValue={onChangeFromPrice}
			/>
			<Block
				value={toPrice}
				currency={toCurrency}
				onChangeCurrency={setToCurrency}
				onChangeValue={onChangeToPrice}
			/>
		</div>
	)
}

export default App
