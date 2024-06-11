import classes from './Container.module.scss'

export default function Container(props) {

    // eslint-disable-next-line react/prop-types
    const {children} = props

    return(
        <div className={classes.container}>
            {children}
        </div>
    )
}