import React from 'react'
// import { Theme } from '../Theme';
import { makeStyles } from '@mui/styles';
import { Typography, Box } from '@mui/material';
import Image from '../../Images/brandBanner.jpg'
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    background: `linear-gradient(to bottom right,#04303140,#00606473),url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding:"20px"
  },
  headerContainer:{
    width: "100%",
    minHeight:"90vh",
    height: "auto",
    display:"flex",
    alignItems:"flex-start",
    justifyContent:"center",
    flexFlow:"column wrap"
  },
  headerTitle:{
    textAlign:'left'

  }
}))

const Headers = () => {

  const classes = useStyles()

  return (
    <Box className={classes.headerWrapper}>
      <Navbar />
      <Box className={classes.headerContainer}>
        <Typography variant='h3'component="h4" className={classes.headerTitle}>
          Hello I'm MERN stack developer
        </Typography>
        <Typography variant='h5'component="h4" className={classes.headerDesc}>
          I create websites and applications based on your needs
        </Typography>
      </Box>
    </Box>
  )
}

export default Headers;
