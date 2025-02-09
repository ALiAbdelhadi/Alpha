import { ReactNode } from 'react'

const MdxWrapper = ({ children }: { children: ReactNode }) => {
   return (
      <div>
         {children}
      </div>
   )
}

export default MdxWrapper