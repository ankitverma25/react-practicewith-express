import { useState,useEffect, useCallback } from 'react';

function App() {
  const [password, setpassword] = useState('');
  const [name, setname] = useState('')
  const [amount, setamount] = useState('')
  const [record,setrecord]=useState([])

  
const[show,setshow]=useState(false)



  const handlesubmit=(e)=>{
    if(!name||!amount||!password){
      alert("all field required")
      return
    }
    e.preventDefault();
    const newrecord={'name':name,'amount':amount,'password':password}
    setrecord((prev)=>[...prev,newrecord])
    setname('')
    setpassword("")
    setamount("")

  }

  
  
  const logRecords = useCallback(() => {
    console.log('Record submitted:', record);
  }, [record]);

  useEffect(() => {
    logRecords();
  }, [record, logRecords]);

useEffect(()=>{
  if(record.length>0){
    localStorage.setItem('records',JSON.stringify(record))
    // localStorage.clear()
    console.log("record saved in local storage also")
  }
},[record]);

useEffect(()=>{
 const storedRecords = JSON.parse(localStorage.getItem('records'))||[];
 setrecord(storedRecords)
},[]);


  return (
    <>
      <div className="p-2 font-extrabold text-4xl bg-gradient-to-bl text-center from-slate-500 to-red-600">Customer record</div>
      <div className="" >
        <form onSubmit={handlesubmit}>
        customer name
          <input className='outline m-2' type="text" onChange={(e) => {
            e.preventDefault()
            setname(e.target.value)
          }} value={name}/> <br />
           phone number <input className='outline m-2' type="password" value={password} onChange={(e) => {
            e.preventDefault()
            setpassword(e.target.value)
          }} /> <br />
          rupee
          <input className='outline m-2' type="number" value={amount} onChange={
            (e) => {
              e.preventDefault()
              setamount(e.target.value)
            }} />
            <br />
            <hr />
            <button type="submit">submit</button>
            <br />
            <br/>


        </form>
        <div className="
        ">
          <table className={`border-collapse border border-slate-500`}>
            <thead>
              <tr>
                <th className="border border-slate-500">Name</th>
                <th className="border border-slate-500">Amount</th>
                <th className="border border-slate-500">Password</th>
                </tr>
                </thead>
               <tbody>
                {record.map((item,i)=>{
                  return(
                    <tr key={i}>
                      <td className="border border-slate-500">{item.name}</td>
                      <td className="border border-slate-500">{item.amount}</td>
                      <td className="border border-slate-500">{show? item.password :"*".repeat(item.password.length)} </td>
                    </tr>

                  )
                })}

                
                </tbody>

                </table> 


        </div>



      </div>

    </>
  )
}

export default App
