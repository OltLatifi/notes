import {TextField, Typography, Button, Card} from '@material-ui/core'
import styles from '../styles/Form.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
import axios from 'axios'


function Form() {
    const router = useRouter()
    const[title, setTitle] = useState('')
    const[description, setDescription] = useState('')

    const buttonPressed = ()=>{
        // title is required
        if(title!==''){
            axios.post('/api/notes/', {
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
            <Typography variant="h5">Enter a note</Typography><br/>
            <form noValidate autoComplete="off" >
                <TextField
                    id="standard-basic"
                    label="Title"
                    className={styles.input}
                    inputProps={{ maxLength: 40 }}
                    onChange={(e)=>{setTitle(e.target.value)}}/>
                <br/><br/>
                <TextField
                    id="standard-multiline-static"
                    label="Description"
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
                    onClick={buttonPressed}>Submit</Button>
            </form>
            </Card>
        </center>
        
    )
}

export default Form
