import React from 'react'
import './index.scss'
import { Success } from './components/Success'
import { Users } from './components/Users'

// Тут список пользователей: https://reqres.in/api/users

function App() {
	const [users, setUsers] = React.useState([])
	const [isLoading, setLoading] = React.useState(true)

	// console.log(users)

	React.useEffect(() => {
		fetch(`https://reqres.in/api/users`)
			.then((res) => res.json())
			.then((json) => setUsers(json.data))
			.catch((err) => {
				console.warn(err)
				alert('An error occured while fetching users')
			})
			.finally(() => setLoading(false))
	}, [])

	return (
		<div className='App'>
			<Users items={users} isLoading={isLoading} />
			{/* <Success /> */}
		</div>
	)
}

export default App
