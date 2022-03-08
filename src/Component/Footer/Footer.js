import React from 'react'
import footer from '../../Assets/img/rentvilla-light.png'
const Footer = () => {
  return (
    <>
      {/* <!-- ============================ Call To Action ================================== --> */}
      <section class='theme-bg call_action_wrap-wrap'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-12'>
              <div class='call_action_wrap'>
                <a href='contact.html' class='btn btn-call_action_wrap'>
                  Contact Us Today
                </a>
                <div class='call_action_wrap-head' style={{ textAlign: 'end' }}>
                  <h3>Do You Have Questions ?</h3>
                  <span>
                    We'll assist you in finding the best property or homestay.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ============================ Call To Action End ================================== --> */}

      {/* <!-- ============================ Footer Start ================================== --> */}
      <footer class='dark-footer skin-dark-footer style-2'>
        <div class='footer-middle'>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-6 col-md-7 ml-auto'>
                <div class='row'>
                  <div class='col-lg-4 col-md-4'>
                    <div class='footer_widget'>
                      <h4 class='widget_title'>Layouts</h4>
                      <ul class='footer-menu'>
                        <li>
                          <a href='index.html#'>Home Page</a>
                        </li>
                        <li>
                          <a href='index.html#'>About Page</a>
                        </li>
                        <li>
                          <a href='index.html#'>Service Page</a>
                        </li>
                        <li>
                          <a href='index.html#'>Property Page</a>
                        </li>
                        <li>
                          <a href='index.html#'>Contact Page</a>
                        </li>
                        <li>
                          <a href='index.html#'>Single Blog</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class='col-lg-4 col-md-4'>
                    <div class='footer_widget'>
                      <h4 class='widget_title'>All Sections</h4>
                      <ul class='footer-menu'>
                        <li>
                          <a href='index.html#'>Features</a>
                        </li>
                        <li>
                          <a href='index.html#'>Attraction</a>
                        </li>
                        <li>
                          <a href='index.html#'>Testimonials</a>
                        </li>
                        <li>
                          <a href='index.html#'>Videos</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class='col-lg-4 col-md-4'>
                    <div class='footer_widget'>
                      <h4 class='widget_title'>Company</h4>
                      <ul class='footer-menu'>
                        <li>
                          <a href='index.html#'>About</a>
                        </li>
                        <li>
                          <a href='index.html#'>Blog</a>
                        </li>
                        <li>
                          <a href='index.html#'>Pricing</a>
                        </li>
                        <li>
                          <a href='index.html#'>Affiliate</a>
                        </li>
                        <li>
                          <a href='index.html#'>Partners</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-lg-5 col-md-5'>
                <div class='footer_widget'>
                  <img
                    src={footer}
                    class='img-footer small mb-2'
                    alt='rentvilla'
                  />
                  <h4 class='extream mb-3'>
                    Do you require assistance with
                    <br />
                    anything?
                  </h4>
                  <p>
                    Every month, receive updates, hot deals, tutorials, and
                    discounts delivered directly to your inbox.
                  </p>
                  <div class='foot-news-last'>
                    <div class='input-group'>
                      <input
                        type='text'
                        class='form-control'
                        placeholder='Email Address'
                      />
                      <div class='input-group-append'>
                        <button
                          type='button'
                          class='input-group-text theme-bg b-0 text-light'
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='footer-bottom'>
          <div class='container'>
            <div class='row align-items-center'>
              <div class='col-lg-12 col-md-12 text-center'>
                <p class='mb-0'>© 2021 RentVilla. Designd By LoopCode</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- ============================ Footer End ================================== --> */}
    </>
  )
}

export default Footer
