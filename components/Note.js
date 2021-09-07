import {Card, CardContent, CardActions, Typography, Button} from '@material-ui/core'
import styles from '../styles/Note.module.css'
import Link from 'next/link'

function Note(props) {
    return (
        <>
        
        <Card className={styles.card}>
            <Link href={`/notes/${props.id}`}>
                <CardContent className={styles.note}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </Link>
            <CardActions >
                <Button size="small" variant="contained">
                    Edit
                </Button>
                <Button size="small" variant="contained" style={{backgroundColor:'pink'}}>
                    Delete
                </Button>
            </CardActions>
        </Card>
        
        </>
    )
}

export default Note
