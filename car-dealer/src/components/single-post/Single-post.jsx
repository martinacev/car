import classes from "./Single-post.module.css";
import cars from "../../../public/car-dealer.jpeg";

const SinglePost = () => {
    return (
        <div className={classes.container}>
            <div className={classes.contentImage}>
              <img className={classes.car} src={cars} alt="porche 911" />
            </div>
            <div>
                text ahahahahahahs
            </div>
        </div>
    )
}

export default SinglePost;