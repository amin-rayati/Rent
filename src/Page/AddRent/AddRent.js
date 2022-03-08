import React from 'react'
import Select from 'react-select'

const AddRent = () => {
  const aquaticCreatures = [
    { label: 'Shark', value: 'Shark' },
    { label: 'Dolphin', value: 'Dolphin' },
    { label: 'Whale', value: 'Whale' },
    { label: 'Octopus', value: 'Octopus' },
    { label: 'Crab', value: 'Crab' },
    { label: 'Lobster', value: 'Lobster' },
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
              <div class='breadcrumbs-wrap'>
                <ol class='breadcrumb'>
                  <li class='breadcrumb-item ' aria-current='page'>
                    Submit Property
                  </li>
                </ol>
                <h2 class='breadcrumb-title'>Submit Your Property</h2>
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
                  If you don't have an account you can create one by{' '}
                  <a href='submit-property.html#'>Click Here</a>
                </p>
              </div>
            </div>

            <div class='col-lg-12 col-md-12'>
              <div class='submit-page p-0'>
                <div class='frm_submit_block'>
                  <h3>Basic Information</h3>
                  <div class='frm_submit_wrap'>
                    <div class='form-row'>
                      <div class='form-group col-md-12'>
                        <label>
                          Property Title
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
                        <label>Status</label>
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>

                      <div class='form-group col-md-6'>
                        <label>Property Type</label>
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>

                      <div class='form-group col-md-6'>
                        <label>Price</label>
                        <input
                          type='text'
                          class='form-control'
                          placeholder='USD'
                        />
                      </div>

                      <div class='form-group col-md-6'>
                        <label>Area</label>
                        <input type='text' class='form-control' />
                      </div>

                      <div class='form-group col-md-6'>
                        <label>Bedrooms</label>
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>

                      <div class='form-group col-md-6'>
                        <label>Bathrooms</label>
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class='frm_submit_block'>
                  <h3>Gallery</h3>
                  <div class='frm_submit_wrap'>
                    <div class='form-row'>
                      <div class='form-group col-md-12'>
                        <label>Upload Gallery</label>
                        <form
                          action='https://LoopCode.net/upload-target'
                          class='dropzone dz-clickable primary-dropzone'
                        >
                          <div class='dz-default dz-message'>
                            <i class='ti-gallery'></i>
                            <span>Drag & Drop To Change Logo</span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div class='frm_submit_block'>
                  <h3>Location</h3>
                  <div class='frm_submit_wrap'>
                    <div class='form-row'>
                      <div class='form-group col-md-6'>
                        <label>Address</label>
                        <input type='text' class='form-control' />
                      </div>

                      <div class='form-group col-md-6'>
                        <label>City</label>
                        <input type='text' class='form-control' />
                      </div>

                      <div class='form-group col-md-6'>
                        <label>State</label>
                        <input type='text' class='form-control' />
                      </div>

                      <div class='form-group col-md-6'>
                        <label>Zip Code</label>
                        <input type='text' class='form-control' />
                      </div>
                    </div>
                  </div>
                </div>

                <div class='frm_submit_block'>
                  <h3>Detailed Information</h3>
                  <div class='frm_submit_wrap'>
                    <div class='form-row'>
                      <div class='form-group col-md-12'>
                        <label>Description</label>
                        <textarea class='form-control h-120'></textarea>
                      </div>

                      <div class='form-group col-md-4'>
                        <label>Building Age (optional)</label>
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>

                      <div class='form-group col-md-4'>
                        <label>Garage (optional)</label>
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>

                      <div class='form-group col-md-4'>
                        <label>Rooms (optional)</label>
                        <Select
                          style={{ zIndex: '999' }}
                          options={aquaticCreatures}
                        />
                      </div>

                      <div class='form-group col-md-12'>
                        <label>Other Features (optional)</label>
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
                                Air Condition
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
                                Bedding
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
                                Heating
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
                                Internet
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
                                Microwave
                              </label>
                            </li>
                            <li>
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
                            <li>
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
                            <li>
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
                            <li>
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
                            <li>
                              <input
                                id='a-10'
                                class='checkbox-custom'
                                name='a-10'
                                type='checkbox'
                              />
                              <label for='a-10' class='checkbox-custom-label'>
                                Wi-Fi
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
                                Beach
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
                                Parking
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class='frm_submit_block'>
                  <h3>Contact Information</h3>
                  <div class='frm_submit_wrap'>
                    <div class='form-row'>
                      <div class='form-group col-md-4'>
                        <label>Name</label>
                        <input type='text' class='form-control' />
                      </div>

                      <div class='form-group col-md-4'>
                        <label>Email</label>
                        <input type='text' class='form-control' />
                      </div>

                      <div class='form-group col-md-4'>
                        <label>Phone (optional)</label>
                        <input type='text' class='form-control' />
                      </div>
                    </div>
                  </div>
                </div>

                <div class='form-group'>
                  <div class='col-lg-12 col-md-12'>
                    <button class='btn btn-theme' type='submit'>
                      Submit & Preview
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