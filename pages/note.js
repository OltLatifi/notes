import {TextField, Typography, Button, Card} from '@material-ui/core'
import styles from '../styles/Form.module.css'

function note() {
    return (
        <center>
            <Card  className={styles.form}>
            <Typography variant="h5">Enter a note</Typography><br/>
            <form noValidate autoComplete="off" >
                <TextField
                    id="standard-basic"
                    label="Title"
                    className={styles.input}/>
                <br/>
                <TextField
                    id="standard-multiline-static"
                    label="Description"
                    className={styles.input}
                    multiline
                    rows={6}
                    />
                <br/><br/>
                <Button variant="contained" className={styles.input}>Submit</Button>
            </form>
            </Card>
        </center>
        
    )
}

export default note
