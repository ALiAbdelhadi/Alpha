import { ReactNode } from 'react'

const MdxWrapper = ({ children }: { children: ReactNode }) => {
   return (
      <div className='not-prose'>
         {children}
      </div>
   )
}

export default MdxWrapper