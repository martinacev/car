import classes from './main.module.css';  
import PropTypes from 'prop-types';

import wheel from '../../assets/svg/wheel.svg';
import statistic from '../../assets/svg/wheel.svg';
import document from '../../assets/svg/wheel.svg';


const Main = ({title, subtitle}) => {
    return (
     <div className={classes.container}>
        <div className={classes.content}> 
            <p className={classes.title}>{title}</p>
            <p className={classes.subtitle}>{subtitle}</p>
            <p className={classes.border}></p>
        </div>
        <div className={classes.section}>
            <div className={classes.logo}>
              <img className={classes.svg} src={wheel} alt='logo' />
            </div>
        </div>
     </div>   
    )
}

Main.defaultProps = {
    title: "Why Us?",
    subtitle: "Because we know what is best for you"
}

Main.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default Main;
