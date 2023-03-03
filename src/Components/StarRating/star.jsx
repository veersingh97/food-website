import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import './star.css';


const StarRatings = ({ star }) => {
    // console.log(star)
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {star >= index + 1 ? (
          <BsStarFill className="star-icon" />
        ) : star >= number ? (
          <BsStarHalf className="star-icon" />
        ) : (
          <BsStar className="star-icon" />
        )}
      </span>
    );
  });
  return <div className="star-div">{ratingStar}</div>;
};

export default StarRatings;