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
              <div class='breadcrumbs-wrap text-right'>
                <ol class='breadcrumb'>
                  <li class='' aria-current='page'>
                    درباره ما
                  </li>
                </ol>
                <h2 class='breadcrumb-title text-right'>ما چیکار میکنیم</h2>
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
              <div class='story-wrap explore-content text-right'>
                <h2>داستان اژانس ما</h2>
                <span class='theme-cl'>درمورد ما و شرکت ما بخوانید</span>
                <p class='mt-4'>
                  شرکت ما بهترین شرکت در اجاره خانه است در انواع و قیت های مختلف
                  شرکت ما بهترین شرکت در اجاره خانه است در انواع و قیت های مختلف
                  شرکت ما بهترین شرکت در اجاره خانه است در انواع و قیت های مختلف
                </p>
                <p class='mb-3'>
                  شرکت ما بهترین شرکت در اجاره خانه است در انواع و قیت های مختلف
                  شرکت ما بهترین شرکت در اجاره خانه است در انواع و قیت های مختلف
                  شرکت ما بهترین شرکت در اجاره خانه است در انواع و قیت های مختلف
                </p>
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
                <span class='text-light'>جوایز ما</span>
                <h2 class='font-weight-normal text-light'>
                  بیش از 24000 مشتری راضی در سطح کشور از خدمات ما
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
                  <div className='d-flex'>
                    <h5 class='text-light m-0'>میلیون</h5>
                    <h5 class='text-light m-0'>32</h5>
                  </div>

                  <span class='text-light'>جایزه مردمی</span>
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-md-6 col-sm-6'>
              <div class='_morder_counter'>
                <div class='_morder_counter_thumb'>
                  <BsFillBriefcaseFill />
                </div>
                <div class='_morder_counter_caption'>
                  <div className='d-flex'>
                    <h5 class='text-light m-0'>میلیون</h5>
                    <h5 class='text-light m-0'>32</h5>
                  </div>
                  <span class='text-light'>جایزه کشوری</span>
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-md-6 col-sm-6'>
              <div class='_morder_counter'>
                <div class='_morder_counter_thumb'>
                  <BsFillLightbulbFill />
                </div>
                <div class='_morder_counter_caption'>
                  <div className='d-flex'>
                    <h5 class='text-light m-0'>میلیون</h5>
                    <h5 class='text-light m-0'>32</h5>
                  </div>
                  <span class='text-light'>بازدید</span>
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-md-6 col-sm-6'>
              <div class='_morder_counter'>
                <div class='_morder_counter_thumb'>
                  <FaHeart />
                </div>
                <div class='_morder_counter_caption'>
                  <div className='d-flex'>
                    <h5 class='text-light m-0'>میلیون</h5>
                    <h5 class='text-light m-0'>32</h5>
                  </div>
                  <span class='text-light'>محبوب ترین ها</span>
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
