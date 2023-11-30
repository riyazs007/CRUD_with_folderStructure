import express from "express";
import {getdata,postdata,deleteData,updateData,getOnedata} from '../Controller/controll'

const hate=express.Router();

hate.get('/get-data', getdata);
hate.get('/get-data/:_id', getOnedata);
hate.post('/send-data', postdata);
hate.delete('/delete/:_id',deleteData)
hate.put('/update/:_id',updateData)

export default hate;