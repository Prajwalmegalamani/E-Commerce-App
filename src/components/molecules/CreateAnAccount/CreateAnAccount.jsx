import React from 'react'
import Button from '../../atoms/Button'
import './CreateAnAccount.scss'

function CreateAnAccount() {
  return (
    <div className="create-acc">
        <div className="heading">          
          <p>Become a Member</p>
        </div>
        <div>
          <p className="details">
            Register today to take advantage of customized whishlist, amazing
            offers and faster checkout
          </p>
        </div>
        <div className="create-acc__btn">
          <Button className={"primary fill"}>Create An Account</Button>
        </div>
      </div>
  )
}

export default CreateAnAccount