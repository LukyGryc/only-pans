import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const Page = ({ children }: Props) => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="w-full max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  )
}

export default Page
