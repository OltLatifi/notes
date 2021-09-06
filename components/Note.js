import {Card, CardContent, Typography} from '@material-ui/core'
import styles from '../styles/Note.module.css'

function Note(props) {
    return (
        <>
        <Card className={styles.note}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
        </>
    )
}

export default Note
