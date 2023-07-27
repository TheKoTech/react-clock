import { useObservableState } from 'observable-hooks'
import { clock$ } from '../clock'
import { Clock } from '../interfaces/clock.interface'
import { Context } from 'react'
import { ClockContext } from '../clock.context'

interface AppState {
	clock?: Clock
	ClockContext: Context<Clock | undefined>
}

export const useApp = (): AppState => {
	const clock = useObservableState(clock$)

	return { clock, ClockContext }
}
