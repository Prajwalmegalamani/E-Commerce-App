import React from 'react'
import Checkbox from '../../atoms/Checkbox'
import './ShippingUpdates.scss'

function ShippingUpdates() {
  return (
    <div className="shipping-updates">
        <div className="shipping-updates-box">
          <div className="heading">
            <p>Enable Shipping Updates?</p>
          </div>
          <div className="message">
           
            <div className="notify">
              <div className="notify__message">
                <p>Get SMS with any order updates</p>
              </div>
              <div className="notify__btn">
                <Checkbox className="toggle_switch" />
              </div>
            </div>
            <div>
            <p className="notify__message-details">
              Receive your order updates via text to the phone number provided
            </p>
          </div>
          </div>
        </div>
      </div>
  )
}

export default ShippingUpdates