import { BehaviorSubject, Observable, map } from 'rxjs'
import { Timer } from './interfaces/timer.interface'
import { IClock } from './interfaces/clock.interface'

const tick = (): number =>
	setTimeout(
		() => timer$.next({ date: new Date(), timer: tick() }),
		1000 - (Date.now() % 1000),
	)

const timer$ = new BehaviorSubject<Timer>({
	date: new Date(),
	timer: tick(),
})

export const clock$: Observable<IClock> = timer$.pipe(
	map(({ date }) => ({
		seconds: date.getSeconds(),
		minutes: date.getMinutes(),
		hours: date.getHours(),
		day: date.getDate(),
		month: date.getMonth() + 1,
		year: date.getFullYear(),
	})),
)
