import { Box, Button, Grid, InputLabel, TextField, Typography } from "@mui/material"


const AzureSSO = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
      };

    return (
        <Box className="AzureSSO" sx={{maxWidth:"90%", width:"980px", boxSizing:"border-box", margin:"70px auto 50px", p:6, borderRadius:"20px", display:"flex", boxShadow:"0px 0px 30px -10px #0002", overflow:"hidden", flexDirection:"column"}}>
            <Typography variant="h4" component="h2" sx={{fontWeight:"800", textAlign:"center", mb:"30px", pb:"20px", borderBottom:"1px solid #eee", textAlign:"center"}}>Register with Azure SSO</Typography>
            <Box component="form" noValidate onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <InputLabel shrink htmlFor="clientName"> Client Name* </InputLabel>
                        <TextField
                        required
                        fullWidth
                        name="clientName"
                        id="clientName"
                        placeholder="Client Name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel shrink htmlFor="tenantID"> Tenant ID* </InputLabel>
                        <TextField
                        required
                        fullWidth
                        id="tenantID"
                        name="tenantID"
                        placeholder="Tenant ID"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel shrink htmlFor="clientID"> Client ID* </InputLabel>
                        <TextField
                        required
                        fullWidth
                        id="clientID"
                        name="clientID"
                        placeholder="Client ID"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel shrink htmlFor="Scope"> Scope* </InputLabel>
                        <TextField
                        required
                        fullWidth
                        id="Scope"
                        name="Scope"
                        placeholder="Scope"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel shrink htmlFor="clientSecret"> Client Secret* </InputLabel>
                        <TextField
                        required
                        fullWidth
                        id="clientSecret"
                        name="clientSecret"
                        placeholder="Client Secret"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel shrink htmlFor="clientSecret"> Redirect Uri* </InputLabel>
                        <TextField
                        required
                        fullWidth
                        id="redirectUri"
                        name="redirectUri"
                        placeholder="Redirect Uri"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel shrink htmlFor="apiEndpoint"> ServieNow API Endpoint* </InputLabel>
                        <TextField
                        required
                        fullWidth
                        name="apiEndpoint"
                        id="apiEndpoint"
                        placeholder="ServieNow API Endpoint"
                        />
                    </Grid>
                </Grid>
                <Button className="def-btn fullwidth" variant="contained" sx={{padding:"16px", width:"max-content", minWidth:"260px", background:"#222", mt: 4}} type="submit" fullWidth >
                Sign Up
                </Button>
            </Box>
        </Box>
    )
}

export default AzureSSO