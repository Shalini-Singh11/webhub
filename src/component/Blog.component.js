import React from 'react'
import Spaceget_in_touch from './assests/imagesAll/Spaceget_in_touch.png';
export default function Blog() {
  return (
    <>
       <section className="contact-page-banner">
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                            <div className="col-md-6 contact_us_webm">
                             <img src={Spaceget_in_touch} className='w-100' alt='coming-soon'/>    
                                 
                            </div>
                            <div className="col-md-4 Mission-main-heading-paragraph">
                                <h1 className="Mission-main-heading">
                                Coming Soon
                                </h1>
                            </div>
                        </div>
                </div>
            </section>
    </>
  )
}
