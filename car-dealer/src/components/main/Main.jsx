import classes from './main.module.css';  
import PropTypes from 'prop-types';

import carCheck from "../../../public/car-check.webp";
import drive from "../../../public/drive.webp";
import operator from "../../../public/operator.webp";

const images = [
  { src: carCheck, alt: "Document Logo", text: "Browse our wide selection of vehicles and pick the one that fits your needs." },
  { src: drive, alt: "Wheel Icon", text: "Browse our wide selection of vehicles and pick the one that fits your needs." },
  { src: operator, alt: "Document Icon", text: "Browse our wide selection of vehicles and pick the one that fits your needs."}
 
];

const Main = ({ title, subtitle }) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}> 
        <p className={classes.title}>{title}</p>
        <p className={classes.subtitle}>{subtitle}</p>
        <p className={classes.border}></p>
      </div>
      
      <div className={classes.context}>
        {images.map((image, index) => (
          <div key={index} className={classes.imageContainer}>
            <img className={classes.logo} src={image.src} alt={image.alt} />
            <p className={classes.imageText}>{image.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Main.defaultProps = {
  title: "Plan your adventure",
  subtitle: "Because we know what is best for you",
}

Main.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default Main;
