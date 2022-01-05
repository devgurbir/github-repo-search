import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


const SearchInput = () => {
    const [query, setQuery] = useState("");

    
    const searchURL = `/search?q=${query}&per_page=5`

    return (
        <Stack>
            <TextField variant="standard" mb={5}  value={query} onChange ={(e) => setQuery(e.target.value)} placeholder="Search Repo"/>
            <Button variant="contained" mt={2}><Link style={{textDecoration:"none", color:"white"}} to={searchURL}>Search</Link></Button>
        </Stack>
    )
}

export default SearchInput
