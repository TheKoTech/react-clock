import { useMemo } from 'react'
import { getSeconds } from '../utils/DialValues.util'
import './Dial.css'

interface DialProps {
	unit: string
	rotation: number
}

export default function Dial({ unit, rotation }: DialProps) {
	const spans = useMemo(() => {
		const res = getSeconds().map((value, i, arr) => (
			<div
				key={value}
				className={`dial__mark dial__mark--${unit}`}
				style={{ rotate: `${360 * (i / arr.length)}deg` }}
			>
				{value}
			</div>
		))
		console.log(res)
		return res
	}, [unit])

	return (
		<div className={`dial dial--${unit}`} style={{ rotate: String(rotation) }}>
			{spans}
		</div>
	)
}
