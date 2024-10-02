import classes from './main.module.css';  
import PropTypes from 'prop-types';





const Main = ({title, subtitle}) => {
    return (
     <div className={classes.container}>
        <div className={classes.content}> 
            <p className={classes.title}>{title}</p>
            <p className={classes.subtitle}>{subtitle}</p>
            <p className={classes.border}></p>
        </div>
        
     </div>   
    )
}

Main.defaultProps = {
    title: "Why Us?",
    subtitle: "Because we know what is best for you",
    
}

Main.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
   
}

export default Main;
