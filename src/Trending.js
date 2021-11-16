import React from 'react';
import pic1 from './images/Allan.jpg';
import pic2 from './images/azawi.jpg';
import pic3 from './images/b2c.jpg';
import pic4 from './images/hellen.jpg';
import pic5 from './images/john1.jpg';
import pic6 from './images/kenzo3.jpg';
import pic7 from './images/lydia.jpg';
import pic8 from './images/panda.sheeba.jpg';

const Trending = () => {
    return (
      <div>

        <div className="page">
           
          <img src={pic6} alt="" />
          <button> Download </button>

          <img src={pic7} alt="" />
          <button> Download </button>

          <img src={pic8} alt="" />
          <button> Download </button>

          <img src={pic1} alt="" />
            <button> Download </button>

          <img src={pic2} alt="" />
          <button> Download </button>

          <img src={pic3} alt="" />
          <button> Download </button>

          <img src={pic4} alt="" />
          <button> Download </button>

          <img src={pic5} alt="" />
          <button> Download </button>


        </div>
      </div>
    )
}

export default Trending
