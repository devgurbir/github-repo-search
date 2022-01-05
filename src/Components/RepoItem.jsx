import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const RepoItem = ({id, name, visibility, login, html_url, description, stargazers_count}) => {
    const styles = {        
        flexGrow: 1
    }
    return (
        
            <Grid sx={styles} item xl={3} lg={4} md={6} sm={12} xs={12}>
            <Card sx={{height: 200}}>
            <CardContent sx={{textAlign: "left"}}>
                <Typography mb={1} variant="h6">Name: {name}</Typography >
                <Typography mb={1} variant="p">Visibility: {visibility ? "Private" : "Public" }</Typography >
                <Typography mb={1} variant="p" component="p">{description.slice(0, 100)}</Typography >
                <Typography mb={1} variant="p"><a href={html_url}>Learn More</a></Typography >
            </CardContent>                
            </Card>
            </Grid>
        
    )
}

export default RepoItem
