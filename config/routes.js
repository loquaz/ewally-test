import express from "express"
import  { bankBillController } from "./iocContainer.js"

const router = express.Router()

const bankBillAction = function(){
    return (req,res,next) => {
        res.send( bankBillController.bankBill( req.params.dl )  )
    }
}

router.get('/boleto/:dl([0-9]+)', bankBillAction() )

export default router