import React from "react"
import ReactPlayer from 'react-player'
import Container from "../Container"
import classes from "./VideoBlockOne.module.scss"



export default function VideoBlockOne() {
    return (

        <Container>
            <div className={classes.wrapper}>
            <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ'/>   
            </div>
        </Container>
    )
        }