import Note from '../components/Note'
import styles from '../styles/Home.module.css'

export default function Home({notes}) {
  return (
    <div className={styles.notes}>
      <br/>
      {notes.data.map((note) => {return <Note
        key={note._id}
        id={note._id}
        title={note.title}
        description={note.description}/>
        })}
    </div>
  )
}


export const getStaticProps = async () =>{
  const result = await fetch('http://localhost:3000/api/notes')
  const notes = await result.json()

  return{
    props: {notes}
  }
}