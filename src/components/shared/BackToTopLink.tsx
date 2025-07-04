"use client"

import { Button } from "@/components/ui/button"

export default function BackToTopLink() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Button variant="link" onClick={scrollToTop} className="mt-2 text-primary hover:text-primary/80">
      Back to Top ↑
    </Button>
  )
}
