import {TextField, Typography, Button, Card} from '@material-ui/core'
import styles from '../../../styles/Form.module.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import axios from 'axios'


function EditForm({note}) {
    const router = useRouter()
    const[title, setTitle] = useState(note.title)
    const[description, setDescription] = useState(note.description)
    const {query: { id }} = router

    const buttonPressed = ()=>{
        // title is required
        if(title!==''){
            axios.put(`/api/notes/${id}`, {
                "title": title,
                "description": description,
            })
            .then(response => router.push('/'))
        }else{
            alert("You can't make a note without a title")
        }
        
    }

    return (
        <center>
            <Card  className={styles.form}>
            <Typography variant="h5">Edit a note</Typography><br/>
            <form noValidate autoComplete="off" >
                <TextField
                    id="standard-basic"
                    label="Title"
                    value={title}
                    className={styles.input}
                    inputProps={{ maxLength: 40 }}
                    onChange={(e)=>{setTitle(e.target.value)}}/>
                <br/><br/>
                <TextField
                    id="standard-multiline-static"
                    label="Description"
                    value={description}
                    className={styles.input}
                    inputProps={{ maxLength: 200 }}
                    onChange={(e)=>{setDescription(e.target.value)}}
                    multiline
                    rows={6}
                    />
                <br/><br/>
                <Button
                    variant="contained"
                    className={styles.input}
                    onClick={buttonPressed}>Edit</Button>
            </form>
            </Card>
        </center>
        
    )
}

EditForm.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`https://notes-neon.vercel.app/api/notes/${id}`);
    const { data } = await res.json();

    return { note: data }
}

export default EditForm
