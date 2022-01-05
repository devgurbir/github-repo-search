import Typography from '@mui/material/Typography';

const PerPageDropdown = ({handleSelect}) => {
    return (
        <div>
            <label><Typography variant="p">Per Page: </Typography></label>
            <select onChange = {(e) => handleSelect(Number(e.target.value))} name="perPageSelect">
                
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </div>
    )
}

export default PerPageDropdown
