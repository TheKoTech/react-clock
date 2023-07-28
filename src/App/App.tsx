import './App.css'
import { useApp } from './App.hook'
import Clock from './components/Clock'

function App() {
	const { clock, ClockContext } = useApp()

	return (
		<div className='app'>
			<ClockContext.Provider value={clock}>
				<Clock />
			</ClockContext.Provider>
		</div>
	)
}

export default App
