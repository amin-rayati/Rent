import React from 'react'
import SingleSlider from '../../Component/Slider/SingleSlider'
import {
  FaBed,
  FaBath,
  FaExpandArrowsAlt,
  FaHouseDamage,
  FaBuilding,
  FaUtensils,
  FaBriefcaseMedical,
  FaFire,
  FaLayerGroup,
} from 'react-icons/fa'

import { AiFillCar } from 'react-icons/ai'
import { BsFillSuitSpadeFill } from 'react-icons/bs'
import { MdOutlinePersonalVideo } from 'react-icons/md'
const Single = () => {
  return (
    <div id='main-wrapper'>
      <section
        class='gallery_parts pt-2 pb-2 d-block d-sm-block d-md-block d-lg-block d-xl-block'
        style={{ marginTop: '100px' }}
      >
        <div class='container'>
          <div class='row align-items-center'>
            <div class='col-lg-12 col-md-12 col-sm-12 pr-1'>
              <SingleSlider />
            </div>
          </div>
        </div>
      </section>
      <section class='pt-4'>
        <div class='container'>
          <div class='row'>
            {/* <!-- property main detail --> */}
            <div class='col-lg-8 col-md-12 col-sm-12 text-right mt-5'>
              <div class='property_info_detail_wrap mb-4'>
                <div class='property_info_detail_wrap_first text-right'>
                  <div class='pr-price-into'>
                    <ul class='prs_lists'>
                      <li>
                        <span class='bed'>3 خواب</span>
                      </li>
                      <li>
                        <span class='bath'>2 حمام</span>
                      </li>
                      <li>
                        <span class='gar'>1 پارکینگ</span>
                      </li>
                      <li>
                        <span class='sqft'>100 متر</span>
                      </li>
                    </ul>
                    <h2 className='mt-5'>خیابان گلستان 12 عظیمیه کرج</h2>
                    <span>
                      <i class='lni-map-marker'></i> خیابان 12
                    </span>
                  </div>
                </div>
              </div>

              <div class='property_block_wrap'>
                <div class='property_block_wrap_header'>
                  <h4 class='property_block_title'>درباره امکانات </h4>
                </div>

                <div class='block-body'>
                  <p>
                    100 متر ویلایی در عظیمیه کرج با ویو بسیار عالی و دارای
                    پارکینگ و کف پارکت و کابینت و دارای دو اتاق خواب مجهز و
                    دارای دو سرویس بهداشتی
                  </p>
                </div>
              </div>

              <div class='property_block_wrap'>
                <div class='property_block_wrap_header'>
                  <h4 class='property_block_title'>امکانات پیشرفته</h4>
                </div>

                <div class='block-body'>
                  <ul class='row p-0 m-0'>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <FaBed />4 خوابه
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <FaBath />2 حمام
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <FaExpandArrowsAlt />
                      100متر
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <FaHouseDamage />1 اتاق پذیرایی
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <FaBuilding />
                      سال ساخت 1395
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <FaUtensils />2 اشپزخانه
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <AiFillCar />
                      پارکینگ
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <FaBriefcaseMedical />
                      بهداشت
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <FaFire />
                      اتشنشانی
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <FaLayerGroup />
                      شهری
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <MdOutlinePersonalVideo />
                      کابل تلویزیون
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <BsFillSuitSpadeFill />
                      فضای خالی
                    </li>
                  </ul>
                </div>
              </div>

              <div class='property_block_wrap'>
                <div class='property_block_wrap_header'>
                  <h4 class='property_block_title'>امکانات رفاهی</h4>
                </div>

                <div class='block-body'>
                  <ul class='avl-features third'>
                    <li class='active'>کولر</li>
                    <li class='active'>استخر</li>
                    <li class='active'>اتاق</li>
                    <li class='active'>باشگاه</li>
                    <li class='active'>آلارم</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class='col-lg-4 col-md-12 col-sm-12'>
              <div class='property-sidebar'>
                {/* <!-- Mortgage Calculator --> */}
                <div class='sider_blocks_wrap Text-right'>
                  <div class='side-booking-header'>
                    <h4 class='m-0'>اطلاعات رهن</h4>
                  </div>

                  <div class='sider-block-body p-3'>
                    <div class='form-group'>
                      <div class='input-with-icon'>
                        <input
                          type='text'
                          class='form-control light'
                          placeholder='پیش'
                        />
                        <i class='ti-money'></i>
                      </div>
                    </div>

                    <div class='form-group'>
                      <div class='input-with-icon'>
                        <input
                          type='text'
                          class='form-control light'
                          placeholder='سال'
                        />
                        <i class='ti-calendar'></i>
                      </div>
                    </div>

                    <div class='form-group'>
                      <div class='input-with-icon'>
                        <input
                          type='text'
                          class='form-control light'
                          placeholder='اجاره'
                        />
                        <i class='fa fa-percent'></i>
                      </div>
                    </div>

                    <button class='btn book_btn theme-bg'>اطلاعات تماس</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Single
