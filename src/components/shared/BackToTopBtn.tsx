"use client"

import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-8 right-8">
      <Button
        onClick={scrollToTop}
        size="icon"
        className="rounded-full shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </Button>
    </div>
  )
}
