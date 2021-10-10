import React from 'react'
import {  Container } from 'react-bootstrap';
import styles from './Contact.module.css'
const Contact = () => {
    const handleonChange = (event) => {
     
    }
    return (
        <div className={styles.contact_main}>
       
            <div className={styles.formContro}>

                <h2 style={{ textAlign: "center", color:"#00ADB5" }} className={styles.contact_heading}>CONTACT US</h2>


                <form method="POST" >

               
                    <div className="form-group">
                        <label className={styles.label} htmlFor="exampleFormControlInput1">Email address</label>
                        <input type="text" className={`form-control ${styles.input}`} name="email" id="exampleFormControlInput1"
                            onChange={handleonChange}
                            placeholder="email*" required />
                    </div>
                    <div className="form-group">
                        <label className={styles.label} htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea className={`form-control ${styles.input}`} name="message" id="exampleFormControlTextarea1" 
                            rows="3" onChange={handleonChange}
                            placeholder="message*" required></textarea>
                    </div>

                    <button className={styles.form_button}  type="submit" >Submit</button>


                </form>
            </div>
        </div>
    )
}

export default Contact
