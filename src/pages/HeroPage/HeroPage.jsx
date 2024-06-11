import classes from './HeroPage.module.scss'
import { Button } from '@mui/material'
import { Card } from '@mui/material';
import VideoBlockOne from '../../components/VideoBlockOne/VideoBlockOne';



const HeroPage = () => {
     return (<>

      <div className={classes.wrapper}>
        <div>
            <h1 className={classes.main}>CREATE<span className={classes.X}>X</span> CONSTRUCTION</h1>
        </div>
        <div>
            <p className={classes.paragraph}>Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. </p>
        </div>
        {/* <Button variant="contained" color='orange' size="medium">Contained</Button> */}
        {/* <Button variant="contained" color="orange" size="medium">Contained</Button>
        <Button variant="outlined" color="black"  size="large">Outlined</Button> */}
        </div>
        <div className={classes.Button}>
        <Button variant="outlined" size="large" sx={
          {width: '278px',
          height: '52px',
          borderRadius: '4px',
          border: '1px solid Black',
          padding: '0 40px',
          gap: '10px',
          marginRight: '24px'
          }} >Learn more about us</Button> 
        <Button variant="contained" size="medium" sx={
          {width: '224px',
          height: '52px',
          borderRadius: '4px',
          border: '1px',
          padding: '0 40px',
          gap: '10px',
          backgroundColor: '#FF5A30'
          }}>SUBMIT REQUEST</Button>
        </div>
        <Card variant="outlined" sx={{ maxWidth: 120, height:160}}> About video</Card>
        <VideoBlockOne />
        
        </>
          )
        }
        export default HeroPage