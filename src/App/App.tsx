import './App.css'
import { useApp } from './App.hook'
import Dial from './components/Dial'
import pad from './pad'

function App() {
	const { clock } = useApp()

	return (
		<div className='app'>
			<Dial
				unit={'seconds'}
				values={[...Array(60).keys()]}
				rotation={clock?.seconds}
			>

			</Dial>
			<Dial unit={'minutes'}></Dial>
			<Dial unit={'hours'}></Dial>
			<Dial unit={'day'}></Dial>
			<Dial unit={'month'}></Dial>
			<Dial unit={'year'}></Dial>
		</div>
	)
}

export default App
