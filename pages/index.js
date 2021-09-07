import Note from '../components/Note'
import styles from '../styles/Note.module.css'

function Home({notes}) {

  return (
    <div className={styles.notes}>
      <br/>
      {notes.map((note) => {return <Note
        key={note._id}
        id={note._id}
        title={note.title}
        description={note.description}/>
        })}
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('https://notes-neon.vercel.app/api/notes')
  const { data } = await res.json()
  return { notes: data }
}

export default Home