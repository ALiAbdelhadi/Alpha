import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import React from 'react'

const BlockPage = () => {
   return (
      <div>
         <Container>
            <section className='my-14 md:my-16 space-y-3'>
               <div>
                  <h1 className='text-3xl md:text-4xl font-bold'>Building Blocks for the Web</h1>
                  <p className='text-lg md:text-xl font-light max-w-2xl text-foreground -mt-5'>Clean, modern building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever.</p>
               </div>
               <Button id="">browse blocks</Button>
            </section>
            {/* Blocks */}
            <section>
            </section>
         </Container>
      </div>
   )
}

export default BlockPage