import { AppBar, Toolbar, Typography, Box, Button, IconButton } from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Theme } from '../Theme'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: Theme.colors.basic1,
        color: Theme.colors.basic2,
        padding: "0 20px"
    },
    toolBar: {
        display: "flex",
        flexFlow: "row wrap",
    }
}))

const Navbar = () => {

    const classes = useStyles()
    const navLinks = [
        { label: "About", id: "About" },
        { label: "Portfolio", id: "Portfolio" },
        { label: "Contact", id: "Contact" },
    ]

    return (
        <AppBar position="fixed" className={classes.navbar} style={{ backgroundColor: Theme.colors.basic1 }}>
            <Toolbar className={classes.toolBar}>
                <Typography variant="h5" component="h6" sx={{ flexGrow: 1 }}>
                    {"<Hafiz Hamza Ali />"}
                </Typography>
                <Box className={classes.buttonContainer} sx={{display:{xs:"none",sm: 'none', md: 'block' }}}>
                    {navLinks.map((items, id) => {
                        return (
                            <Button
                                style={{
                                    backgroundColor: Theme.colors.basic1,
                                    color: Theme.colors.basic2
                                }}
                                variant="text"
                            >{items.label}</Button>
                        )
                    })}

                </Box>
                <Box className={classes.buttonContainer} sx={{display:{xs:"block",sm: 'block', md: 'none' }}}>
                    <IconButton sx={{color:Theme.colors.basic2}} onClick={()=>console.log("Button clicked")}>
                        <MenuOpenIcon  />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
