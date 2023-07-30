import { useObservableState } from 'observable-hooks'
import { clock$ } from '../clock.observable'
import { IClock } from '../interfaces/clock.interface'

interface AppState {
	clock?: IClock
}

export const useApp = (): AppState => {
	const clock = useObservableState(clock$)
	return { clock }
}
