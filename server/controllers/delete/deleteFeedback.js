const contactModel=require('../../../server/model/contacts')
exports.deleteStarch=async(req,res)=>
{
    try{
        const id=req.params.id
        console.log(req.params.id)
        const deldata=await contactModel.findByIdAndDelete({_id:id})
        console.log("delete Request for delete data")
        console.log(deldata)
        res.send({status:200})
    }
    catch(e)
    {
        console.log(e)
    }
}
