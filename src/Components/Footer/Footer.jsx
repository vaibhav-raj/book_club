import React from 'react'
import { Row, Col } from 'react-bootstrap';
import styles from './Footer.module.css'



const Footer = () => {
    return (
        <>
            <div style={{ marginTop: "40px", padding: "10px", background: "#222831" }}>
             
                <Row>
                    <Col className={styles.copyright}>  <div ><h6>Created By Web Warriors | © 2021-2022 All Rights Reserved</h6></div></Col>
                </Row>
            </div>

        </>
    )
}

export default Footer
