import './App.css'
import { useApp } from './App.hook'

function App() {
	const { clock, ClockContext } = useApp()

	return <ClockContext.Provider value={clock}>{clock?.seconds}</ClockContext.Provider>
}

export default App
