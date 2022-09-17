import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CheckoutSteps from '../components/CheckoutSteps'
import { useGlobalContext } from '../context'


const PaymentMethodScreen = () => {
  const {user, cart, dispatch} =useGlobalContext()
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState("Paypal")
  if (!user){
    navigate('/signin')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: "SAVE_PAYMENT_METHOD",
      payload: paymentMethod
    })
    navigate('/placeorder')
    
    console.log(cart)
  }

  return (
    <div>
      <CheckoutSteps step1 step2 ></CheckoutSteps>
      <form onSubmit={handleSubmit}
      className="m" style={{maxWidth: '60rem', margin: '0 auto'}}>
        <div className='flex flex-col m-4'>
          <h1>Payment Method</h1>
        </div>
        <div className='flex flex-col m-4'>
          <div>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label className='my-4' htmlFor="paypal">PayPal</label>
          </div>
        </div>
        <div className='flex flex-col m-4'>
          <div>
            <input
              type="radio"
              id="stripe"
              value="Crytocurrency"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="stripe">Crytocurrency</label>
          </div>
        </div>
        <div className='flex flex-col m-4'>
          <label />
          <button className="" style={{backgroundColor: '#f0c040'}} type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  )
}

export default PaymentMethodScreen