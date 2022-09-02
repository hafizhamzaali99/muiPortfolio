import React from 'react'
// import { Theme } from '../Theme';
import { makeStyles } from '@mui/styles';
import { Typography, Box } from '@mui/material';
import Image from '../../Images/brandBanner.jpg'
import Navbar from './Navbar';
import { Theme } from '../Theme';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    background: `linear-gradient(to bottom right,#04303140,#00606473),url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  headerContainer: {
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    display: "flex",
    color: Theme.colors.basic2,
    alignItems: "flex-start",
    justifyContent: "center",
    flexFlow: "column wrap",
    // padding: "20px"
  },
  headerBody:{
    padding:"20px"
  },
  decorator: {
    display: "flex",
    fontWeight:"bolder",
    // fontFamily:"roboto",
    alignItems:"center",
    position:"relative",
    marginTop:"20px",
    "&:before":{
      backgroundColor:Theme.colors.primary1,
      height:"50px",
      width:"50px",
      content:'""',
      borderRadius:"50%"
    }
  },
  decoratorText: {
    // marginLeft:"-40px",
    position: "absolute",
    left: "30px",
    fontSize:"20px"
  },
  decoratorArrow: {
    position: "absolute",
    left: "130px",
    fontSize:"small",
    animationName:"upDown",
    animationDuration:"0.5s",
    animationIterationCount:"infinite"
  }

}))

const Headers = () => {

  const classes = useStyles()

  return (
    <Box className={classes.headerWrapper}>
      <Navbar />
      <Box className={classes.headerContainer}>
        <Box className={classes.headerBody}>
          <Typography variant='h3' component="h4" className={classes.headerTitle}>
            Hello I'm MERN stack developer
          </Typography>
          <Typography variant='h5' component="h4" className={classes.headerDesc}>
            I create websites and applications based on your needs
          </Typography>
          <Box className={classes.decorator}>
            <Typography variant='span' className={classes.decoratorText}>About me</Typography>
            <Typography variant='span' className={classes.decoratorArrow}>
              <ArrowDownwardIcon />
            </Typography>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default Headers;
