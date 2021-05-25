
import NavBar from '../../components/NavBar/NavBar';

import './HomePage.css';

const HomePage = (props) => {
    return (
      <div className="GamePage">
        <NavBar user={props.user} handleLogout={props.handleLogout} />
        <div className="flex-h align-flex-end">
          <div className="grid-area" style={{background: 'blue'}}>
          {/* TODO: Make the below links nav to pages and replace text with icons */}
            <a href="">Calculator</a>
            <a href="">Budget</a>
            <a href="">To do list</a>
            <a href="">Timers</a>
            <a href="">Journal</a>
            <a href="">Workouts</a>
            <a href="">Diet</a>
            <a href="">Weather</a>
          </div>
            
          </div>
        </div>
    );
};
  
export default HomePage;