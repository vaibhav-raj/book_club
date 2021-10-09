import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import swal from 'sweetalert';
import styles from "./login.module.css"


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleLogin = () => {
        if (email && password) {
            console.log(email, password);
        }
        else {
            swal({
                title: "Please fill all the fields!",
                icon: "info",
                button: "Okay",
            });
        }
    }

    return (
        <div className={styles.background}>
            <div className={styles.login_div}>
                <h1>BooksClub</h1>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { my: 1.5, width: '52.4ch' }, }}
                    noValidate
                    autoComplete="off">
                    <TextField value={email} label="Email" type="email" variant="filled" sx={{ background: "white", outline: 'none', border: 'none', borderRadius: '4px' }} onChange={(e) => setEmail(e.target.value)} />
                    <TextField value={password} label="Password" type="password" variant="filled" sx={{ background: "white", outline: 'none', border: 'none', borderRadius: '4px' }} onChange={(e) => setPassword(e.target.value)} />
                </Box>

                <Button variant="contained" size="large" className={styles.login_btn} sx={{
                    padding: '12px', backgroundColor: '#00ADB5', fontWeight: 'medium', width: '100%', my: 2, fontSize: '18px', '&:hover': {
                        backgroundColor: '#04c5cf',
                    },
                }} onClick={handleLogin}>Login</Button>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', my: 2.5 }}>
                    <Typography variant="p" component="p" sx={{ cursor: 'pointer' }}>
                        Forget Password?
                    </Typography>
                    <Typography variant="p" component="p">
                        Dont't have an account? <span style={{ cursor: 'pointer', color: '#00ADB5' }}
                            onClick={() => history.push('/signup')}
                        >Signup</span>
                    </Typography>
                </Box>
            </div>
        </div>
    )
}

export default Login