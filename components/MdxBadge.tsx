import React from 'react'

const MdxBadge = ({ children }: { children: string }) => {
   return (
      <span className='py-[3px] text-sm bg-gray-100 px-2.5 rounded-md font-medium text-gray-900'>{children}</span>
   )
}
export default MdxBadge