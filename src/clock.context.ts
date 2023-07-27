import { createContext } from 'react'
import { Clock } from './interfaces/clock.interface'

export const ClockContext = createContext<Clock | undefined>(undefined)
