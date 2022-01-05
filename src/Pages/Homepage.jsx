import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import SearchInput from '../Components/SearchInput'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const Homepage = () => {
    const isAuth = useSelector(state => state.login.isAuth)
    if(!isAuth){
        return <Redirect to="/login" />
    }
    return (
        <Box sx={{width:"300px", margin:"20px auto"}} padding={4}>
            <Paper elevation={10} sx={{padding:"20px"}}>
            <Typography mb={3} variant="h5">Homepage</Typography>
            <SearchInput />
            </Paper>
        </Box>
    )
}

export default Homepage
