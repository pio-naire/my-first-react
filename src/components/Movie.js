import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./Movie.module.css";

export default function Movie(props) {
  const { id, coverImg, title, year, genres, summary } = props;

  return (
    <Link to={`/movie/${id}`}>
      <div className={style.wrapper}>
        <img className={style.img} src={coverImg} alt={title}></img>
        <div className={style.text}>
          <h2 className={style.title}>{title}</h2>
          <span>
            <span className={style.year}>{year}</span>
            <ul className={style.genre}>
              {genres.map((g, index) => (
                <li>{g}</li>
              ))}
            </ul>
          </span>
          <p className={style.summary}>
            {summary.length > 200 ? `${summary.slice(0, 200)}...` : summary}
          </p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  year: PropTypes.string || PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};
