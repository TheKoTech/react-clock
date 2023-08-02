export default function pad(num: number, size: number): string {
	const numStr = num.toString()
	console.log('pad')
	return '0'.repeat(size - numStr.length) + numStr
}
