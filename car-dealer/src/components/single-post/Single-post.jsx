import classes from "./Single-post.module.css";
import cars from "../../../public/car-dealer.jpeg";
import PropTypes from 'prop-types';

const SinglePost = ({title, subtitle, text}) => {
    return (
        <div className={classes.container}>
            <div className={classes.contentImage}>
              <img className={classes.car} src={cars} alt="porche 911" />
            </div>
            <div className={classes.content}>
                <h3 className={classes.title}>{title}</h3>
                <h1 className={classes.subtitle}>{subtitle}</h1>
                <p className={classes.text}>{text}</p>
            </div>
        </div>
    )
}

SinglePost.defaultProps = {
    title: "ABOUT THE COMPANY",
    subtitle: "Find your dream car and start your adventure",
    text: "Experience seamless car rentals with us. Our dedicated team ensures a smooth process from booking to drop-off. Travel with ease and confidence knowing we have your back."
}

SinglePost.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string,
}

export default SinglePost;