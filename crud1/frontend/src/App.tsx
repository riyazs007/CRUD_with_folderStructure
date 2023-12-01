
import { employeeGet, employeeSet } from './types/types'
import Save from './components/Save'
import { onPost,onGet,onDel,onGetone,onUpdate } from './apicalls/apicalls'
import { useEffect, useState } from 'react'
import GetAll from './components/GetAll'
 const App = () => {
const [allEmployees,setAllEmployees]=useState<employeeGet[]>([])

  const onPostData=async(employee:employeeSet)=>{
    if(updateId){
    await  onUpdate(updateId,employee)
    setEmployeeInitial(undefined)
    setUpdateId(undefined)
    onGetData()
    }
    else{
      await onPost(employee)   
    onGetData()
    }
  }

  const onGetData=async()=>{
    const res=await onGet()
    setAllEmployees(res);
  }
  useEffect(()=>{
    onGetData()
  },[])

  const onDelData=async(_id:string)=>{
    await onDel(_id)
    onGetData()
  }
  
  const [employeeInitial,setEmployeeInitial]=useState<employeeSet|undefined>(undefined)
  const [updateId,setUpdateId]=useState<string|undefined>(undefined)
    const onUpdateData=async(_id:string)=>{
      setUpdateId(_id)
    const res=  await onGetone(_id)
    setEmployeeInitial(res);
    }
  return (
    <>
      <Save onPostData={onPostData} updateId={updateId} employeeInitial={employeeInitial}/>
      <GetAll allEmployees={allEmployees}  onDelData={onDelData} onUpdateData={onUpdateData}/>
    </>
  )
}
export default App;