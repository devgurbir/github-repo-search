
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PerPageDropdown from '../Components/PerPageDropdown'
import RepoItem from '../Components/RepoItem'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


import { searchGithub } from '../Redux/Search/actions'

const Searchpage = () => {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)

    const query_param = params.get("q")
    const per_page_param = params.get("per_page")

    const [query, setQuery] = useState(query_param)
    const [per_page, setPerPage] = useState(per_page_param)
    const [page, setPage] = useState(1)

    const handleChange = (event, value) => {
        setPage(value);
      };

    const searchData = useSelector(state => state.search.searchData)
    const totalItems = useSelector(state => state.search.totalItems)

    const dispatch = useDispatch();

    const handleSelect = (val) => {
        setPerPage(val)
        setPage(1)
    }

    useEffect( () => {
        dispatch(searchGithub(query, per_page, page))
    }, [query, per_page, page])

    return (
        <Box sx={{width:"80%", margin:"0 auto"}}>           
            <Typography variant="h5">Search Results for "{query}"</Typography>
            <Box mt={2} sx={{display:"flex", flexDirection:"row", justifyContent: "center", alignItems: "center", gap:"20px"}}>
            <Typography variant="p">Current Page: {page}</Typography>
            <PerPageDropdown handleSelect={handleSelect} />
            </Box>
            <Grid container spacing={2} mt={2}>
            {searchData?.map( el => {
                return <RepoItem key={el.id} name={el.name} description={el.description} visibility={el.private} html_url={el.html_url}/>
            })}
            </Grid>
            <Stack mt={3}>
            <Pagination  count={Math.ceil(totalItems/per_page)} page={page} onChange={handleChange} />
            </Stack>
        </Box>
    )
}

export default Searchpage
