import React from 'react'
import AgentSlider from '../../Component/Slider/AgentSlider'
import ReviewSlider from '../../Component/Slider/ReviewSlider'
import { BiCommentDetail } from 'react-icons/bi'
import Select from 'react-select'
import award1 from '../../Assets/img/award-1.png'
import award2 from '../../Assets/img/award-2.png'
import award5 from '../../Assets/img/award-5.png'
import { Link, NavLink } from 'react-router-dom'
import f1 from '../../Assets/img/f-1.png'
import f11 from '../../Assets/img/f-11.png'

import f2 from '../../Assets/img/f-2.png'
import f22 from '../../Assets/img/f-22.png'

import f3 from '../../Assets/img/f-3.png'
import f33 from '../../Assets/img/f-33.png'

import f4 from '../../Assets/img/f-4.png'
import f44 from '../../Assets/img/f-44.png'

import f5 from '../../Assets/img/f-5.png'
import f55 from '../../Assets/img/f-55.png'

import f6 from '../../Assets/img/f-6.png'
import f66 from '../../Assets/img/f-66.png'

import f7 from '../../Assets/img/f-7.png'
import f77 from '../../Assets/img/f-77.png'

import f8 from '../../Assets/img/f-8.png'
import f88 from '../../Assets/img/f-88.png'

import p1 from '../../Assets/img/p-1.png'
import p4 from '../../Assets/img/p-4.png'
import p7 from '../../Assets/img/p-7.png'

import b1 from '../../Assets/img/b-1.jpg'
import user1 from '../../Assets/img/user-1.jpg'

import { FaSearch, FaHeart } from 'react-icons/fa'
const Home = () => {
  const street = [
    { label: 'بهشتی', value: 'بهشتی' },
    { label: 'طالقانی', value: 'طالقانی' },
    { label: 'شهدا', value: 'شهدا' },
    { label: 'باغستان', value: 'باغستان' },
    { label: 'شاهین ویلا', value: 'شاهین ویلا' },
  ]
  const type = [
    { label: 'ویلایی', value: 'ویلایی' },
    { label: 'اپارتمان', value: 'اپارتمان' },
    { label: 'دفتر', value: 'دفتر' },
  ]
  const price = [
    { label: '100000000', value: '10000000' },
    { label: '250000000', value: '250000000' },
  ]
  return (
    <>
      <div id='main-wrapper'>
        <div class='image-cover hero_banner headerBac' data-overlay='0'>
          <div class='container'>
            <h1 class='big-header-capt mb-0'>خونه بعدیتو پیدا کن</h1>
            <p class='text-center mb-4'>
              بهترین خونه های شهرتو ببین و اجاره کن
            </p>
            {/* <!-- Type --> */}
            <div class='row justify-content-center'>
              <div class='col-xl-10 col-lg-11 col-md-12'>
                <div class='full_search_box nexio_search lightanic_search hero_search-radius modern'>
                  <div class='search_hero_wrapping'>
                    <div class='row'>
                      <div class='col-lg-4 col-md-3 col-sm-12'>
                        <div class='form-group text-right'>
                          <label>شهر/خیابان</label>
                          <div class='input-with-icon'>
                            <Select
                              style={{ zIndex: '999' }}
                              options={street}
                            />
                          </div>
                        </div>
                      </div>

                      <div class='col-lg-3 col-md-3 col-sm-12'>
                        <div class='form-group text-right'>
                          <label>نوع ملک</label>
                          <div class='input-with-icon'>
                            <Select style={{ zIndex: '999' }} options={type} />
                          </div>
                        </div>
                      </div>

                      <div class='col-lg-4 col-md-4 col-sm-12'>
                        <div class='form-group none text-right'>
                          <label>قیمت</label>
                          <div class='input-with-icon'>
                            <Select style={{ zIndex: '999' }} options={price} />
                          </div>
                        </div>
                      </div>

                      <Link
                        class='col-lg-1 col-md-2 col-sm-12 small-padd'
                        to='/search'
                      >
                        <div>
                          <div class='form-group none'>
                            <a class='btn search-btn'>
                              <FaSearch />
                            </a>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class='p-0'>
          <div class='container'>
            <div class='row justify-content-center'>
              <div class='col-xl-11 col-lg-11 col-md-12'>
                <div class='_awards_group'>
                  <ul class='_awards_lists'>
                    {/* <!-- single list --> */}
                    <li>
                      <div class='_awards_list_wrap'>
                        <div class='_awards_list_thumb'>
                          <img src={award1} class='img-fluid' alt='' />
                        </div>
                        <div class='_awards_list_caption'>
                          <h5 class='theme-cl'>2021</h5>
                          <span>جوایز سالانه</span>
                        </div>
                      </div>
                    </li>
                    {/* <!-- single list --> */}
                    <li>
                      <div class='_awards_list_wrap'>
                        <div class='_awards_list_thumb'>
                          <img src={award5} class='img-fluid' alt='' />
                        </div>
                        <div class='_awards_list_caption'>
                          <h5 class='theme-cl-2'>2019</h5>
                          <span>جوایز مردمی</span>
                        </div>
                      </div>
                    </li>
                    {/* <!-- single list --> */}
                    <li>
                      <div class='_awards_list_wrap'>
                        <div class='_awards_list_thumb'>
                          <img src={award2} class='img-fluid' alt='' />
                        </div>
                        <div class='_awards_list_caption'>
                          <h5 class='text-warning'>2015</h5>
                          <span>سیمرغ</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class='min'>
          <div class='container'>
            <div class='row justify-content-center'>
              <div class='col-lg-7 col-md-8'>
                <div class='sec-heading center'>
                  <h2>دسته بندی ها</h2>
                  <p>دسته بندی خونه های اجاره ای را در شهر خود انتخاب کنید</p>
                </div>
              </div>
            </div>

            <div class='row justify-content-center mt-4'>
              {/* <!-- Single Category --> */}
              <Link to='/search' class='col-lg-3 col-md-4 col-sm-6'>
                <div>
                  <div class='_category_box'>
                    <a>
                      <div class='_category_elio'>
                        <div class='_category_thumb'>
                          <img src={f1} class='img-fluid hover' alt='' />
                          <img src={f11} class='img-fluid simple' alt='' />
                        </div>
                        <div class='_category_caption'>
                          <h5 style={{ textDecoration: 'none' }}>دفتری</h5>
                          <span>22 مورد</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Link>
              {/* <!-- Single Category --> */}
              <Link to='/search' class='col-lg-3 col-md-4 col-sm-6'>
                <div>
                  <div class='_category_box'>
                    <a>
                      <div class='_category_elio'>
                        <div class='_category_thumb'>
                          <img src={f2} class='img-fluid hover' alt='' />
                          <img src={f22} class='img-fluid simple' alt='' />
                        </div>
                        <div class='_category_caption'>
                          <h5 style={{ textDecoration: 'none' }}>صنعتی</h5>
                          <span>22 مورد</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Link>
              {/* <!-- Single Category --> */}
              <Link to='/search' class='col-lg-3 col-md-4 col-sm-6'>
                <div>
                  <div class='_category_box'>
                    <a>
                      <div class='_category_elio'>
                        <div class='_category_thumb'>
                          <img src={f3} class='img-fluid hover' alt='' />
                          <img src={f33} class='img-fluid simple' alt='' />
                        </div>
                        <div class='_category_caption'>
                          <h5 style={{ textDecoration: 'none' }}>اپارتمان</h5>
                          <span>85 مورد</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Link>
              {/* <!-- Single Category --> */}
              <Link to='/search' class='col-lg-3 col-md-4 col-sm-6'>
                <div>
                  <div class='_category_box'>
                    <a>
                      <div class='_category_elio'>
                        <div class='_category_thumb'>
                          <img src={f4} class='img-fluid hover' alt='' />
                          <img src={f44} class='img-fluid simple' alt='' />
                        </div>
                        <div class='_category_caption'>
                          <h5 style={{ textDecoration: 'none' }}>تبلیغاتی</h5>
                          <span>79 مورد</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Link>
              {/* <!-- Single Category --> */}
              <Link to='/search' class='col-lg-3 col-md-4 col-sm-6'>
                <div>
                  <div class='_category_box'>
                    <a>
                      <div class='_category_elio'>
                        <div class='_category_thumb'>
                          <img src={f5} class='img-fluid hover' alt='' />
                          <img src={f55} class='img-fluid simple' alt='' />
                        </div>
                        <div class='_category_caption'>
                          <h5 style={{ textDecoration: 'none' }}>
                            خانه و ویلا
                          </h5>
                          <span>22 مورد</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Link>
              {/* <!-- Single Category --> */}
              <Link to='/search' class='col-lg-3 col-md-4 col-sm-6'>
                <div>
                  <div class='_category_box'>
                    <a>
                      <div class='_category_elio'>
                        <div class='_category_thumb'>
                          <img src={f6} class='img-fluid hover' alt='' />
                          <img src={f66} class='img-fluid simple' alt='' />
                        </div>
                        <div class='_category_caption'>
                          <h5 style={{ textDecoration: 'none' }}>تعمیرگاه</h5>
                          <span>22 مورد</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Link>
              {/* <!-- Single Category --> */}
              <Link to='/search' class='col-lg-3 col-md-4 col-sm-6'>
                <div>
                  <div class='_category_box'>
                    <a>
                      <div class='_category_elio'>
                        <div class='_category_thumb'>
                          <img src={f7} class='img-fluid hover' alt='' />
                          <img src={f77} class='img-fluid simple' alt='' />
                        </div>
                        <div class='_category_caption'>
                          <h5 style={{ textDecoration: 'none' }}>استودیو</h5>
                          <span>72 مورد</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Link>
              {/* <!-- Single Category --> */}
              <Link to='/search' class='col-lg-3 col-md-4 col-sm-6'>
                <div>
                  <div class='_category_box'>
                    <a>
                      <div class='_category_elio'>
                        <div class='_category_thumb'>
                          <img src={f8} class='img-fluid hover' alt='' />
                          <img src={f88} class='img-fluid simple' alt='' />
                        </div>
                        <div class='_category_caption'>
                          <h5 style={{ textDecoration: 'none' }}>ویلایی</h5>
                          <span>102 مورد</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section class='pt-0 min'>
          <div class='container'>
            <div class='row justify-content-center'>
              <div class='col-lg-7 col-md-8'>
                <div class='sec-heading center'>
                  <h2>موارد پیشنهادی</h2>
                  <p>بهترین ها را با ما تجربه کنید</p>
                </div>
              </div>
            </div>

            <div class='row justify-content-center'>
              {/* <!-- Single Property --> */}
              <Link to='/search' class='col-lg-4 col-md-6 col-sm-12'>
                <div>
                  <div
                    class='property-listing property-2'
                    style={{ textAlign: 'end' }}
                  >
                    <div class='listing-img-wrapper'>
                      <div class='_exlio_125'>اجاره</div>
                      <div class='list-img-slide'>
                        <div class='click'>
                          <div>
                            <a>
                              <img src={p1} class='img-fluid mx-auto' alt='' />
                            </a>
                          </div>
                          <div>
                            <a>
                              <img
                                src='assets/img/p-2.png'
                                class='img-fluid mx-auto'
                                alt=''
                              />
                            </a>
                          </div>
                          <div>
                            <a>
                              <img
                                src='assets/img/p-3.png'
                                class='img-fluid mx-auto'
                                alt=''
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class='listing-detail-wrapper'>
                      <div class='listing-short-detail-wrap'>
                        <div class='_card_list_flex mb-2'>
                          <div class='_card_flex_01'>
                            <span class='_list_blickes _netork'>4 شبکه</span>
                            <span class='_list_blickes types'>ویلایی</span>
                          </div>
                          <div class='_card_flex_last d-flex'>
                            <h6 class='listing-card-info-price mb-0'>تومان,</h6>
                            <h6 class='listing-card-info-price mb-0'>
                              6,700
                            </h6>{' '}
                          </div>
                        </div>
                        <div class='_card_list_flex'>
                          <div class='_card_flex_01'>
                            <h4 class='listing-name verified'>
                              <a class='prt-link-detail'>کرج بهشتی ویلای دوم</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class='price-features-wrapper'>
                      <div class='list-fx-features'>
                        <div class='listing-card-info-icon'>
                          <div class='inc-fleat-icon'>
                            <img src='assets/img/bed.svg' width='13' alt='' />
                          </div>
                          4 خواب
                        </div>
                        <div class='listing-card-info-icon'>
                          <div class='inc-fleat-icon'>
                            <img
                              src='assets/img/bathtub.svg'
                              width='13'
                              alt=''
                            />
                          </div>
                          2 حمام
                        </div>
                        <div class='listing-card-info-icon'>
                          <div class='inc-fleat-icon'>
                            <img src='assets/img/move.svg' width='13' alt='' />
                          </div>
                          820 متر
                        </div>
                      </div>
                    </div>

                    <div class='listing-detail-footer'>
                      <div class='footer-first'>
                        <div class='foot-location'>
                          <img src='assets/img/pin.svg' width='18' alt='' />
                          کرج
                        </div>
                      </div>
                      <div class='footer-flex'>
                        <ul class='selio_style'>
                          <li>
                            <div class='prt_saveed_12lk'>
                              <label
                                class='toggler toggler-danger'
                                data-toggle='tooltip'
                                data-placement='top'
                                data-original-title='Save property'
                              >
                                <input type='checkbox' />
                                <FaHeart />
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              {/* <!-- End Single Property --> */}

              {/* <!-- Single Property --> */}
              <Link to='/search' class='col-lg-4 col-md-6 col-sm-12'>
                <div>
                  <div
                    class='property-listing property-2'
                    style={{ textAlign: 'end' }}
                  >
                    <div class='listing-img-wrapper'>
                      <div class='_exlio_125'>اجاره</div>
                      <div class='list-img-slide'>
                        <div class='click'>
                          <div>
                            <a>
                              <img src={p1} class='img-fluid mx-auto' alt='' />
                            </a>
                          </div>
                          <div>
                            <a>
                              <img
                                src='assets/img/p-2.png'
                                class='img-fluid mx-auto'
                                alt=''
                              />
                            </a>
                          </div>
                          <div>
                            <a>
                              <img
                                src='assets/img/p-3.png'
                                class='img-fluid mx-auto'
                                alt=''
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class='listing-detail-wrapper'>
                      <div class='listing-short-detail-wrap'>
                        <div class='_card_list_flex mb-2'>
                          <div class='_card_flex_01'>
                            <span class='_list_blickes _netork'>4 شبکه</span>
                            <span class='_list_blickes types'>ویلایی</span>
                          </div>
                          <div class='_card_flex_last d-flex'>
                            <h6 class='listing-card-info-price mb-0'>تومان,</h6>
                            <h6 class='listing-card-info-price mb-0'>
                              6,700
                            </h6>{' '}
                          </div>
                        </div>
                        <div class='_card_list_flex'>
                          <div class='_card_flex_01'>
                            <h4 class='listing-name verified'>
                              <a class='prt-link-detail'>کرج بهشتی ویلای دوم</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class='price-features-wrapper'>
                      <div class='list-fx-features'>
                        <div class='listing-card-info-icon'>
                          <div class='inc-fleat-icon'>
                            <img src='assets/img/bed.svg' width='13' alt='' />
                          </div>
                          4 خواب
                        </div>
                        <div class='listing-card-info-icon'>
                          <div class='inc-fleat-icon'>
                            <img
                              src='assets/img/bathtub.svg'
                              width='13'
                              alt=''
                            />
                          </div>
                          2 حمام
                        </div>
                        <div class='listing-card-info-icon'>
                          <div class='inc-fleat-icon'>
                            <img src='assets/img/move.svg' width='13' alt='' />
                          </div>
                          820 متر
                        </div>
                      </div>
                    </div>

                    <div class='listing-detail-footer'>
                      <div class='footer-first'>
                        <div class='foot-location'>
                          <img src='assets/img/pin.svg' width='18' alt='' />
                          کرج
                        </div>
                      </div>
                      <div class='footer-flex'>
                        <ul class='selio_style'>
                          <li>
                            <div class='prt_saveed_12lk'>
                              <label
                                class='toggler toggler-danger'
                                data-toggle='tooltip'
                                data-placement='top'
                                data-original-title='Save property'
                              >
                                <input type='checkbox' />
                                <FaHeart />
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              {/* <!-- End Single Property --> */}

              {/* <!-- Single Property --> */}
              <Link to='/search' class='col-lg-4 col-md-6 col-sm-12'>
                <div>
                  <div
                    class='property-listing property-2'
                    style={{ textAlign: 'end' }}
                  >
                    <div class='listing-img-wrapper'>
                      <div class='_exlio_125'>اجاره</div>
                      <div class='list-img-slide'>
                        <div class='click'>
                          <div>
                            <a>
                              <img src={p1} class='img-fluid mx-auto' alt='' />
                            </a>
                          </div>
                          <div>
                            <a>
                              <img
                                src='assets/img/p-2.png'
                                class='img-fluid mx-auto'
                                alt=''
                              />
                            </a>
                          </div>
                          <div>
                            <a>
                              <img
                                src='assets/img/p-3.png'
                                class='img-fluid mx-auto'
                                alt=''
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class='listing-detail-wrapper'>
                      <div class='listing-short-detail-wrap'>
                        <div class='_card_list_flex mb-2'>
                          <div class='_card_flex_01'>
                            <span class='_list_blickes _netork'>4 شبکه</span>
                            <span class='_list_blickes types'>ویلایی</span>
                          </div>
                          <div class='_card_flex_last d-flex'>
                            <h6 class='listing-card-info-price mb-0'>تومان,</h6>
                            <h6 class='listing-card-info-price mb-0'>
                              6,700
                            </h6>{' '}
                          </div>
                        </div>
                        <div class='_card_list_flex'>
                          <div class='_card_flex_01'>
                            <h4 class='listing-name verified'>
                              <a class='prt-link-detail'>کرج بهشتی ویلای دوم</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class='price-features-wrapper'>
                      <div class='list-fx-features'>
                        <div class='listing-card-info-icon'>
                          <div class='inc-fleat-icon'>
                            <img src='assets/img/bed.svg' width='13' alt='' />
                          </div>
                          4 خواب
                        </div>
                        <div class='listing-card-info-icon'>
                          <div class='inc-fleat-icon'>
                            <img
                              src='assets/img/bathtub.svg'
                              width='13'
                              alt=''
                            />
                          </div>
                          2 حمام
                        </div>
                        <div class='listing-card-info-icon'>
                          <div class='inc-fleat-icon'>
                            <img src='assets/img/move.svg' width='13' alt='' />
                          </div>
                          820 متر
                        </div>
                      </div>
                    </div>

                    <div class='listing-detail-footer'>
                      <div class='footer-first'>
                        <div class='foot-location'>
                          <img src='assets/img/pin.svg' width='18' alt='' />
                          کرج
                        </div>
                      </div>
                      <div class='footer-flex'>
                        <ul class='selio_style'>
                          <li>
                            <div class='prt_saveed_12lk'>
                              <label
                                class='toggler toggler-danger'
                                data-toggle='tooltip'
                                data-placement='top'
                                data-original-title='Save property'
                              >
                                <input type='checkbox' />
                                <FaHeart />
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              {/* <!-- End Single Property --> */}
            </div>
          </div>
        </section>

        <section
          class='image-cover min imgCover'
          style={{ backgroundImage: 'url(../../Assets/img/pattern.png)' }}
        >
          <div class='container'>
            <div class='row justify-content-center'>
              <div class='col-lg-7 col-md-8'>
                <div class='sec-heading center light'>
                  <h2>مشاوران ما</h2>
                  <p>بهترین مشاوران ملکی</p>
                </div>
              </div>
            </div>
            <AgentSlider />
          </div>
        </section>

        <section class='min'>
          <div class='container'>
            <div class='row justify-content-center'>
              <div class='col-lg-7 col-md-8'>
                <div class='sec-heading center'>
                  <h2>بهترین موارد برای اجاره</h2>
                  <p>بهترین موارد برای اجاره را با ما تجربه کنید در رنت ملک</p>
                </div>
              </div>
            </div>

            <div class='row justify-content-center'>
              <div class='col-lg-4 col-md-4 col-sm-6'>
                <a class='img-wrap'>
                  <div class='location_wrap_content visible'>
                    <div class='location_wrap_content_first text-right'>
                      <h4>کرج.البرز</h4>
                      <span>48 مورد</span>
                    </div>
                    <div class='location_btn'>
                      <i class='fa fa-arrow-right'></i>
                    </div>
                  </div>
                  <div class='img-wrap-background property1'></div>
                </a>
              </div>

              <div class='col-lg-4 col-md-4 col-sm-6'>
                <a class='img-wrap'>
                  <div class='location_wrap_content visible'>
                    <div class='location_wrap_content_first text-right'>
                      <h4>کرج نظر اباد</h4>
                      <span>73 مورد</span>
                    </div>
                    <div class='location_btn'>
                      <i class='fa fa-arrow-right'></i>
                    </div>
                  </div>
                  <div class='img-wrap-background property2'></div>
                </a>
              </div>

              <div class='col-lg-4 col-md-4 col-sm-6'>
                <a class='img-wrap'>
                  <div class='location_wrap_content visible'>
                    <div class='location_wrap_content_first text-right'>
                      <h4>کرج گوهردشت</h4>
                      <span>40 مورد</span>
                    </div>
                    <div class='location_btn'>
                      <i class='fa fa-arrow-right'></i>
                    </div>
                  </div>
                  <div class='img-wrap-background property3'></div>
                </a>
              </div>

              <div class='col-lg-6 col-md-6 col-sm-6'>
                <a class='img-wrap'>
                  <div class='location_wrap_content visible'>
                    <div class='location_wrap_content_first text-right'>
                      <h4>عظیمیه</h4>
                      <span>35 مورد</span>
                    </div>
                    <div class='location_btn'>
                      <i class='fa fa-arrow-right'></i>
                    </div>
                  </div>
                  <div class='img-wrap-background property4'></div>
                </a>
              </div>

              <div class='col-lg-6 col-md-6 col-sm-6'>
                <a class='img-wrap'>
                  <div class='location_wrap_content visible'>
                    <div class='location_wrap_content_first text-right'>
                      <h4>هشتگرد</h4>
                      <span>10 مورد</span>
                    </div>
                    <div class='location_btn'>
                      <i class='fa fa-arrow-right'></i>
                    </div>
                  </div>
                  <div class='img-wrap-background property5'></div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class='gray-simple'>
          <div class='container'>
            <div class='row justify-content-center'>
              <div class='col-lg-7 col-md-8'>
                <div class='sec-heading center'>
                  <h2>بهترین بازدید ها توسط مشتریان</h2>
                  <p>نظرات مشتریان درمورد ما</p>
                </div>
              </div>
            </div>

            <div class='row'>
              <div class='col-lg-12 col-md-12'>
                <ReviewSlider />
              </div>
            </div>
          </div>
        </section>

        <section class='min'>
          <div class='container'>
            <div class='row justify-content-center'>
              <div class='col-lg-7 col-md-8'>
                <div class='sec-heading center'>
                  <h2>آخرین اخبار</h2>
                  <p>جدید ترین اخبار ملکی را با ما تجربه کنید</p>
                </div>
              </div>
            </div>

            <div class='row justify-content-center'>
              {/* <!-- Single blog Grid --> */}
              <div class='col-lg-4 col-md-6'>
                <div class='grid_blog_box'>
                  <div class='gtid_blog_thumb'>
                    <a>
                      <img src={b1} class='img-fluid' alt='' />
                    </a>
                    <div class='gtid_blog_info'>
                      <span>12</span>مهر 2021
                    </div>
                  </div>

                  <div class='blog-body text-right'>
                    <h4 class='bl-title'>
                      <a>طراحی خلااقانه</a>
                    </h4>
                    <p>جدید ترین اخبار در مورد ما</p>
                  </div>

                  <div class='modern_property_footer'>
                    <div class='property-author'>
                      <div class='path-img'>
                        <a tabindex='-1'>
                          <img src={user1} class='img-fluid' alt='' />
                        </a>
                      </div>
                      <h5>
                        <a tabindex='-1'>امین رعیتی</a>
                      </h5>
                    </div>
                    <span class='article-pulish-date'>
                      <BiCommentDetail />
                      202
                    </span>
                  </div>
                </div>
              </div>
              <div class='col-lg-4 col-md-6'>
                <div class='grid_blog_box'>
                  <div class='gtid_blog_thumb'>
                    <a>
                      <img src={b1} class='img-fluid' alt='' />
                    </a>
                    <div class='gtid_blog_info'>
                      <span>12</span>مهر 2021
                    </div>
                  </div>

                  <div class='blog-body text-right'>
                    <h4 class='bl-title'>
                      <a>طراحی خلااقانه</a>
                    </h4>
                    <p>جدید ترین اخبار در مورد ما</p>
                  </div>

                  <div class='modern_property_footer'>
                    <div class='property-author'>
                      <div class='path-img'>
                        <a tabindex='-1'>
                          <img src={user1} class='img-fluid' alt='' />
                        </a>
                      </div>
                      <h5>
                        <a tabindex='-1'>امین رعیتی</a>
                      </h5>
                    </div>
                    <span class='article-pulish-date'>
                      <BiCommentDetail />
                      202
                    </span>
                  </div>
                </div>
              </div>
              <div class='col-lg-4 col-md-6'>
                <div class='grid_blog_box'>
                  <div class='gtid_blog_thumb'>
                    <a>
                      <img src={b1} class='img-fluid' alt='' />
                    </a>
                    <div class='gtid_blog_info'>
                      <span>12</span>مهر 2021
                    </div>
                  </div>

                  <div class='blog-body text-right'>
                    <h4 class='bl-title'>
                      <a>طراحی خلااقانه</a>
                    </h4>
                    <p>جدید ترین اخبار در مورد ما</p>
                  </div>

                  <div class='modern_property_footer'>
                    <div class='property-author'>
                      <div class='path-img'>
                        <a tabindex='-1'>
                          <img src={user1} class='img-fluid' alt='' />
                        </a>
                      </div>
                      <h5>
                        <a tabindex='-1'>امین رعیتی</a>
                      </h5>
                    </div>
                    <span class='article-pulish-date'>
                      <BiCommentDetail />
                      202
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
