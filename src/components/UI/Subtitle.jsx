import classes from './UIstyles.module.scss'


export default function Subtitle(props) { 

    // eslint-disable-next-line react/prop-types
    const { children } = props

    return(
        <p className={classes.subtitle}>{children}</p>
    )
}