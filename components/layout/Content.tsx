import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const Content = ( {children} : Props ) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 p-8 lg:p-12">
            {children}
        </div>
    </div>
  )
}

export default Content