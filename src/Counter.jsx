import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './Redux/Slice/CounterSlice'

function Counter() {
  const count = useSelector((state) =>state.counterReducer.count)
  const dispatch=useDispatch()
  return (
    <>

    <h1 className='text-danger fw-bolder text-center ms-5 mt-5'>Counter-Application</h1>
    <div className="container border border-0 mt-5 p-3 w-25 " style={{boxShadow:"0px 0px 3px 3px white ",borderRadius:"5px"}} >
        <h1 className="fw-bolder text-center mt-5" style={{fontSize:"50px"}}>{count}</h1>
        <div className='d-flex justify-content-evenly align-content-center mt-5'>
            <button className='btn btn-success' onClick={()=>dispatch(increment())}>Increment</button>
            <button className='btn btn-danger'onClick={()=>dispatch(reset())}>Reset</button>
            <button className='btn btn-warning' onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
        <div className="d-flex mt-5">
            <input type="text" className='form-control' placeholder='enter amount to be incremented'/>
            <button className='btn btn-primary ms-3'>Increment Aomunt</button>
        </div>
        
    </div>

      
    </>
  )
}

export default Counter
