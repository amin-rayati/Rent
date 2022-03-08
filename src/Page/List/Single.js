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
            <div class='col-lg-8 col-md-12 col-sm-12'>
              <div class='property_info_detail_wrap mb-4'>
                <div class='property_info_detail_wrap_first'>
                  <div class='pr-price-into'>
                    <ul class='prs_lists'>
                      <li>
                        <span class='bed'>3 Beds</span>
                      </li>
                      <li>
                        <span class='bath'>2 Bath</span>
                      </li>
                      <li>
                        <span class='gar'>1 Garage</span>
                      </li>
                      <li>
                        <span class='sqft'>800 sqft</span>
                      </li>
                    </ul>
                    <h2>5689 Resot Relly Market, Montreal Canada, HAQC445</h2>
                    <span>
                      <i class='lni-map-marker'></i> 778 Country St. Panama
                      City, FL
                    </span>
                  </div>
                </div>
              </div>

              <div class='property_block_wrap'>
                <div class='property_block_wrap_header'>
                  <h4 class='property_block_title'>About Property</h4>
                </div>

                <div class='block-body'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>

              <div class='property_block_wrap'>
                <div class='property_block_wrap_header'>
                  <h4 class='property_block_title'>Advance Features</h4>
                </div>

                <div class='block-body'>
                  <ul class='row p-0 m-0'>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <FaBed />4 Bedrooms
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <FaBath />2 Bathrooms
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <FaExpandArrowsAlt />
                      12400 sqft
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <FaHouseDamage />1 Living Rooms
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <FaBuilding />
                      Build 2007
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <FaUtensils />2 Kitchens
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <AiFillCar />
                      Car Parking
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <FaBriefcaseMedical />
                      Free Medical
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <FaFire />
                      Fireplace
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <FaLayerGroup />
                      Residential
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <MdOutlinePersonalVideo />
                      TV Cable
                    </li>
                    <li class='col-lg-4 col-md-6 mb-2 p-0'>
                      <BsFillSuitSpadeFill />
                      Free Spa
                    </li>
                  </ul>
                </div>
              </div>

              <div class='property_block_wrap'>
                <div class='property_block_wrap_header'>
                  <h4 class='property_block_title'>Ameneties</h4>
                </div>

                <div class='block-body'>
                  <ul class='avl-features third'>
                    <li class='active'>Air Conditioning</li>
                    <li class='active'>Swimming Pool</li>
                    <li class='active'>Central Heating</li>
                    <li class='active'>Laundry Room</li>
                    <li class='active'>Gym</li>
                    <li class='active'>Alarm</li>
                    <li class='active'>Window Covering</li>
                    <li class='active'>Internet</li>
                    <li class='active'>Pets Allow</li>
                    <li class='active'>Free WiFi</li>
                    <li>Car Parking</li>
                    <li>Spa & Massage</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class='col-lg-4 col-md-12 col-sm-12'>
              <div class='property-sidebar'>
                <div class='sider_blocks_wrap'>
                  <div class='side-booking-header'>
                    <div class='sb-header-left'>
                      <h3 class='price'>
                        $470<sub>/Night</sub>
                        <span class='offs'>$510</span>
                      </h3>
                    </div>
                    <div class='price_offer'>20% Off</div>
                  </div>
                  <div class='side-booking-body'>
                    <div class='row'>
                      <div class='col-lg-6 col-md-6 col-sm-6 col-6'>
                        <div class='form-group'>
                          <label>Check In</label>
                          <div class='cld-box'>
                            <i class='ti-calendar'></i>
                            <input
                              type='text'
                              name='checkin'
                              class='form-control'
                              value='10/24/2020'
                            />
                          </div>
                        </div>
                      </div>
                      <div class='col-lg-6 col-md-6 col-sm-6 col-6'>
                        <div class='form-group'>
                          <label>Check Out</label>
                          <div class='cld-box'>
                            <i class='ti-calendar'></i>
                            <input
                              type='text'
                              name='checkout'
                              class='form-control'
                              value='10/24/2020'
                            />
                          </div>
                        </div>
                      </div>
                      <div class='col-lg-6 col-md-6 col-sm-6 col-6'>
                        <div class='form-group'>
                          <div>
                            <label for='guests'>Adults</label>
                            <div class='guests-box'>
                              <button
                                class='counter-btn'
                                type='button'
                                id='cnt-down'
                              >
                                <i class='ti-minus'></i>
                              </button>
                              <input
                                type='text'
                                id='guestNo'
                                name='guests'
                                value='2'
                              />
                              <button
                                class='counter-btn'
                                type='button'
                                id='cnt-up'
                              >
                                <i class='ti-plus'></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class='col-lg-6 col-md-6 col-sm-6 col-6'>
                        <div class='form-group'>
                          <div class='guests'>
                            <label>Kids</label>
                            <div class='guests-box'>
                              <button
                                class='counter-btn'
                                type='button'
                                id='kcnt-down'
                              >
                                <i class='ti-minus'></i>
                              </button>
                              <input
                                type='text'
                                id='kidsNo'
                                name='kids'
                                value='0'
                              />
                              <button
                                class='counter-btn'
                                type='button'
                                id='kcnt-up'
                              >
                                <i class='ti-plus'></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class='col-lg12 col-md-12 col-sm-12 mt-3'>
                        <label for='guests'>Advance features</label>
                        <div class='_adv_features_list'>
                          <ul class='no-ul-list'>
                            <li>
                              <input
                                id='a-1'
                                class='checkbox-custom'
                                name='a-1'
                                type='checkbox'
                              />
                              <label for='a-1' class='checkbox-custom-label'>
                                Air Condition<i>$10</i>
                              </label>
                            </li>
                            <li>
                              <input
                                id='a-2'
                                class='checkbox-custom'
                                name='a-2'
                                type='checkbox'
                                checked
                              />
                              <label for='a-2' class='checkbox-custom-label'>
                                Bedding<i>$07</i>
                              </label>
                            </li>
                            <li>
                              <input
                                id='a-3'
                                class='checkbox-custom'
                                name='a-3'
                                type='checkbox'
                                checked
                              />
                              <label for='a-3' class='checkbox-custom-label'>
                                Heating<i>$20</i>
                              </label>
                            </li>
                            <li>
                              <input
                                id='a-4'
                                class='checkbox-custom'
                                name='a-4'
                                type='checkbox'
                              />
                              <label for='a-4' class='checkbox-custom-label'>
                                Internet<i>$10</i>
                              </label>
                            </li>
                            <li>
                              <input
                                id='a-5'
                                class='checkbox-custom'
                                name='a-5'
                                type='checkbox'
                              />
                              <label for='a-5' class='checkbox-custom-label'>
                                Microwave<i>$05</i>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class='col-lg12 col-md-12 col-sm-12 mt-3'>
                        <label for='guests'>Price & Tax</label>
                        <div class='_adv_features'>
                          <ul>
                            <li>
                              I Night<span>$310</span>
                            </li>
                            <li>
                              Discount 25$<span>-$250</span>
                            </li>
                            <li>
                              Service Fee<span>$17</span>
                            </li>
                            <li>
                              Breakfast Per Adult<span>$35</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class='side-booking-foot'>
                        <span class='sb-header-left'>Total Payment</span>
                        <h3 class='price theme-cl'>$170</h3>
                      </div>

                      <div class='col-lg-12 col-md-12 col-sm-12'>
                        <div class='stbooking-footer mt-1'>
                          <div class='form-group mb-0 pb-0'>
                            <a
                              href='checkout.html'
                              class='btn book_btn theme-bg'
                            >
                              Book It Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Mortgage Calculator --> */}
                <div class='sider_blocks_wrap'>
                  <div class='side-booking-header'>
                    <h4 class='m-0'>Mortgage Calculator</h4>
                  </div>

                  <div class='sider-block-body p-3'>
                    <div class='form-group'>
                      <div class='input-with-icon'>
                        <input
                          type='text'
                          class='form-control light'
                          placeholder='Sale Price'
                        />
                        <i class='ti-money'></i>
                      </div>
                    </div>

                    <div class='form-group'>
                      <div class='input-with-icon'>
                        <input
                          type='text'
                          class='form-control light'
                          placeholder='Down Payment'
                        />
                        <i class='ti-money'></i>
                      </div>
                    </div>

                    <div class='form-group'>
                      <div class='input-with-icon'>
                        <input
                          type='text'
                          class='form-control light'
                          placeholder='Loan Term (Years)'
                        />
                        <i class='ti-calendar'></i>
                      </div>
                    </div>

                    <div class='form-group'>
                      <div class='input-with-icon'>
                        <input
                          type='text'
                          class='form-control light'
                          placeholder='Interest Rate'
                        />
                        <i class='fa fa-percent'></i>
                      </div>
                    </div>
                    <div class='mortgage mb-2'>Monthly Payment: 22742.10 $</div>
                    <button class='btn book_btn theme-bg'>Calculate</button>
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
