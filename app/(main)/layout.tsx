import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { Fragment, ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <Fragment>
            <Header />
            <main role="main" className="flex flex-col min-h-[calc(100vh-3.5rem-1px)] overflow-x-hidden scroll-smooth">{children}</main>
            <Footer />
        </Fragment>
    )
}

export default layout