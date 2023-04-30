import React from 'react'
import { Block } from './Block'
import './index.scss'

// https://api.currencyapi.com/v3/latest?apikey=${apikey}&currencies=${toCurrency}&base_currency=${fromCurrency}

function App() {
	const [fromCurrency, setFromCurrency] = React.useState('USD')
	const [toCurrency, setToCurrency] = React.useState('USD')
	const [fromPrice, setFromPrice] = React.useState(0)
	const [toPrice, setToPrice] = React.useState(0)

	const apikey = 'zlbKBrYJUqmzYl2cxHqwBcwqZm7otn4QMWbsvSB5'

	React.useEffect(() => {
		const requestOptions = {
			method: 'GET',
			headers: {
				apikey,
			},
		}
		if (fromPrice && fromCurrency !== toCurrency) {
			const url = `https://api.currencyapi.com/v3/latest?apikey=${apikey}&currencies=${toCurrency}&base_currency=${fromCurrency}`

			fetch(url, requestOptions)
				.then((res) => res.json())
				.then((json) => {
					const convertValue = json.data[`${toCurrency}`].value
					setToPrice(convertValue * fromPrice)
				})
				.catch((err) => {
					console.warn(err)
					alert('Failed to get information')
				})
		}
		if (fromCurrency === toCurrency) {
			setToPrice(fromPrice)
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
