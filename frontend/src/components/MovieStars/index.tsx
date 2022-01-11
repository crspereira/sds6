import { ReactComponent as StarFull } from 'assets/imgs/icon_starfull.svg';
import { ReactComponent as StarHalf} from 'assets/imgs/icon_starhalf.svg';
import { ReactComponent as StarEmpty } from 'assets/imgs/icon_starempty.svg';
import './styles.css';

function MovieStars() {
	return (
		<div className="dsmovie-stars-container">
			<StarFull />
			<StarFull />
			<StarFull />
			<StarHalf />
			<StarEmpty />
		</div>
	);
}

export default MovieStars;