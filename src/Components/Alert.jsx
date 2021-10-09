import React from 'react'
import swal from '@sweetalert/with-react'


const Alert = ({ heading, text }) => {

    swal(
        <div>
            <h1>{heading}</h1>
            <p>{text}</p>
            <button>okay</button>
        </div>
    )

}

export default Alert
