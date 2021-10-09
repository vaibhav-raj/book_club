import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import swal from 'sweetalert';
import styles from "./login.module.css"
import { useDispatch } from 'react-redux'
import { signup } from '../../Redux/Auth/actions'

const Signup = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')

    const handleSignup = () => {
        if (name && email && password && role) {
            // console.log(name, email, password, role);
            const payload = { name, email, contact, password, role }
            dispatch(signup(payload))
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
        <div className={styles.background_signup}>
            <div className={styles.signup_div}>
                <h1>BooksClub</h1>
                <Box
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                        gap: "18px"
                    }}
                    component="form"
                    noValidate
                    autoComplete="off">
                    <TextField value={name} label="Name" type="text" variant="filled" sx={{ background: "white", outline: 'none', border: 'none', borderRadius: '4px' }} onChange={(e) => setName(e.target.value)} />
                    <TextField value={email} label="Email" type="email" variant="filled" sx={{ background: "white", outline: 'none', border: 'none', borderRadius: '4px' }} onChange={(e) => setEmail(e.target.value)} />
                    <TextField value={contact} label="Mobile" type="number" variant="filled" sx={{ background: "white", outline: 'none', border: 'none', borderRadius: '4px' }} onChange={(e) => setContact(e.target.value)} />
                    <TextField value={password} label="Password" type="password" variant="filled" sx={{ background: "white", outline: 'none', border: 'none', borderRadius: '4px' }} onChange={(e) => setPassword(e.target.value)} />

                    <FormControl variant="filled"
                        sx={{ background: "white", outline: 'none', border: 'none', borderRadius: '4px' }}>
                        <InputLabel id="demo-simple-select-filled-label">Are you</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}>
                            <MenuItem value="buyer">Consumer</MenuItem>
                            <MenuItem value="provider">Provider</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Button variant="contained" size="large" sx={{
                    padding: '12px', backgroundColor: '#00ADB5', fontWeight: 'medium', width: '100%', my: 3, fontSize: '18px', '&:hover': {
                        backgroundColor: '#04c5cf',
                    },
                }} onClick={handleSignup}>Create account</Button>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', my: 1 }}>
                    <Typography variant="p" component="p" sx={{ cursor: 'pointer' }}>

                    </Typography>
                    <Typography variant="p" component="p">
                        Already have an account? <span style={{ cursor: 'pointer', color: '#00ADB5' }}
                            onClick={() => history.push('/login')}
                        >Login</span>
                    </Typography>
                </Box>
            </div>
        </div>
    )
}

export default Signup