import React from 'react'
import './index.scss'
import Collection from './Collection'

/* 
https://mockapi.io 

https://644ea6b91b4567f4d58d0dda.mockapi.io/photo_collections 
*/

const cats = [
	{ name: 'Все' },
	{ name: 'Море' },
	{ name: 'Горы' },
	{ name: 'Архитектура' },
	{ name: 'Города' },
]

function App() {
	const [categoryId, setCategoryId] = React.useState(0)
	const [searchValue, setSearchValue] = React.useState('')
	const [collections, setCollections] = React.useState([])

	React.useEffect(() => {
		const url = `https://644ea6b91b4567f4d58d0dda.mockapi.io/photo_collections?${
			categoryId ? `category=${categoryId}` : ''
		}`

		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setCollections(json)
				console.log(json)
			})
			.catch((err) => {
				console.warn(err)
				alert('An error occurred while fetching data')
			})
	}, [categoryId])

	return (
		<div className='App'>
			<h1>Моя коллекция фотографий</h1>
			<div className='top'>
				<ul className='tags'>
					{cats.map((obj, index) => (
						<li
							onClick={() => setCategoryId(index)}
							className={categoryId === index ? 'active' : ''}
							key={obj.name}
						>
							{obj.name}
						</li>
					))}
				</ul>
				<input
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					className='search-input'
					placeholder='Поиск по названию'
				/>
			</div>
			<div className='content'>
				{collections
					.filter((obj) =>
						obj.name.toLowerCase().includes(searchValue.toLowerCase())
					)
					.map((obj, index) => {
						return (
							<Collection name={obj.name} images={obj.photos} key={index} />
						)
					})}
			</div>
			<ul className='pagination'>
				<li>1</li>
				<li className='active'>2</li>
				<li>3</li>
			</ul>
		</div>
	)
}

export default App
