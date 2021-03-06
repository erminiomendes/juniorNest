import React from "react";
import { Link } from 'react-router-dom';
import { juniorNest, profilePic }        from "../../assets/images";
import { Box, Grid, Typography, Button } from "@material-ui/core";


export default (props) => (
  <Box py={8} style={{background: "linear-gradient(87deg, #28C7E9 ,#1171ef)"}} color="white">
    <Grid container justify="center">
      <Grid item xs={10}>
        <Box display="flex" justifyContent="space-between">
              <Typography
              variant="h5"
              component="p"
              color="white"
              >
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>            
                  <img
                  src={juniorNest}
                  style={{ width: "-webkit-fill-available" }}
                  alt="logoJrNest"
                  />
                </Link>
              </Typography>


          <Box display="flex" direction="row" spacing={2}>
            <Box display="flex" style={{paddingRight: 10, alignItems: "center"}}>
              <Typography style={{paddingTop: 10, paddingRight: 10}}>
                Welcome Emily!
              </Typography>
              <img 
                alt="profile-pic"
                src={profilePic} 
                style={{ width: "40px", height: "40px"}}
                />
            </Box>

            <Box style={{alignSelf: "center"}} >
              <Button onClick={props.openNewUserProfile} variant="contained" style={{background: "#28C7E9"}} color="white" disableElevation>
              <Link to="/profileForm" style={{ width: "70px", textDecoration: 'none', color: 'white'  }}>Profile </Link>
              </Button>
            </Box>  

            <Box pl={2} style={{alignSelf: "center"}} >
              <Button onClick={props.openNewJobPost} variant="contained"  style={{background: "#28C7E9"}} color="white" disableElevation>
              <Link to="/newPost" style={{ textDecoration: 'none', color: 'white'  }}>
                New Post
              </Link>
              </Button>
            </Box>
          </Box>  

        </Box>
      </Grid>
    </Grid>
  </Box>
);