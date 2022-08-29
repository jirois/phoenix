import React from 'react'
import { CheckoutWrapper } from './Styles'

const CheckoutSteps = (props) => {
  return (
    <CheckoutWrapper className='checkout-steps'>
        <div className={props.step1 ? 'active': ''}>Sign-In</div>
        <div className={props.step2 ? 'active': ''}>Payment</div>
        <div className={props.step3 ? 'active': ''}>Place Order</div>
    </CheckoutWrapper>
  )
}

export default CheckoutSteps