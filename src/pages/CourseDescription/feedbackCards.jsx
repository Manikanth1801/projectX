import React, { Fragment } from 'react';

import testing from './testing.jpg'


export default function FeedbackCard() {


  return (
    <Fragment>
       <div className="container">
          <div className="row align-self-center">
          <div className="col-sm-12 col-md-4 col-lg-4 my-2">
            <div className="card px-2" style={{width: "18rem"}}>
              <img className="card-img-top my-2 py-2 " src={testing} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                  <a href="#" className="">Anita Richards</a>,
                  <span className="_tm-user-role">HR Manager</span>
                </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 my-2">
            <div className="card px-2" style={{width: "18rem"}}>
              <img className="card-img-top my-2 py-2 " src={testing} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                  <a href="#" className="">Anita Richards</a>,
                  <span className="_tm-user-role">HR Manager</span>
                </div>
            </div>
          </div><div className="col-sm-12 col-md-4 col-lg-4 my-2">
            <div className="card px-2" style={{width: "18rem"}}>
              <img className="card-img-top my-2 py-2 " src={testing} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                  <a href="#" className="">Anita Richards</a>,
                  <span className="_tm-user-role">HR Manager</span>
                </div>
            </div>
          </div>
         </div>
    </div>
   </Fragment>
  );
}
