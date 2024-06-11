import classes from './Header.module.scss'
import logo from '../../assets/logo.svg'
import iPhone from '../../assets/iPhone.svg'
import Chat from '../../assets/Chat.svg'
import { Button } from '@mui/material'


export default function Header() {

    const navigationContent = [
        {
            title: 'About us',
            link: ''
        },
        {
            title: 'Services',
            link: ''
        },
        {
            title: 'Work',
            link: ''
        },
        {
            title: 'News',
            link: ''
        },
        {
            title: 'Contacts',
            link: ''
        }
    ]

    return(
        <div className={classes.wrapper}>
            <img src={logo} alt="" />
            <div className={classes.navbar}>
                {navigationContent.map((item, i) => (
                    <div key={i}>{item.title}</div>
                ))}
            </div>
            <div className={classes.navContact}>
            <img src={iPhone} alt="" />   
            <p>Call Us (405) 555-0128</p>
            <img src={Chat} alt="" />
            <p>Talk to us hello@createx.com</p>
            </div>
                    </div>
                    
                )
}