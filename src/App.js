import React from 'react';

import './styles.css';
import Myimg from './assets/working-walking-01.png'
import Myvideo from './assets/reactjs.mp4'

function App() {
  return (
    <div className="App">
      <div className="titre">
        <h1><span className='orange'>WELCOME.</span> To My First App</h1>
      </div>
      <div className='images'>
      <img className='img1' src='/working-laptop-01.png' />
      <img className='img2' src={Myimg}/>
      </div>
      <div>
        <div className='content'>
          <div className='text-content'>Please watch this video</div>
          <div className='video-content'>
        <video width="600" height="340" controls className='myvideo'>
          <source src={Myvideo} type='video/mp4'/>
        </video>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
