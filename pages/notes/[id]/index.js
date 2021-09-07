// import styles from '../../../styles/Articles.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';

function Note({note}) {
    const router = useRouter();

    return (
        <div>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <br/>
            <Link href="/">Go back</Link>

        </div>
    )
}
// query: { id } -- gets the id from the router
Note.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/notes/${id}`);
    const { data } = await res.json();

    return { note: data }
}

export default Note
