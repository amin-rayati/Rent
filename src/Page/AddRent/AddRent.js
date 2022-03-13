import React from 'react'
import Select from 'react-select'

const AddRent = () => {
  const aquaticCreatures = [
    { label: 'بهشتی', value: 'بهشتی' },
    { label: 'طالقانی', value: 'طالقانی' },
    { label: 'شهدا', value: 'شهدا' },
    { label: 'باغستان', value: 'باغستان' },
    { label: 'شاهین ویلا', value: 'شاهین ویلا' },
  ]
  return (
    <div id='main-wrapper'>
      <div
        class='page-title addBack'
        data-overlay='5'
        style={{ marginTop: '80px' }}
      >
        <div class='container'>
          <div class='row'>
            <div class='col-lg-12 col-md-12'>
              <div class='breadcrumbs-wrap text-right'>
                <ol class='breadcrumb text-right'>
                  <li class=' text-right ' aria-current='page'>
                    افزودن ملک
                  </li>
                </ol>
                <h2 class='breadcrumb-title'>موارد خود را اضافه کنید</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-12 col-md-12'>
              <div class='alert alert-info' role='alert'>
                <p>
                  اگر در سایت ثبت نام نکردید اینجا کلیک کنید
                  <a href='submit-property.html#'>ثبت نام</a>
                </p>
              </div>
            </div>

            <div class='col-lg-12 col-md-12 text-right'>
              <div class='submit-page p-0'>
                <div class='frm_submit_block'>
                  <h3>اطلاعات پایه</h3>
                  <div class='frm_submit_wrap'>
                    <div class='form-row'>
                      <div class='form-group col-md-12'>
                        <label>
                          لیست موارد
                          <a
                            href='submit-property.html#'
                            class='tip-topdata'
                            data-tip='Property Title'
                          >
                            <i class='ti-help'></i>
                          </a>
                        </label>
                        <input type='text' class='form-control' />
                      </div>

                      <div class='form-group col-md-6'>
                        <label>وضعیت</label>
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>

                      <div class='form-group col-md-6'>
                        <label>نوع موارد</label>
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>

                      <div class='form-group col-md-6'>
                        <label>قیمت</label>
                        <input
                          type='text'
                          class='form-control'
                          placeholder='USD'
                        />
                      </div>

                      <div class='form-group col-md-6'>
                        <label>فضا</label>
                        <input type='text' class='form-control' />
                      </div>

                      <div class='form-group col-md-6'>
                        <label>اتاق خواب</label>
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>

                      <div class='form-group col-md-6'>
                        <label>حمام</label>
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class='frm_submit_block'>
                  <h3>منطقه</h3>
                  <div class='frm_submit_wrap'>
                    <div class='form-row'>
                      <div class='form-group col-md-6'>
                        <label>شهر</label>
                        <input type='text' class='form-control' />
                      </div>
                      <div class='form-group col-md-6'>
                        <label>استان</label>
                        <input type='text' class='form-control' />
                      </div>

                      <div class='form-group col-md-6'>
                        <label>آدرس</label>
                        <input type='text' class='form-control' />
                      </div>
                    </div>
                  </div>
                </div>

                <div class='frm_submit_block'>
                  <h3>جزئیات</h3>
                  <div class='frm_submit_wrap'>
                    <div class='form-row'>
                      <div class='form-group col-md-12'>
                        <label>توضیحات</label>
                        <textarea class='form-control h-120'></textarea>
                      </div>

                      <div class='form-group col-md-4'>
                        <label>سال ساخت</label>
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>

                      <div class='form-group col-md-4'>
                        <label>پارکینگ</label>
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>

                      <div class='form-group col-md-4'>
                        <label>اتاق ها</label>
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>

                      <div class='form-group col-md-12'>
                        <label>امکانات دیگر</label>
                        <div class='o-features'>
                          <ul class='no-ul-list third-row'>
                            <li>
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
                            <li>
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
                            <li>
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
                            <li>
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
                            <li>
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

                            <li>
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
                            <li>
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

                            <li>
                              <input
                                id='a-10'
                                class='checkbox-custom'
                                name='a-10'
                                type='checkbox'
                              />
                              <label for='a-10' class='checkbox-custom-label'>
                                وای فای
                              </label>
                            </li>
                            <li>
                              <input
                                id='a-11'
                                class='checkbox-custom'
                                name='a-11'
                                type='checkbox'
                              />
                              <label for='a-11' class='checkbox-custom-label'>
                                زمین بازی
                              </label>
                            </li>
                            <li>
                              <input
                                id='a-12'
                                class='checkbox-custom'
                                name='a-12'
                                type='checkbox'
                              />
                              <label for='a-12' class='checkbox-custom-label'>
                                پارکینگ
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class='frm_submit_block'>
                  <h3>ارتباط با ما</h3>
                  <div class='frm_submit_wrap'>
                    <div class='form-row'>
                      <div class='form-group col-md-4'>
                        <label>نام</label>
                        <input type='text' class='form-control' />
                      </div>

                      <div class='form-group col-md-4'>
                        <label>ایمیل</label>
                        <input type='text' class='form-control' />
                      </div>

                      <div class='form-group col-md-4'>
                        <label>شماره تماس</label>
                        <input type='text' class='form-control' />
                      </div>
                    </div>
                  </div>
                </div>

                <div class='form-group'>
                  <div class='col-lg-12 col-md-12'>
                    <button class='btn btn-theme' type='submit'>
                      ارسال پیام
                    </button>
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

export default AddRent
