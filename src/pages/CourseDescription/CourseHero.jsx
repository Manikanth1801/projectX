import React, { Fragment } from 'react'

function CourseHero() {
    return (
       <Fragment>
            <div className="course-detailsHero container-fluid">
        <div className="row">
          <div className="col-12 heroLeft col-md-8 col-lg-8 d-flex align-items-center border h-100">

                    <div className="jumbotron text-white bg-transparent">
                
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    </div>

              
              {/* <div className="courseHeroContent ">
                  <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis ullam eaque assumenda, enim perferendis nisi neque ducimus sunt debitis dolores expedita possimus sit iure quia molestias a libero maxime quasi vitae veniam est ipsum at. Veritatis molestias quos asperiores et tempora sit ab nobis quod ipsam, autem quidem enim cumque.</p>
              </div> */}
          </div>
          <div className="col-12 col-md-4 col-lg-4">
          <div className="jumbotron text-white bg-transparent">
                    <h1 class="display-4">Hello, world!</h1>
                    <button className="btn btn-primary btn-block">Register Here</button>
                    </div>

          </div>
        </div>
      </div>
       </Fragment>
    )
}

export default CourseHero
