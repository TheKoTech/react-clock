import React from 'react'
import './Clock.css'
import Dial from './Dial'
import { useObservableState } from 'observable-hooks'
import { clock$ } from '../../clock.observable'

export default function Clock(): React.JSX.Element {
	const clock = useObservableState(clock$)

	return (
		<div className='clock'>
			<Dial unit={'seconds'} rotation={clock?.seconds || 0} />
			<Dial unit={'minutes'} rotation={clock?.minutes || 0} />
			<Dial unit={'hours'} rotation={clock?.hours || 0} />
			{/* <Dial unit={'day'}/>
			<Dial unit={'month'}/>
			<Dial unit={'year'}/> */}
		</div>
	)
}
