import classes from './main.module.css';  
import PropTypes from 'prop-types';
import documentLogo from "../../assets/svg/statisctic.svg";
import wheel from "../../assets/svg/wheel.svg";
import document from "../../assets/svg/document.svg";

const images = [
  { src: documentLogo, alt: "Document Logo", text: "Statistic Overview" },
  { src: wheel, alt: "Wheel Icon", text: "Automotive Insights" },
  { src: document, alt: "Document Icon", text: "Document Management" }
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
  title: "Why Us?",
  subtitle: "Because we know what is best for you",
}

Main.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default Main;
