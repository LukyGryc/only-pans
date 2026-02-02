"use client";
import Content from "@/components/layout/Content"
import Page from "@/components/layout/Page"
import { Confetti } from "@/components/ui/confetti";
import confetti from "canvas-confetti";
import { House } from "lucide-react"
import Link from "next/link"

const OrderSuccessful = () => {

  //Stolen from MagicUI docs
  //https://magicui.design/docs/components/confetti
  const end = Date.now() + 3 * 1000 // 3 seconds
  const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"]

  const frame = () => {
    if (Date.now() > end) return

    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors,
    })
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors,
    })

    requestAnimationFrame(frame)
  }

  frame()

  return (
    <Page>
      <Link
        href="/"
        className="inline-flex mt-16 xl:mt-0 items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors group"
      >
        <House className="w-4 h-4" aria-hidden />
        <span className="font-medium">Back to Home</span>
      </Link>
      <Content>
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-900">Your Order Was Successful</h1>
          <p className="text-gray-600">Your order has been placed and will be shipped soon.</p>
        </div>
      </Content>
    </Page>
  )
}

export default OrderSuccessful