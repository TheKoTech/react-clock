import { useEffect } from 'react'
import './App.css'
import { tap } from 'rxjs'
import { clock$ } from '../clock'
import { Clock } from '../interfaces/clock.interface'

function App() {
	useEffect(() => {
		const sub = clock$
			.pipe(tap((val: Clock) => console.log(val.seconds)))
			.subscribe(console.log)
		return () => sub.unsubscribe()
	}, [])

	return <div></div>
}

export default App
