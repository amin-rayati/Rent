import { React, useState } from 'react'
import Select from 'react-select'
import p1 from '../../Assets/img/p-1.png'
import { AiFillHeart, AiOutlineArrowRight } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'

const List = () => {
  const aquaticCreatures = [
    { label: 'Shark', value: 'Shark' },
    { label: 'Dolphin', value: 'Dolphin' },
    { label: 'Whale', value: 'Whale' },
    { label: 'Octopus', value: 'Octopus' },
    { label: 'Crab', value: 'Crab' },
    { label: 'Lobster', value: 'Lobster' },
  ]

  const [grid, setGrid] = useState(false)
  return (
    <div id='main-wrapper'>
      <section class='gray pt-4 ' style={{ marginTop: '80px' }}>
        <div class='container'>
          <div class='row m-0'>
            <div class='short_wraping'>
              <div class='row align-items-center'>
                <div class='col-lg-3 col-md-6 col-sm-12  col-sm-6'>
                  <ul class='shorting_grid'>
                    <li
                      onClick={() => {
                        setGrid(false)
                      }}
                      class='list-inline-item'
                    >
                      <a>
                        <span class='ti-layout-grid2'></span>Grid
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        setGrid(true)
                      }}
                      class='list-inline-item'
                    >
                      <a>
                        <span class='ti-view-list'></span>List
                      </a>
                    </li>
                  </ul>
                </div>

                <div class='col-lg-6 col-md-12 col-sm-12 order-lg-2 order-md-3 elco_bor col-sm-12'>
                  <div class='shorting_pagination'>
                    <div class='shorting_pagination_laft'>
                      <h5>Showing 1-25 of 72 results</h5>
                    </div>
                    <div class='shorting_pagination_right'>
                      <ul>
                        <li>
                          <a href='javascript:void(0);' class='active'>
                            1
                          </a>
                        </li>
                        <li>
                          <a href='javascript:void(0);'>2</a>
                        </li>
                        <li>
                          <a href='javascript:void(0);'>3</a>
                        </li>
                        <li>
                          <a href='javascript:void(0);'>4</a>
                        </li>
                        <li>
                          <a href='javascript:void(0);'>5</a>
                        </li>
                        <li>
                          <a href='javascript:void(0);'>6</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class='col-lg-3 col-md-6 col-sm-12 order-lg-3 order-md-2 col-sm-6'>
                  <div class='shorting-right'>
                    <label>Short By:</label>
                    <div class='dropdown show'>
                      <a
                        class='btn btn-filter dropdown-toggle'
                        href='grid-layout-with-sidebar.html#'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        <span class='selection'>Most Rated</span>
                      </a>
                      <div class='drp-select dropdown-menu'>
                        <a class='dropdown-item' href='JavaScript:Void(0);'>
                          Most Rated
                        </a>
                        <a class='dropdown-item' href='JavaScript:Void(0);'>
                          Most Viewd
                        </a>
                        <a class='dropdown-item' href='JavaScript:Void(0);'>
                          News Listings
                        </a>
                        <a class='dropdown-item' href='JavaScript:Void(0);'>
                          High Rated
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class='row'>
            {/* <!-- property Sidebar --> */}

            {!grid ? (
              <div class='col-lg-8 order-lg-1 col-md-12 order-md-2 col-sm-12 order-sm-2 col-12 order-2'>
                <div class='row justify-content-center'>
                  {/* <!-- Single Property --> */}
                  <Link to='/search/1' class='col-lg-6 col-md-6 col-sm-12'>
                    <div>
                      <div class='property-listing property-2'>
                        <div class='listing-img-wrapper'>
                          <div class='_exlio_125'>برای اجاره</div>
                          <div class='list-img-slide'>
                            <div class='click'>
                              <div>
                                <a href='single-property-1.html'>
                                  <img
                                    src={p1}
                                    class='img-fluid mx-auto'
                                    alt=''
                                  />
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
                                <span class='_list_blickes _netork'>
                                  4 Network
                                </span>
                                <span class='_list_blickes types'>Condos</span>
                              </div>
                              <div class='_card_flex_last'>
                                <h6 class='listing-card-info-price mb-0'>
                                  $6,700
                                </h6>
                              </div>
                            </div>
                            <div class='_card_list_flex'>
                              <div class='_card_flex_01'>
                                <h4 class='listing-name verified'>
                                  <a
                                    href='single-property-1.html'
                                    class='prt-link-detail'
                                  >
                                    7012 Shine Sehu Street, Liverpool London,
                                    LC345AC
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
                                <img
                                  src='assets/img/bed.svg'
                                  width='13'
                                  alt=''
                                />
                              </div>
                              4 Beds
                            </div>
                            <div class='listing-card-info-icon'>
                              <div class='inc-fleat-icon'>
                                <img
                                  src='assets/img/bathtub.svg'
                                  width='13'
                                  alt=''
                                />
                              </div>
                              2 Bath
                            </div>
                            <div class='listing-card-info-icon'>
                              <div class='inc-fleat-icon'>
                                <img
                                  src='assets/img/move.svg'
                                  width='13'
                                  alt=''
                                />
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
                                    <AiFillHeart />
                                  </label>
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
                                    <AiOutlineArrowRight />
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* <!-- End Single Property -->*/}
                </div>
              </div>
            ) : (
              <div class='col-lg-8 order-lg-1 col-md-12 order-md-2 col-sm-12 order-sm-2 col-12 order-2'>
                <div class='row justify-content-center'>
                  {/* <!-- Single Property --> */}
                  <Link
                    to='/search/1'
                    class='col-xl-12 col-lg-12 col-md-12 col-sm-12'
                  >
                    <div>
                      <div class='property-listing list_view'>
                        <div class='listing-img-wrapper'>
                          <div class='_exlio_125'>For Sale</div>
                          <div class='list-img-slide'>
                            <div class='click'>
                              <div>
                                <a href='single-property-1.html'>
                                  <img
                                    src={p1}
                                    class='img-fluid mx-auto'
                                    alt=''
                                  />
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

                        <div class='list_view_flex'>
                          <div class='listing-detail-wrapper mt-1'>
                            <div class='listing-short-detail-wrap'>
                              <div class='_card_list_flex mb-2'>
                                <div class='_card_flex_01'>
                                  <span class='_list_blickes _netork'>
                                    6 Network
                                  </span>
                                  <span class='_list_blickes types'>
                                    Family
                                  </span>
                                </div>
                                <div class='_card_flex_last'>
                                  <h6 class='listing-card-info-price mb-0'>
                                    $7,000
                                  </h6>
                                </div>
                              </div>
                              <div class='_card_list_flex'>
                                <div class='_card_flex_01'>
                                  <h4 class='listing-name verified'>
                                    <a
                                      href='single-property-1.html'
                                      class='prt-link-detail'
                                    >
                                      5689 Resot Relly Market, Montreal Canada,
                                      HAQC445
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
                                  <img
                                    src='assets/img/bed.svg'
                                    width='13'
                                    alt=''
                                  />
                                </div>
                                3 Beds
                              </div>
                              <div class='listing-card-info-icon'>
                                <div class='inc-fleat-icon'>
                                  <img
                                    src='assets/img/bathtub.svg'
                                    width='13'
                                    alt=''
                                  />
                                </div>
                                1 Bath
                              </div>
                              <div class='listing-card-info-icon'>
                                <div class='inc-fleat-icon'>
                                  <img
                                    src='assets/img/move.svg'
                                    width='13'
                                    alt=''
                                  />
                                </div>
                                800 sqft
                              </div>
                            </div>
                          </div>

                          <div class='listing-detail-footer'>
                            <div class='footer-first'>
                              <div class='foot-rates'>
                                <span class='elio_rate good'>4.2</span>
                                <div class='_rate_stio'>
                                  <i class='fa fa-star'></i>
                                  <i class='fa fa-star'></i>
                                  <i class='fa fa-star'></i>
                                  <i class='fa fa-star'></i>
                                  <i class='fa fa-star'></i>
                                </div>
                              </div>
                            </div>
                            <div class='footer-flex'>
                              <a href='single-property-1.html' class='prt-view'>
                                View Detail
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* <!-- End Single Property --> */}
                </div>
              </div>
            )}

            <div class='col-lg-4 order-lg-2 col-md-12 order-md-1 col-sm-12 order-sm-1 col-12 order-1'>
              <div class='page-sidebar p-0'>
                <div id='fltbox'>
                  {/* <!-- Find New Property --> */}
                  <div class='sidebar-widgets p-4'>
                    <div class='form-group'>
                      <div class='input-with-icon'>
                        <input
                          type='text'
                          class='form-control'
                          placeholder='Neighborhood'
                        />
                        <i class='ti-search'></i>
                      </div>
                    </div>

                    <div class='form-group'>
                      <div class='input-with-icon'>
                        <input
                          type='text'
                          class='form-control'
                          placeholder='Location'
                        />
                        <i class='ti-location-pin'></i>
                      </div>
                    </div>

                    <div class='form-group'>
                      <div class='simple-input'>
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>
                    </div>

                    <div class='form-group'>
                      <div class='simple-input'>
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>
                    </div>

                    <div class='form-group'>
                      <div class='simple-input'>
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>
                    </div>

                    <div class='form-group'>
                      <div class='simple-input'>
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>
                    </div>

                    <div class='form-group'>
                      <div class='simple-input'>
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>
                    </div>

                    <div class='form-group'>
                      <div class='simple-input'>
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>
                    </div>

                    <div class='form-group'>
                      <div class='simple-input'>
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>
                    </div>

                    <div class='row'>
                      <div class='col-lg-6 col-md-6 col-sm-6'>
                        <div class='form-group'>
                          <div class='simple-input'>
                            <input
                              type='text'
                              class='form-control'
                              placeholder='Min Area'
                            />
                          </div>
                        </div>
                      </div>
                      <div class='col-lg-6 col-md-6 col-sm-6'>
                        <div class='form-group'>
                          <div class='simple-input'>
                            <input
                              type='text'
                              class='form-control'
                              placeholder='Max Area'
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class='row'>
                      <div class='col-lg-12 col-md-12 col-sm-12 pt-4'>
                        <h6>Advance Features</h6>
                        <ul class='row p-0 m-0'>
                          <li class='col-lg-6 col-md-6 p-0'>
                            <input
                              id='a-1'
                              class='checkbox-custom'
                              name='a-1'
                              type='checkbox'
                            />
                            <label for='a-1' class='checkbox-custom-label'>
                              Air Condition
                            </label>
                          </li>
                          <li class='col-lg-6 col-md-6 p-0'>
                            <input
                              id='a-2'
                              class='checkbox-custom'
                              name='a-2'
                              type='checkbox'
                            />
                            <label for='a-2' class='checkbox-custom-label'>
                              Bedding
                            </label>
                          </li>
                          <li class='col-lg-6 col-md-6 p-0'>
                            <input
                              id='a-3'
                              class='checkbox-custom'
                              name='a-3'
                              type='checkbox'
                            />
                            <label for='a-3' class='checkbox-custom-label'>
                              Heating
                            </label>
                          </li>
                          <li class='col-lg-6 col-md-6 p-0'>
                            <input
                              id='a-4'
                              class='checkbox-custom'
                              name='a-4'
                              type='checkbox'
                            />
                            <label for='a-4' class='checkbox-custom-label'>
                              Internet
                            </label>
                          </li>
                          <li class='col-lg-6 col-md-6 p-0'>
                            <input
                              id='a-5'
                              class='checkbox-custom'
                              name='a-5'
                              type='checkbox'
                            />
                            <label for='a-5' class='checkbox-custom-label'>
                              Microwave
                            </label>
                          </li>
                          <li class='col-lg-6 col-md-6 p-0'>
                            <input
                              id='a-6'
                              class='checkbox-custom'
                              name='a-6'
                              type='checkbox'
                            />
                            <label for='a-6' class='checkbox-custom-label'>
                              Smoking Allow
                            </label>
                          </li>
                          <li class='col-lg-6 col-md-6 p-0'>
                            <input
                              id='a-7'
                              class='checkbox-custom'
                              name='a-7'
                              type='checkbox'
                            />
                            <label for='a-7' class='checkbox-custom-label'>
                              Terrace
                            </label>
                          </li>
                          <li class='col-lg-6 col-md-6 p-0'>
                            <input
                              id='a-8'
                              class='checkbox-custom'
                              name='a-8'
                              type='checkbox'
                            />
                            <label for='a-8' class='checkbox-custom-label'>
                              Balcony
                            </label>
                          </li>
                          <li class='col-lg-6 col-md-6 p-0'>
                            <input
                              id='a-9'
                              class='checkbox-custom'
                              name='a-9'
                              type='checkbox'
                            />
                            <label for='a-9' class='checkbox-custom-label'>
                              Icon
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class='row'>
                      <div class='col-lg-12 col-md-12 col-sm-12 pt-4'>
                        <button class='btn theme-bg rounded full-width'>
                          Find New Home
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Sidebar End --> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default List
