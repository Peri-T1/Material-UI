import {Title, Subtitle} from '../UI'
import Container from '../Container'
import classes from './VideoBlock.module.scss'


export default function VideoBlock() {

    return (
        <Container>
            <div className={classes.wrapper}>
                <Title>We are Createx Construction Bureau </Title>
                <Subtitle>We are rightfully considered to be the best construction company in the USA.</Subtitle>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/e2mKZXPAmNM?si=fGSjVxyGKh9s2OQD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </Container>
    )
}