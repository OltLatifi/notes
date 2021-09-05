import Head from 'next/head'
import Navbar from './Navbar'

function Layout({children}) {
    return (
        <div>
            <Head>
                <title>Note app</title>
            </Head>
            <Navbar/>
        </div>
    )
}

export default Layout
