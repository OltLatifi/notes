import styles from '../../../styles/Note.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';
import {Card, CardContent, CardActions, Typography, Button} from '@material-ui/core'


function Note({note}) {
    const router = useRouter();

    return (
        <center>
            <Card className={styles.bigCard}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {note.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {note.description}
                    </Typography>
                </CardContent>
            </Card>
        </center>

    )
}
// query: { id } -- gets the id from the router
Note.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/notes/${id}`);
    const { data } = await res.json();

    return { note: data }
}

export default Note
