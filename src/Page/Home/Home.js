import React from 'react'
import AgentSlider from '../../Component/Slider/AgentSlider'
import ReviewSlider from '../../Component/Slider/ReviewSlider'
import { BiCommentDetail } from 'react-icons/bi'
import Select from 'react-select'
import award1 from '../../Assets/img/award-1.png'
import award2 from '../../Assets/img/award-2.png'
import award5 from '../../Assets/img/award-5.png'

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

import { FaSearch } from 'react-icons/fa'
const Home = () => {
  const aquaticCreatures = [
    { label: 'Shark', value: 'Shark' },
    { label: 'Dolphin', value: 'Dolphin' },
    { label: 'Whale', value: 'Whale' },
    { label: 'Octopus', value: 'Octopus' },
    { label: 'Crab', value: 'Crab' },
    { label: 'Lobster', value: 'Lobster' },
  ]
  return (
    <>
      <div id='main-wrapper'>
        <div class='image-cover hero_banner headerBac' data-overlay='0'>
          <div class='container'>
            <h1 class='big-header-capt mb-0'>Search Your Next Home</h1>
            <p class='text-center mb-4'>
              Find new & featured property located in your local city.
            </p>
            {/* <!-- Type --> */}
            <div class='row justify-content-center'>
              <div class='col-xl-10 col-lg-11 col-md-12'>
                <div class='full_search_box nexio_search lightanic_search hero_search-radius modern'>
                  <div class='search_hero_wrapping'>
                    <div class='row'>
                      <div class='col-lg-4 col-md-3 col-sm-12'>
                        <div class='form-group'>
                          <label>City/Street</label>
                          <div class='input-with-icon'>
                            <Select
                              style={{ zIndex: '999' }}
                              options={aquaticCreatures}
                            />
                          </div>
                        </div>
                      </div>

                      <div class='col-lg-3 col-md-3 col-sm-12'>
                        <div class='form-group'>
                          <label>Property Type</label>
                          <div class='input-with-icon'>
                            <Select
                              style={{ zIndex: '999' }}
                              options={aquaticCreatures}
                            />
                          </div>
                        </div>
                      </div>

                      <div class='col-lg-4 col-md-4 col-sm-12'>
                        <div class='form-group none'>
                          <label>Price Range</label>
                          <div class='input-with-icon'>
                            <Select
                              style={{ zIndex: '999' }}
                              options={aquaticCreatures}
                            />
                          </div>
                        </div>
                      </div>

                      <div class='col-lg-1 col-md-2 col-sm-12 small-padd'>
                        <div class='form-group none'>
                          <a
                            href='grid-layout-with-sidebar.html'
                            class='btn search-btn'
                          >
                            <FaSearch />
                          </a>
                        </div>
                      </div>
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
                          <span>Annual Awards</span>
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
                          <span>Airbnb Award</span>
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
                          <span>Johnson Green Award</span>
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
                  <h2>Choose Your Category</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </div>

            <div class='row justify-content-center mt-4'>
              {/* <!-- Single Category --> */}
              <div class='col-lg-3 col-md-4 col-sm-6'>
                <div class='_category_box'>
                  <a href='list-layout-with-sidebar.html'>
                    <div class='_category_elio'>
                      <div class='_category_thumb'>
                        <img src={f1} class='img-fluid hover' alt='' />
                        <img src={f11} class='img-fluid simple' alt='' />
                      </div>
                      <div class='_category_caption'>
                        <h5 style={{ textDecoration: 'none' }}>
                          Office & Studio
                        </h5>
                        <span>22 Properties</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* <!-- Single Category --> */}
              <div class='col-lg-3 col-md-4 col-sm-6'>
                <div class='_category_box'>
                  <a href='list-layout-with-sidebar.html'>
                    <div class='_category_elio'>
                      <div class='_category_thumb'>
                        <img src={f2} class='img-fluid hover' alt='' />
                        <img src={f22} class='img-fluid simple' alt='' />
                      </div>
                      <div class='_category_caption'>
                        <h5 style={{ textDecoration: 'none' }}>Industrial</h5>
                        <span>22 Properties</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* <!-- Single Category --> */}
              <div class='col-lg-3 col-md-4 col-sm-6'>
                <div class='_category_box'>
                  <a href='list-layout-with-sidebar.html'>
                    <div class='_category_elio'>
                      <div class='_category_thumb'>
                        <img src={f3} class='img-fluid hover' alt='' />
                        <img src={f33} class='img-fluid simple' alt='' />
                      </div>
                      <div class='_category_caption'>
                        <h5 style={{ textDecoration: 'none' }}>Buildings</h5>
                        <span>85 Properties</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* <!-- Single Category --> */}
              <div class='col-lg-3 col-md-4 col-sm-6'>
                <div class='_category_box'>
                  <a href='list-layout-with-sidebar.html'>
                    <div class='_category_elio'>
                      <div class='_category_thumb'>
                        <img src={f4} class='img-fluid hover' alt='' />
                        <img src={f44} class='img-fluid simple' alt='' />
                      </div>
                      <div class='_category_caption'>
                        <h5 style={{ textDecoration: 'none' }}>Commercial</h5>
                        <span>79 Properties</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* <!-- Single Category --> */}
              <div class='col-lg-3 col-md-4 col-sm-6'>
                <div class='_category_box'>
                  <a href='list-layout-with-sidebar.html'>
                    <div class='_category_elio'>
                      <div class='_category_thumb'>
                        <img src={f5} class='img-fluid hover' alt='' />
                        <img src={f55} class='img-fluid simple' alt='' />
                      </div>
                      <div class='_category_caption'>
                        <h5 style={{ textDecoration: 'none' }}>
                          Home & Villas
                        </h5>
                        <span>22 Properties</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* <!-- Single Category --> */}
              <div class='col-lg-3 col-md-4 col-sm-6'>
                <div class='_category_box'>
                  <a href='list-layout-with-sidebar.html'>
                    <div class='_category_elio'>
                      <div class='_category_thumb'>
                        <img src={f6} class='img-fluid hover' alt='' />
                        <img src={f66} class='img-fluid simple' alt='' />
                      </div>
                      <div class='_category_caption'>
                        <h5 style={{ textDecoration: 'none' }}>Garages</h5>
                        <span>22 Properties</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* <!-- Single Category --> */}
              <div class='col-lg-3 col-md-4 col-sm-6'>
                <div class='_category_box'>
                  <a href='list-layout-with-sidebar.html'>
                    <div class='_category_elio'>
                      <div class='_category_thumb'>
                        <img src={f7} class='img-fluid hover' alt='' />
                        <img src={f77} class='img-fluid simple' alt='' />
                      </div>
                      <div class='_category_caption'>
                        <h5 style={{ textDecoration: 'none' }}>
                          Office & Studio
                        </h5>
                        <span>72 Properties</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* <!-- Single Category --> */}
              <div class='col-lg-3 col-md-4 col-sm-6'>
                <div class='_category_box'>
                  <a href='list-layout-with-sidebar.html'>
                    <div class='_category_elio'>
                      <div class='_category_thumb'>
                        <img src={f8} class='img-fluid hover' alt='' />
                        <img src={f88} class='img-fluid simple' alt='' />
                      </div>
                      <div class='_category_caption'>
                        <h5 style={{ textDecoration: 'none' }}>Apartment</h5>
                        <span>102 Properties</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class='pt-0 min'>
          <div class='container'>
            <div class='row justify-content-center'>
              <div class='col-lg-7 col-md-8'>
                <div class='sec-heading center'>
                  <h2>Featured Listed Property</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </div>

            <div class='row justify-content-center'>
              {/* <!-- Single Property --> */}
              <div class='col-lg-4 col-md-6 col-sm-12'>
                <div class='property-listing property-2'>
                  <div class='listing-img-wrapper'>
                    <div class='_exlio_125'>For Rent</div>
                    <div class='list-img-slide'>
                      <div class='click'>
                        <div>
                          <a href='single-property-1.html'>
                            <img src={p1} class='img-fluid mx-auto' alt='' />
                          </a>
                        </div>
                        <div>
                          <a href='single-property-1.html'>
                            <img
                              src='assets/img/p-2.png'
                              class='img-fluid mx-auto'
                              alt=''
                            />
                          </a>
                        </div>
                        <div>
                          <a href='single-property-1.html'>
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
                          <span class='_list_blickes _netork'>4 Network</span>
                          <span class='_list_blickes types'>Condos</span>
                        </div>
                        <div class='_card_flex_last'>
                          <h6 class='listing-card-info-price mb-0'>$6,700</h6>
                        </div>
                      </div>
                      <div class='_card_list_flex'>
                        <div class='_card_flex_01'>
                          <h4 class='listing-name verified'>
                            <a
                              href='single-property-1.html'
                              class='prt-link-detail'
                            >
                              7012 Shine Sehu Street, Liverpool London, LC345AC
                            </a>
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
                        4 Beds
                      </div>
                      <div class='listing-card-info-icon'>
                        <div class='inc-fleat-icon'>
                          <img src='assets/img/bathtub.svg' width='13' alt='' />
                        </div>
                        2 Bath
                      </div>
                      <div class='listing-card-info-icon'>
                        <div class='inc-fleat-icon'>
                          <img src='assets/img/move.svg' width='13' alt='' />
                        </div>
                        820 sqft
                      </div>
                    </div>
                  </div>

                  <div class='listing-detail-footer'>
                    <div class='footer-first'>
                      <div class='foot-location'>
                        <img src='assets/img/pin.svg' width='18' alt='' />
                        Montreal, Canada
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
                              <i class='ti-heart'></i>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class='prt_saveed_12lk'>
                            <a
                              href='compare-property.html'
                              data-toggle='tooltip'
                              data-placement='top'
                              data-original-title='Compare property'
                            >
                              <i class='ti-control-shuffle'></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div class='prt_saveed_12lk'>
                            <a
                              href='single-property-1.html'
                              data-toggle='tooltip'
                              data-placement='top'
                              data-original-title='View Property'
                            >
                              <i class='ti-arrow-right'></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Single Property --> */}

              {/* <!-- Single Property --> */}
              <div class='col-lg-4 col-md-6 col-sm-12'>
                <div class='property-listing property-2'>
                  <div class='listing-img-wrapper'>
                    <div class='_exlio_125'>For Sale</div>
                    <div class='list-img-slide'>
                      <div class='click'>
                        <div>
                          <a href='single-property-1.html'>
                            <img src={p4} class='img-fluid mx-auto' alt='' />
                          </a>
                        </div>
                        <div>
                          <a href='single-property-1.html'>
                            <img
                              src='assets/img/p-5.png'
                              class='img-fluid mx-auto'
                              alt=''
                            />
                          </a>
                        </div>
                        <div>
                          <a href='single-property-1.html'>
                            <img
                              src='assets/img/p-6.png'
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
                          <span class='_list_blickes _netork'>5 Network</span>
                          <span class='_list_blickes types'>Apartment</span>
                        </div>
                        <div class='_card_flex_last'>
                          <h6 class='listing-card-info-price mb-0'>$6,900</h6>
                        </div>
                      </div>
                      <div class='_card_list_flex'>
                        <div class='_card_flex_01'>
                          <h4 class='listing-name verified'>
                            <a
                              href='single-property-1.html'
                              class='prt-link-detail'
                            >
                              425 Vine 012 Street, Montreal Canada, UHW45Q
                            </a>
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
                        4 Beds
                      </div>
                      <div class='listing-card-info-icon'>
                        <div class='inc-fleat-icon'>
                          <img src='assets/img/bathtub.svg' width='13' alt='' />
                        </div>
                        2 Bath
                      </div>
                      <div class='listing-card-info-icon'>
                        <div class='inc-fleat-icon'>
                          <img src='assets/img/move.svg' width='13' alt='' />
                        </div>
                        700 sqft
                      </div>
                    </div>
                  </div>

                  <div class='listing-detail-footer'>
                    <div class='footer-first'>
                      <div class='foot-location'>
                        <img src='assets/img/pin.svg' width='18' alt='' />
                        Montreal, Canada
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
                              <i class='ti-heart'></i>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class='prt_saveed_12lk'>
                            <a
                              href='compare-property.html'
                              data-toggle='tooltip'
                              data-placement='top'
                              data-original-title='Compare property'
                            >
                              <i class='ti-control-shuffle'></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div class='prt_saveed_12lk'>
                            <a
                              href='single-property-1.html'
                              data-toggle='tooltip'
                              data-placement='top'
                              data-original-title='View Property'
                            >
                              <i class='ti-arrow-right'></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Single Property --> */}

              {/* <!-- Single Property --> */}
              <div class='col-lg-4 col-md-6 col-sm-12'>
                <div class='property-listing property-2'>
                  <div class='listing-img-wrapper'>
                    <div class='_exlio_125'>For Rent</div>
                    <div class='list-img-slide'>
                      <div class='click'>
                        <div>
                          <a href='single-property-1.html'>
                            <img src={p7} class='img-fluid mx-auto' alt='' />
                          </a>
                        </div>
                        <div>
                          <a href='single-property-1.html'>
                            <img
                              src='assets/img/p-8.png'
                              class='img-fluid mx-auto'
                              alt=''
                            />
                          </a>
                        </div>
                        <div>
                          <a href='single-property-1.html'>
                            <img
                              src='assets/img/p-9.png'
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
                          <span class='_list_blickes _netork'>4 Network</span>
                          <span class='_list_blickes types'>Villas</span>
                        </div>
                        <div class='_card_flex_last'>
                          <h6 class='listing-card-info-price mb-0'>$8,500</h6>
                        </div>
                      </div>
                      <div class='_card_list_flex'>
                        <div class='_card_flex_01'>
                          <h4 class='listing-name verified'>
                            <a
                              href='single-property-1.html'
                              class='prt-link-detail'
                            >
                              1244 Vansh Market, Mise Mizkel Australia, AU456HA
                            </a>
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
                        3 Beds
                      </div>
                      <div class='listing-card-info-icon'>
                        <div class='inc-fleat-icon'>
                          <img src='assets/img/bathtub.svg' width='13' alt='' />
                        </div>
                        2 Bath
                      </div>
                      <div class='listing-card-info-icon'>
                        <div class='inc-fleat-icon'>
                          <img src='assets/img/move.svg' width='13' alt='' />
                        </div>
                        800 sqft
                      </div>
                    </div>
                  </div>

                  <div class='listing-detail-footer'>
                    <div class='footer-first'>
                      <div class='foot-location'>
                        <img src='assets/img/pin.svg' width='18' alt='' />
                        Montreal, Canada
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
                              <i class='ti-heart'></i>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class='prt_saveed_12lk'>
                            <a
                              href='compare-property.html'
                              data-toggle='tooltip'
                              data-placement='top'
                              data-original-title='Compare property'
                            >
                              <i class='ti-control-shuffle'></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div class='prt_saveed_12lk'>
                            <a
                              href='single-property-1.html'
                              data-toggle='tooltip'
                              data-placement='top'
                              data-original-title='View Property'
                            >
                              <i class='ti-arrow-right'></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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
                  <h2>Our Featured Agents</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
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
                  <h2>Top Property Places</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </div>

            <div class='row justify-content-center'>
              <div class='col-lg-4 col-md-4 col-sm-6'>
                <a href='grid-layout-with-sidebar.html' class='img-wrap'>
                  <div class='location_wrap_content visible'>
                    <div class='location_wrap_content_first'>
                      <h4>California, USA</h4>
                      <span>48 Properties</span>
                    </div>
                    <div class='location_btn'>
                      <i class='fa fa-arrow-right'></i>
                    </div>
                  </div>
                  <div class='img-wrap-background property1'></div>
                </a>
              </div>

              <div class='col-lg-4 col-md-4 col-sm-6'>
                <a href='grid-layout-with-sidebar.html' class='img-wrap'>
                  <div class='location_wrap_content visible'>
                    <div class='location_wrap_content_first'>
                      <h4>Barbingham, USA</h4>
                      <span>73 Properties</span>
                    </div>
                    <div class='location_btn'>
                      <i class='fa fa-arrow-right'></i>
                    </div>
                  </div>
                  <div class='img-wrap-background property2'></div>
                </a>
              </div>

              <div class='col-lg-4 col-md-4 col-sm-6'>
                <a href='grid-layout-with-sidebar.html' class='img-wrap'>
                  <div class='location_wrap_content visible'>
                    <div class='location_wrap_content_first'>
                      <h4>Denever, USA</h4>
                      <span>40 Properties</span>
                    </div>
                    <div class='location_btn'>
                      <i class='fa fa-arrow-right'></i>
                    </div>
                  </div>
                  <div class='img-wrap-background property3'></div>
                </a>
              </div>

              <div class='col-lg-6 col-md-6 col-sm-6'>
                <a href='grid-layout-with-sidebar.html' class='img-wrap'>
                  <div class='location_wrap_content visible'>
                    <div class='location_wrap_content_first'>
                      <h4>Liverpool, London</h4>
                      <span>35 Properties</span>
                    </div>
                    <div class='location_btn'>
                      <i class='fa fa-arrow-right'></i>
                    </div>
                  </div>
                  <div class='img-wrap-background property4'></div>
                </a>
              </div>

              <div class='col-lg-6 col-md-6 col-sm-6'>
                <a href='grid-layout-with-sidebar.html' class='img-wrap'>
                  <div class='location_wrap_content visible'>
                    <div class='location_wrap_content_first'>
                      <h4>New Orleans, Louisiana</h4>
                      <span>10 Properties</span>
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
                  <h2>Good Reviews By Clients</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
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
                  <h2>Recent News and Articles</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </div>

            <div class='row justify-content-center'>
              {/* <!-- Single blog Grid --> */}
              <div class='col-lg-4 col-md-6'>
                <div class='grid_blog_box'>
                  <div class='gtid_blog_thumb'>
                    <a href='blog-detail.html'>
                      <img src={b1} class='img-fluid' alt='' />
                    </a>
                    <div class='gtid_blog_info'>
                      <span>12</span>Sep 2021
                    </div>
                  </div>

                  <div class='blog-body'>
                    <h4 class='bl-title'>
                      <a href='blog-detail.html'>Creative Designs</a>
                      <span class='latest_new_post py-2'>New</span>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>

                  <div class='modern_property_footer'>
                    <div class='property-author'>
                      <div class='path-img'>
                        <a href='agent-page.html' tabindex='-1'>
                          <img src={user1} class='img-fluid' alt='' />
                        </a>
                      </div>
                      <h5>
                        <a href='agent-page.html' tabindex='-1'>
                          Albert Osiemoh
                        </a>
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
                    <a href='blog-detail.html'>
                      <img src={b1} class='img-fluid' alt='' />
                    </a>
                    <div class='gtid_blog_info'>
                      <span>12</span>Sep 2021
                    </div>
                  </div>

                  <div class='blog-body'>
                    <h4 class='bl-title'>
                      <a href='blog-detail.html'>Creative Designs</a>
                      <span class='latest_new_post py-2'>New</span>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>

                  <div class='modern_property_footer'>
                    <div class='property-author'>
                      <div class='path-img'>
                        <a href='agent-page.html' tabindex='-1'>
                          <img src={user1} class='img-fluid' alt='' />
                        </a>
                      </div>
                      <h5>
                        <a href='agent-page.html' tabindex='-1'>
                          Albert Osiemoh
                        </a>
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
                    <a href='blog-detail.html'>
                      <img src={b1} class='img-fluid' alt='' />
                    </a>
                    <div class='gtid_blog_info'>
                      <span>12</span>Sep 2021
                    </div>
                  </div>

                  <div class='blog-body'>
                    <h4 class='bl-title'>
                      <a href='blog-detail.html'>Creative Designs</a>
                      <span class='latest_new_post py-2'>New</span>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>

                  <div class='modern_property_footer'>
                    <div class='property-author'>
                      <div class='path-img'>
                        <a href='agent-page.html' tabindex='-1'>
                          <img src={user1} class='img-fluid' alt='' />
                        </a>
                      </div>
                      <h5>
                        <a href='agent-page.html' tabindex='-1'>
                          Albert Osiemoh
                        </a>
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
