import dbConnect from '../../../utils/dbConnect'
import Note from '../../../models/Note'

dbConnect()

export default async(req, res) => {
    const { method } = req

    switch(method){
        case 'GET':
            try {
                const notes = await Note.find({}).sort({'_id':-1})
                res.status(200).json({
                    succes:true,
                    data: notes,
                })
        } catch(error){
            res.status(400).json({succes:false})
        } break

        case 'POST':
            try {
                const note = await Note.create(req.body)
                res.status(201).json({
                    succes:true,
                    data: note,
                })
        } catch(error){
            res.status(400).json({succes:false})
        } break
        default:
            res.status(405).json({succes:false})
            // throws a "Method not allowed" error if someone tries to use a different request
    }
}