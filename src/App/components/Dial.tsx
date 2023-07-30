interface DialProps {
	values?: string
	unit: string
	rotation: number
}

export default function Dial({ values, unit, rotation }: DialProps) {
	return <div className={`dial dial--${unit}`}>{values}</div>
}
