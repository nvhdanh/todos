import { useState, useEffect, useRef } from 'react'

const useClock = () => {
    const [clock, setClock] = useState(`00:00:00`)
    let clockInterval = useRef()
    useEffect(() => {
        clockInterval.current = setInterval(() => {
            let now = new Date()
            let hour = `0${now.getHours()}`.slice(-2)
            let minute = `0${now.getMinutes()}`.slice(-2)
            let second = `0${now.getSeconds()}`.slice(-2)
            setClock(`${hour}:${minute}:${second}`)
        }, 1000)
        return () => {
            clearInterval(clockInterval.current)
        }
    }, [])
    return clock
}

export default useClock