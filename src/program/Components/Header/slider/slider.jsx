import React from "react";
import { Slider,Box, Typography} from "@material-ui/core";
import { createTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";

export var speed = 200;

const theme = createTheme({
  direction: "rtl",
});


const useStyles = makeStyles((theme) => ({
  slider:{
    padding: theme.spacing(2),
    fontSize: 14,
  },
  Typography:{
    fontSize: 6,
  }
}));


function handleChange(event,value){
  speed = value; 
}

function ReverseSlider (props) {

  const classes = useStyles();

  let sliderDisplay;
  if(props.display) sliderDisplay = 'inline-block';
  else sliderDisplay = 'none';

  return (
    <div className={classes.slider}>
    <ThemeProvider theme={theme} >
      <Box sx={{display:sliderDisplay}}>
        <Box width = {200}  sx={{textAlign: 'center', display: {xs: 'none', md: 'block'}}}>
          <Typography>
            ANIMATION SPEED
          </Typography>
          <Slider 
            sx={{display:sliderDisplay}}
            defaultValue={200}
            min={10}
            max={1000}
            size ="medium"
            track="inverted"
            style={{color: 'rgb(211,211,211)'}}
            onChange= {handleChange}
          >
          </Slider>
        </Box>
      </Box>
      </ThemeProvider>
      </div>
  );
};

export default ReverseSlider;