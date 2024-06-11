import React from "react"
import ReactPlayer from 'react-player'



export default function VideoBlockOne() {
    return (

        <Container>
            <div className={classes.wrapper}>
            <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ'/>   
            </div>
        </Container>
    )
        }