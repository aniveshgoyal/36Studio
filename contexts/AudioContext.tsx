"use client"

import type React from "react"
import { createContext, useState, useContext, useCallback, useEffect, useRef } from "react"

type AudioContextType = {
  isPlaying: boolean
  showPrompt: boolean
  togglePlay: () => void
  isAudioLoaded: boolean
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPrompt, setShowPrompt] = useState(true)
  const [isAudioLoaded, setIsAudioLoaded] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element but don't autoplay
    const newAudio = new Audio()
    newAudio.loop = true
    newAudio.preload = "auto"

    // Set up event listeners
    newAudio.addEventListener("canplaythrough", () => {
      setIsAudioLoaded(true)
    })

    newAudio.addEventListener("error", (e) => {
      console.error("Audio loading error:", e)
    })

    // Set the source after adding event listeners
    newAudio.src = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/world1-YFFVfMpbmXC2m7IjxJX0ofVba7Zkdb.mp3"

    audioRef.current = newAudio

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ""
      }
    }
  }, [])

  const togglePlay = useCallback(() => {
    if (!audioRef.current || !isAudioLoaded) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      // Create a user interaction context for audio playback
      const playPromise = audioRef.current.play()

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Audio play error:", error)
        })
      }
    }

    setIsPlaying(!isPlaying)
    setShowPrompt(false)
  }, [isPlaying, isAudioLoaded])

  useEffect(() => {
    const handleClick = () => {
      if (showPrompt && audioRef.current && isAudioLoaded) {
        const playPromise = audioRef.current.play()

        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Audio play error:", error)
          })
        }

        setIsPlaying(true)
        setShowPrompt(false)
      }
    }

    // Only add the click listener if the audio is loaded
    if (isAudioLoaded) {
      window.addEventListener("click", handleClick)
    }

    return () => {
      window.removeEventListener("click", handleClick)
    }
  }, [showPrompt, isAudioLoaded])

  return (
    <AudioContext.Provider value={{ isPlaying, showPrompt, togglePlay, isAudioLoaded }}>
      {children}
    </AudioContext.Provider>
  )
}

export const useAudio = () => {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider")
  }
  return context
}

