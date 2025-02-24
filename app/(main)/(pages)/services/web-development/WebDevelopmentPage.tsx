import Container from '@/components/Container'
import React from 'react'

const webDevelopmentPage = () => {
    return (
        <section className="min-h-[86.5vh] py-8">
            <Container>
                <div className='space-y-2'>
                    <h1 className='text-3xl md:text-4xl font-bold'>Building Website byte by byte</h1>
                    <p className='text-lg md:text-xl max-w-2xl text-muted-foreground'>Get your website instantly</p>
                </div>
            </Container >
        </section>
    )
}

export default webDevelopmentPage