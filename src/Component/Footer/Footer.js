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
                  ارتباط با ما
                </a>
                <div class='call_action_wrap-head' style={{ textAlign: 'end' }}>
                  <h3>سوال خود را با ما مطرح کنید</h3>
                  <span>در اسرع وقت به سوالات شما پاسخ میدهیم</span>
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
                    <div class='footer_widget text-right'>
                      <h4 class='widget_title'>خانه</h4>
                      <ul class='footer-menu'>
                        <li>
                          <a href='index.html#'>درباره ما</a>
                        </li>
                        <li>
                          <a href='index.html#'>اجاره</a>
                        </li>
                        <li>
                          <a href='index.html#'>خدمات</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class='col-lg-4 col-md-4'>
                    <div class='footer_widget text-right'>
                      <h4 class='widget_title'>همه بخش ها</h4>
                      <ul class='footer-menu'>
                        <li>
                          <a href='index.html#'>امکانات</a>
                        </li>
                        <li>
                          <a href='index.html#'>توجهات</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class='col-lg-4 col-md-4'>
                    <div class='footer_widget text-right'>
                      <h4 class='widget_title'>شرکت ها</h4>
                      <ul class='footer-menu'>
                        <li>
                          <a href='index.html#'>درباره ما</a>
                        </li>
                        <li>
                          <a href='index.html#'>اخبار</a>
                        </li>
                        <li>
                          <a href='index.html#'>قیمت</a>
                        </li>
                        <li>
                          <a href='index.html#'>مشارکت در فروش</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-lg-5 col-md-5'>
                <div class='footer_widget text-right '>
                  <img
                    src={footer}
                    class='img-footer small mb-2'
                    alt='rentvilla'
                  />
                  <h4 class='extream mb-3'>ایا لازمه کمک کنیم</h4>
                  <p>هرماه اپدیت جدید را دریافت کنید</p>
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
                          ارتباط با ما
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
                <p class='mb-0'>
                  تمام حقوق این پرتال نزد شرکت نگارینه محقوظ است
                </p>
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
