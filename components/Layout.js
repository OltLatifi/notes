import Head from 'next/head'

function Layout({children}) {
    return (
        <div>
            <Head>
                <title>Note app</title>
            </Head>
            {children}
        </div>
    )
}

export default Layout
