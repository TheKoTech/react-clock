import { useContext } from 'react'
import { ClockContext } from '../../clock.context'

type DialProps = {
	unit: string
}

export default function Dial({ unit }: DialProps) {
	const clock = useContext(ClockContext)
	return <div className={`dial dial--${unit}`}>{clock?.seconds}</div>
}
