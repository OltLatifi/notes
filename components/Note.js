import {Card, CardContent, Typography} from '@material-ui/core'
import styles from '../styles/Note.module.css'
import Link from 'next/link'

function Note(props) {
    return (
        <>
        <Link href={`/notes/${props.id}`}>
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
        </Link>
        </>
    )
}

export default Note
