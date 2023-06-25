import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from './state/index'
import { useSelector } from 'react-redux'


function Shop() {
 const balance= useSelector(state=>state.amount)

  const dispatch=useDispatch()
  const {depositMoney,withdrawMoney}=bindActionCreators(actionCreators,dispatch)

  return (
    <div className='text-center my-3'>
        {/* <button className="btn btn-primary mx-1" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
        Add this item to cart
        <button className="btn btn-primary mx-1"  onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
        <button className="btn btn-primary mx-1" onClick={()=>{withdrawMoney(100)}}>-</button>
        update balance {balance}
        <button className="btn btn-primary mx-1"  onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop
