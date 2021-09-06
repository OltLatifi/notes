import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'

function Navbar() {
    return (
        <AppBar position="static" style={{ backgroundColor:'SeaGreen' }}>
        <Toolbar>
            <Typography variant="h6" className={styles.listItems}>
                <Link href='/'>Note App</Link>
            </Typography>
            <Typography variant="h6" className={styles.listItems}>
                <Link href='/note'>Create Note</Link>
            </Typography>
        </Toolbar>
        </AppBar>
    )
}
export default Navbar