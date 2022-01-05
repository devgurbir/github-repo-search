import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../Redux/Login/actions';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Login = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.login.isAuth)
    
    if(isAuth){
        return <Redirect to="/" />
    }

    return (
        <Box sx={{width:"300px", margin:"20px auto"}} padding={4}>
            <Paper elevation={10} sx={{padding:"20px"}}>
            <Typography variant="h5" mb={3}>Login</Typography>
            <Button  variant="contained" color="success" onClick={() => dispatch(loginUser())}>Click To Login</Button>
            </Paper>
        </Box>
    )
}

export default Login
