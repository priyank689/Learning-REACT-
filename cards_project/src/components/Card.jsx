import React from 'react'
import { Bookmark } from "lucide-react";
// import './index.css'
// import { div } from "three/tsl";

const Card = (props) => {
  return (
    <div className='parent'>
      <div className="card">
        <div className="top">
          <img src={props.brandLogo} alt="" />
          <button>
            Save <Bookmark size={18} />
          </button>
        </div>
        <div className="center">
          <div className="content"><h4>{props.company}</h4>
          <p>{props.datePosted}</p></div>
          <h2>{props.post}</h2>
          <div className="group_button">
            <button>{props.tag1}</button>
          <button>{props.tag2}</button>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom_left"><h2>{props.pay}</h2>
          <p>{props.location}</p>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
