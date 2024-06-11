import classes from './UIstyles.module.scss'


export default function Title(props) { 

    // eslint-disable-next-line react/prop-types
    const { children } = props

    return(
        <p className={classes.title}>{children}</p>
    )
}