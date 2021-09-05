import dbConnect from '../../../utils/dbConnect'
import Note from '../../../models/Note'

dbConnect()

export default async(req, res) => {
    const{
        query: {id}, 
        method
    } = req

    switch(method){
        case 'GET':
            try{
                const note = await Note.findById(id)

                if(!note){
                    return res.status(404).json({succes:false})
                }
                res.status(200).json({succes:true, data:note})
            } catch(error){
                res.status(400).json({succes:false})
            }
            break
        case 'PUT':
            try{
                const note = await Note.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true,
                })
                if(!note){
                    return res.status(404).json({succes:false})
                }
                res.status(200).json({succes:true, data:note})
            }catch(error){
                res.status(400).json({succes:false})

            }
            break
        case 'DELETE':
            try{
                const deletedNote = await Note.deleteOne({_id:id})
                if (!deletedNote){
                    return res.status(404).json({succes:false})
                }
                res.status(200).json({succes:true, data:[]})
            }catch(error) {
                res.status(400).json({succes:false})
            } break
        default:
            res.status(400).json({succes:false})
            break

    } 
    
}