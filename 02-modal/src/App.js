import React from 'react'
import './index.scss'

function App() {
	const [open, setOpen] = React.useState(false)

	return (
		<div className='App'>
			<button onClick={() => setOpen(true)} className='open-modal-btn'>
				✨ Открыть окно
			</button>

			<div className={`overlay animated ${open ? 'show' : ''}`}>
				<div className='modal'>
					<svg
						height='200'
						viewBox='0 0 200 200'
						width='200'
						onClick={() => setOpen(false)}
					>
						<title />
						<path d='M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z' />
					</svg>
					<img
						src='https://media.giphy.com/media/fCCCy9QuTtsFM9S88n/giphy-downsized-large.gif'
						alt='giphy'
					/>
				</div>
			</div>
		</div>
	)
}

export default App
