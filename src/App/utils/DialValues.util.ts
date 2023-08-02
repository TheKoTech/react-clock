import pad from './Pad.util'

export function getSeconds(): string[] {
	return Array.from({ length: 60 }, (_, k) => pad(k, 2))
}
