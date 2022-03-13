import { React, useState } from 'react'
import Select from 'react-select'
import p1 from '../../Assets/img/p-1.png'
import { AiFillHeart, AiOutlineArrowRight } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'

const List = () => {
  const aquaticCreatures = [
    { label: 'بهشتی', value: 'بهشتی' },
    { label: 'طالقانی', value: 'طالقانی' },
    { label: 'شهدا', value: 'شهدا' },
    { label: 'باغستان', value: 'باغستان' },
    { label: 'شاهین ویلا', value: 'شاهین ویلا' },
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
                      <span
                        style={{ cursor: 'pointer' }}
                        class='ti-layout-grid2'
                      ></span>
                      گرید
                    </li>
                    <li
                      onClick={() => {
                        setGrid(true)
                      }}
                      class='list-inline-item'
                    >
                      <span
                        style={{ cursor: 'pointer' }}
                        class='ti-view-list'
                      ></span>
                      لیست
                    </li>
                  </ul>
                </div>

                <div class='col-lg-6 col-md-12 col-sm-12 order-lg-2 order-md-3 elco_bor col-sm-12'>
                  <div class='shorting_pagination'>
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
                    <div class='shorting_pagination_laft text-right'>
                      <h5>نمایش 10 از بین 100</h5>
                    </div>
                  </div>
                </div>

                <div class='col-lg-3 col-md-6 col-sm-12 order-lg-3 order-md-2 col-sm-6'>
                  <div
                    class='shorting-right'
                    style={{ justifyContent: 'space-between' }}
                  >
                    <div class='dropdown show'>
                      <select style={{ border: '1px solid gray' }}>
                        <option>گرانترین</option>
                        <option>ارزانترین</option>
                        <option>جدیدترین</option>
                      </select>
                    </div>
                    <label>مرتب سازی بر اساس</label>
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
                      <div class='property-listing property-2 text-right'>
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
                                  4 شبکه
                                </span>
                                <span class='_list_blickes types'>ویلایی</span>
                              </div>
                              <div class='_card_flex_last'>
                                <h6 class='listing-card-info-price mb-0'>
                                  تومان 6,700
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
                                    کرج دهقان ویلای دوم
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
                                <img
                                  src='assets/img/move.svg'
                                  width='13'
                                  alt=''
                                />
                              </div>
                              820 متر
                            </div>
                          </div>
                        </div>

                        <div class='listing-detail-footer'>
                          <div class='footer-first'>
                            <div class='foot-location'>
                              <img src='assets/img/pin.svg' width='18' alt='' />
                              کرج گلشهر
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
                <div
                  class='row justify-content-center'
                  style={{ justifyContent: 'right' }}
                >
                  {/* <!-- Single Property --> */}
                  <Link
                    to='/search/1'
                    class='col-xl-12 col-lg-12 col-md-12 col-sm-12'
                  >
                    <div>
                      <div class='property-listing list_view text-right'>
                        <div class='listing-img-wrapper'>
                          <div class='_exlio_125'>اجاره </div>
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
                                    6 شبکه
                                  </span>
                                  <span class='_list_blickes types'>
                                    خانواده
                                  </span>
                                </div>
                                <div class='_card_flex_last'>
                                  <h6 class='listing-card-info-price mb-0'>
                                    تومان 7,000
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
                                      عظیمیه میدان گلستان گلستان 12
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
                                3 خواب
                              </div>
                              <div class='listing-card-info-icon'>
                                <div class='inc-fleat-icon'>
                                  <img
                                    src='assets/img/bathtub.svg'
                                    width='13'
                                    alt=''
                                  />
                                </div>
                                1 حمام
                              </div>
                              <div class='listing-card-info-icon'>
                                <div class='inc-fleat-icon'>
                                  <img
                                    src='assets/img/move.svg'
                                    width='13'
                                    alt=''
                                  />
                                </div>
                                100 متر
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
                                جزیات
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
                          placeholder='محله'
                        />
                        <i class='ti-search'></i>
                      </div>
                    </div>

                    <div class='form-group'>
                      <div class='input-with-icon'>
                        <input
                          type='text'
                          class='form-control'
                          placeholder='منطقه'
                        />
                        <i class='ti-location-pin'></i>
                      </div>
                    </div>

                    <div class='form-group'>
                      <div
                        class='simple-input'
                        style={{ justifyContent: 'right' }}
                      >
                        <Select
                          placeholder='منطقه'
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>
                    </div>

                    <div class='form-group'>
                      <div
                        class='simple-input'
                        style={{ justifyContent: 'right' }}
                      >
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                          placeholder='منطقه'
                        />
                      </div>
                    </div>

                    <div class='form-group'>
                      <div
                        class='simple-input'
                        style={{ justifyContent: 'right' }}
                      >
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                          placeholder='منطقه'
                        />
                      </div>
                    </div>

                    <div class='form-group'>
                      <div
                        class='simple-input'
                        style={{ justifyContent: 'right' }}
                      >
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                          placeholder='منطقه'
                        />
                      </div>
                    </div>

                    <div class='form-group'>
                      <div
                        class='simple-input'
                        style={{ justifyContent: 'right' }}
                      >
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                          placeholder='منطقه'
                        />
                      </div>
                    </div>

                    <div class='form-group'>
                      <div
                        class='simple-input'
                        style={{ justifyContent: 'right' }}
                      >
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                          placeholder='منطقه'
                        />
                      </div>
                    </div>

                    <div class='form-group'>
                      <div
                        class='simple-input'
                        style={{ justifyContent: 'right' }}
                      >
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                          placeholder='منطقه'
                        />
                      </div>
                    </div>

                    <div class='row'>
                      <div class='col-lg-6 col-md-6 col-sm-6'>
                        <div class='form-group'>
                          <div
                            class='simple-input'
                            style={{ justifyContent: 'right' }}
                          >
                            <input
                              type='text'
                              class='form-control'
                              placeholder='حداقل متراژ'
                            />
                          </div>
                        </div>
                      </div>
                      <div class='col-lg-6 col-md-6 col-sm-6'>
                        <div class='form-group'>
                          <div
                            class='simple-input'
                            style={{ justifyContent: 'right' }}
                          >
                            <input
                              type='text'
                              class='form-control'
                              placeholder='حداکثر متراژ'
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class='row'>
                      <div class='col-lg-12 col-md-12 col-sm-12 pt-4 text-right'>
                        <h6>امکانات ویژه</h6>
                        <ul class='row p-0 m-0'>
                          <li class='col-lg-6 col-md-6 p-0'>
                            <input
                              id='a-1'
                              class='checkbox-custom'
                              name='a-1'
                              type='checkbox'
                            />
                            <label for='a-1' class='checkbox-custom-label'>
                              کولر
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
                              اتاق خواب
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
                              گرمایش
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
                              اینترنت
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
                              ماکروفر
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
                              سیگار کشیدن
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
                              تراس
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
                              بالکن
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class='row'>
                      <div class='col-lg-12 col-md-12 col-sm-12 pt-4'>
                        <button class='btn theme-bg rounded full-width'>
                          خونه جدید پیدا کن
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
