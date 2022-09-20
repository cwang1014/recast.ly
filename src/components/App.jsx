import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '/compiled/src/data/exampleVideoData.js';

const App = () => {
  const [chosen, setChosen] = React.useState('');



  // function handleChoice()

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><Search /></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div>
            <h5>
              <VideoPlayer videos={exampleVideoData}/>
            </h5>
          </div>
        </div>
        <div className="col-md-5">
          <div>
            <h5 onClick={(event) => { console.log(event.target); }}>
              <VideoList videos={exampleVideoData}/>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
