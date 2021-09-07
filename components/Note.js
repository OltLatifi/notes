import {Card, CardContent, CardActions, Typography, Button} from '@material-ui/core'
import styles from '../styles/Note.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link'
import axios from 'axios'

function Note(props) {
    const router = useRouter();

    const deleteNote =()=>{
        axios.delete(`http://localhost:3000/api/notes/${props.id}`)
        .then(router.replace(router.asPath))
    }
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
                <Button size="small" variant="contained" href={`/notes/${props.id}/edit`}>
                    Edit
                </Button>
                <Button size="small" variant="contained" style={{backgroundColor:'pink'}} onClick={deleteNote}>
                    Delete
                </Button>
            </CardActions>
        </Card>
        
        </>
    )
}

export default Note
