import pad from './Pad.util'

export function getSeconds(): string[] {
	return Array.from({ length: 60 }, (_, k) => pad(k, 2))
}

export const getMinutes = getSeconds

export function getHours(): string[] {
	return Array.from({ length: 24 }, (_, k) => pad(k, 2))
}
