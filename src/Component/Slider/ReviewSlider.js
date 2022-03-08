import { React } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import user1 from '../../Assets/img/user-1.jpg'
import c1 from '../../Assets/img/c-1.png'
import c2 from '../../Assets/img/c-2.png'
import c3 from '../../Assets/img/c-3.png'
import c4 from '../../Assets/img/c-4.png'
import { AiFillStar } from 'react-icons/ai'
export default function Carousel2() {
  const slickDefaults = {
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    dots: true,
    rtl: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          dots: true,
          rtl: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          dots: true,
          rtl: true,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          dots: true,
          rtl: true,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
          rtl: true,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
          rtl: true,
          infinite: true,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
          rtl: true,
          infinite: true,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
          rtl: true,
          infinite: true,
        },
      },
    ],
  }

  return (
    <Slider {...slickDefaults}>
      <div>
        <div class='item-slide space' style={{ width: '98%' }}>
          <div class='single_items'>
            <div class='_testimonial_wrios'>
              <div class='_testimonial_flex'>
                <div class='_testimonial_flex_first'>
                  <div class='_tsl_flex_thumb'>
                    <img src={user1} class='img-fluid' alt='' />
                  </div>
                  <div class='_tsl_flex_capst'>
                    <h5>Susan D. Murphy</h5>
                    <div class='_ovr_posts'>
                      <span>CEO, Leader</span>
                    </div>
                    <div class='_ovr_rates'>
                      <span>
                        <AiFillStar />
                      </span>
                      4.7
                    </div>
                  </div>
                </div>
                <div class='_testimonial_flex_first_last'>
                  <div class='_tsl_flex_thumb'>
                    <img src={c1} class='img-fluid' alt='' />
                  </div>
                </div>
              </div>

              <div class='facts-detail'>
                <p>
                  Faucibus tristique felis potenti ultrices ornare rhoncus
                  semper hac facilisi Rutrum tellus lorem sem velit nisi non
                  pharetra in dui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='item-slide space' style={{ width: '98%' }}>
          <div class='single_items'>
            <div class='_testimonial_wrios'>
              <div class='_testimonial_flex'>
                <div class='_testimonial_flex_first'>
                  <div class='_tsl_flex_thumb'>
                    <img src={user1} class='img-fluid' alt='' />
                  </div>
                  <div class='_tsl_flex_capst'>
                    <h5>Susan D. Murphy</h5>
                    <div class='_ovr_posts'>
                      <span>CEO, Leader</span>
                    </div>
                    <div class='_ovr_rates'>
                      <span>
                        <AiFillStar />
                      </span>
                      4.7
                    </div>
                  </div>
                </div>
                <div class='_testimonial_flex_first_last'>
                  <div class='_tsl_flex_thumb'>
                    <img src={c2} class='img-fluid' alt='' />
                  </div>
                </div>
              </div>

              <div class='facts-detail'>
                <p>
                  Faucibus tristique felis potenti ultrices ornare rhoncus
                  semper hac facilisi Rutrum tellus lorem sem velit nisi non
                  pharetra in dui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='item-slide space' style={{ width: '98%' }}>
          <div class='single_items'>
            <div class='_testimonial_wrios'>
              <div class='_testimonial_flex'>
                <div class='_testimonial_flex_first'>
                  <div class='_tsl_flex_thumb'>
                    <img src={user1} class='img-fluid' alt='' />
                  </div>
                  <div class='_tsl_flex_capst'>
                    <h5>Susan D. Murphy</h5>
                    <div class='_ovr_posts'>
                      <span>CEO, Leader</span>
                    </div>
                    <div class='_ovr_rates'>
                      <span>
                        <AiFillStar />
                      </span>
                      4.7
                    </div>
                  </div>
                </div>
                <div class='_testimonial_flex_first_last'>
                  <div class='_tsl_flex_thumb'>
                    <img src={c3} class='img-fluid' alt='' />
                  </div>
                </div>
              </div>

              <div class='facts-detail'>
                <p>
                  Faucibus tristique felis potenti ultrices ornare rhoncus
                  semper hac facilisi Rutrum tellus lorem sem velit nisi non
                  pharetra in dui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='item-slide space' style={{ width: '98%' }}>
          <div class='single_items'>
            <div class='_testimonial_wrios'>
              <div class='_testimonial_flex'>
                <div class='_testimonial_flex_first'>
                  <div class='_tsl_flex_thumb'>
                    <img src={user1} class='img-fluid' alt='' />
                  </div>
                  <div class='_tsl_flex_capst'>
                    <h5>Susan D. Murphy</h5>
                    <div class='_ovr_posts'>
                      <span>CEO, Leader</span>
                    </div>
                    <div class='_ovr_rates'>
                      <span>
                        <AiFillStar />
                      </span>
                      4.7
                    </div>
                  </div>
                </div>
                <div class='_testimonial_flex_first_last'>
                  <div class='_tsl_flex_thumb'>
                    <img src={c4} class='img-fluid' alt='' />
                  </div>
                </div>
              </div>

              <div class='facts-detail'>
                <p>
                  Faucibus tristique felis potenti ultrices ornare rhoncus
                  semper hac facilisi Rutrum tellus lorem sem velit nisi non
                  pharetra in dui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  )
}
