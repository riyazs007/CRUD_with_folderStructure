import express from 'express'
import { getEmpData,postEmpData,deleteEmpData,updateEmpData,getOneData } from '../controller/empController';

const router=express.Router();

router.get('/get-data',getEmpData);
router.post('/post-data',postEmpData)
router.delete(`/delete-data/:_id`,deleteEmpData)
router.put(`/update-data/:_id`,updateEmpData)
router.get('/get-data/:_id',getOneData)

export default router;