import React from 'react'
import about1 from '../../Assets/img/immio.jpg'
import { FaHeart } from 'react-icons/fa'
import { BsFillLightbulbFill, BsFillBriefcaseFill } from 'react-icons/bs'
import { GiTrophyCup } from 'react-icons/gi'
const About = () => {
  return (
    <div id='main-wrapper'>
      <div
        class='page-title addBack'
        style={{ marginTop: '80px' }}
        data-overlay='5'
      >
        <div class='container'>
          <div class='row'>
            <div class='col-lg-12 col-md-12'>
              <div class='breadcrumbs-wrap'>
                <ol class='breadcrumb'>
                  <li class='breadcrumb-item active' aria-current='page'>
                    About Us
                  </li>
                </ol>
                <h2 class='breadcrumb-title'>About Us - Who We Are?</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div class='container'>
          {/* <!-- row Start --> */}
          <div class='row align-items-center'>
            <div class='col-lg-6 col-md-6'>
              <div class='story-wrap explore-content'>
                <h2>Our Agency Story</h2>
                <span class='theme-cl'>
                  Check out our company story and work process
                </span>
                <p class='mt-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p class='mb-3'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </p>
                <a href='about-us.html#' class='btn theme-bg btn-rounded'>
                  More About Us
                </a>
              </div>
            </div>

            <div class='col-lg-6 col-md-6'>
              <img src={about1} class='img-fluid rounded' alt='' />
            </div>
          </div>
          {/* <!-- /row -->					 */}
        </div>
      </section>

      <section class='image-cover aboutBack' style={{ marginBottom: '50px' }}>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-xl-7 col-lg-10 col-md-12 col-sm-12'>
              <div class='text-center mb-5'>
                <span class='text-light'>Our Awards</span>
                <h2 class='font-weight-normal text-light'>
                  Over 1,24,000+ Happy User Bieng with us Still they Love Our
                  Services
                </h2>
              </div>
            </div>
          </div>

          <div class='row justify-content-center'>
            <div class='col-lg-3 col-md-6 col-sm-6'>
              <div class='_morder_counter'>
                <div class='_morder_counter_thumb'>
                  <GiTrophyCup />
                </div>
                <div class='_morder_counter_caption'>
                  <h5 class='text-light'>
                    <span>32</span> M
                  </h5>
                  <span class='text-light'>Blue Burmin Award</span>
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-md-6 col-sm-6'>
              <div class='_morder_counter'>
                <div class='_morder_counter_thumb'>
                  <BsFillBriefcaseFill />
                </div>
                <div class='_morder_counter_caption'>
                  <h5 class='text-light'>
                    <span>43</span> M
                  </h5>
                  <span class='text-light'>Mimo X11 Award</span>
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-md-6 col-sm-6'>
              <div class='_morder_counter'>
                <div class='_morder_counter_thumb'>
                  <BsFillLightbulbFill />
                </div>
                <div class='_morder_counter_caption'>
                  <h5 class='text-light'>
                    <span>51</span> M
                  </h5>
                  <span class='text-light'>Australian UGC Award</span>
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-md-6 col-sm-6'>
              <div class='_morder_counter'>
                <div class='_morder_counter_thumb'>
                  <FaHeart />
                </div>
                <div class='_morder_counter_caption'>
                  <h5 class='text-light'>
                    <span>42</span> M
                  </h5>
                  <span class='text-light'>Johnson Green Award</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
