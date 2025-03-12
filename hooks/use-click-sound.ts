"use client"

import { useRef, useCallback } from "react"

export function useClickSound() {
  const audioContextRef = useRef<AudioContext | null>(null)
  const gainNodeRef = useRef<GainNode | null>(null)

  const playClickSound = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      gainNodeRef.current = audioContextRef.current.createGain()
      gainNodeRef.current.connect(audioContextRef.current.destination)
    }

    const oscillator = audioContextRef.current.createOscillator()
    oscillator.type = "sine"
    oscillator.frequency.setValueAtTime(2000, audioContextRef.current.currentTime)
    oscillator.connect(gainNodeRef.current!)

    gainNodeRef.current!.gain.setValueAtTime(0.1, audioContextRef.current.currentTime)
    gainNodeRef.current!.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.1)

    oscillator.start()
    oscillator.stop(audioContextRef.current.currentTime + 0.1)
  }, [])

  return playClickSound
}

