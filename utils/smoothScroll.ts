import type React from "react"
export function smoothScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) {
  e.preventDefault()
  const targetElement = document.getElementById(targetId)
  if (targetElement) {
    const yOffset = -80 
    const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: "smooth" })
  }
}

