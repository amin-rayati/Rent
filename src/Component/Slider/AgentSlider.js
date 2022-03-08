import { React } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import ver1 from '../../Assets/img/verified.svg'
import team1 from '../../Assets/img/team-1.jpg'

import { ImLocation2 } from 'react-icons/im'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
} from 'react-icons/fa'
import { AiFillInstagram, AiFillPhone } from 'react-icons/ai'

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
          {/* <!-- Single Item --> */}
          <div class='single_items'>
            <div class='grid_agents'>
              <div class='elio_mx_list theme-bg-2'>102 Listings</div>
              <div class='grid_agents-wrap'>
                <div class='fr-grid-thumb'>
                  <a href='agent-page.html'>
                    <span class='verified'>
                      <img src={ver1} class='verify mx-auto' alt='' />
                    </span>
                    <img src={team1} class='img-fluid mx-auto' alt='' />
                  </a>
                </div>

                <div class='fr-grid-deatil'>
                  <span>
                    <ImLocation2 />
                    Montreal, USA
                  </span>
                  <h5 class='fr-can-name'>
                    <a href='agent-page.html'>Mark C. Muler</a>
                  </h5>
                  <ul class='inline_social'>
                    <li>
                      <a href='index.html#' class='fb'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='index.html#' class='ln'>
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href='index.html#' class='ins'>
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li>
                      <a href='index.html#' class='tw'>
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>

                <div class='fr-infos-deatil'>
                  <span
                    data-toggle='modal'
                    data-target='#autho-message'
                    class='btn agent-btn theme-bg'
                  >
                    <FaEnvelope style={{ margin: '7px' }} />
                    Message
                  </span>
                  <a href='index.html#' class='btn agent-btn theme-black'>
                    <AiFillPhone />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='item-slide space' style={{ width: '98%' }}>
          {/* <!-- Single Item --> */}
          <div class='single_items'>
            <div class='grid_agents'>
              <div class='elio_mx_list theme-bg-2'>102 Listings</div>
              <div class='grid_agents-wrap'>
                <div class='fr-grid-thumb'>
                  <a href='agent-page.html'>
                    <span class='verified'>
                      <img src={ver1} class='verify mx-auto' alt='' />
                    </span>
                    <img src={team1} class='img-fluid mx-auto' alt='' />
                  </a>
                </div>

                <div class='fr-grid-deatil'>
                  <span>
                    <ImLocation2 />
                    Montreal, USA
                  </span>
                  <h5 class='fr-can-name'>
                    <a href='agent-page.html'>Mark C. Muler</a>
                  </h5>
                  <ul class='inline_social'>
                    <li>
                      <a href='index.html#' class='fb'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='index.html#' class='ln'>
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href='index.html#' class='ins'>
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li>
                      <a href='index.html#' class='tw'>
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>

                <div class='fr-infos-deatil'>
                  <span
                    data-toggle='modal'
                    data-target='#autho-message'
                    class='btn agent-btn theme-bg'
                  >
                    <FaEnvelope style={{ margin: '7px' }} />
                    Message
                  </span>
                  <a href='index.html#' class='btn agent-btn theme-black'>
                    <AiFillPhone />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='item-slide space' style={{ width: '98%' }}>
          {/* <!-- Single Item --> */}
          <div class='single_items'>
            <div class='grid_agents'>
              <div class='elio_mx_list theme-bg-2'>102 Listings</div>
              <div class='grid_agents-wrap'>
                <div class='fr-grid-thumb'>
                  <a href='agent-page.html'>
                    <span class='verified'>
                      <img src={ver1} class='verify mx-auto' alt='' />
                    </span>
                    <img src={team1} class='img-fluid mx-auto' alt='' />
                  </a>
                </div>

                <div class='fr-grid-deatil'>
                  <span>
                    <ImLocation2 />
                    Montreal, USA
                  </span>
                  <h5 class='fr-can-name'>
                    <a href='agent-page.html'>Mark C. Muler</a>
                  </h5>
                  <ul class='inline_social'>
                    <li>
                      <a href='index.html#' class='fb'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='index.html#' class='ln'>
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href='index.html#' class='ins'>
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li>
                      <a href='index.html#' class='tw'>
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>

                <div class='fr-infos-deatil'>
                  <span
                    data-toggle='modal'
                    data-target='#autho-message'
                    class='btn agent-btn theme-bg'
                  >
                    <FaEnvelope style={{ margin: '7px' }} />
                    Message
                  </span>
                  <a href='index.html#' class='btn agent-btn theme-black'>
                    <AiFillPhone />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='item-slide space' style={{ width: '98%' }}>
          {/* <!-- Single Item --> */}
          <div class='single_items'>
            <div class='grid_agents'>
              <div class='elio_mx_list theme-bg-2'>102 Listings</div>
              <div class='grid_agents-wrap'>
                <div class='fr-grid-thumb'>
                  <a href='agent-page.html'>
                    <span class='verified'>
                      <img src={ver1} class='verify mx-auto' alt='' />
                    </span>
                    <img src={team1} class='img-fluid mx-auto' alt='' />
                  </a>
                </div>

                <div class='fr-grid-deatil'>
                  <span>
                    <ImLocation2 />
                    Montreal, USA
                  </span>
                  <h5 class='fr-can-name'>
                    <a href='agent-page.html'>Mark C. Muler</a>
                  </h5>
                  <ul class='inline_social'>
                    <li>
                      <a href='index.html#' class='fb'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='index.html#' class='ln'>
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href='index.html#' class='ins'>
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li>
                      <a href='index.html#' class='tw'>
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>

                <div class='fr-infos-deatil'>
                  <span
                    data-toggle='modal'
                    data-target='#autho-message'
                    class='btn agent-btn theme-bg'
                  >
                    <FaEnvelope style={{ margin: '7px' }} />
                    Message
                  </span>
                  <a href='index.html#' class='btn agent-btn theme-black'>
                    <AiFillPhone />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='item-slide space' style={{ width: '98%' }}>
          {/* <!-- Single Item --> */}
          <div class='single_items'>
            <div class='grid_agents'>
              <div class='elio_mx_list theme-bg-2'>102 Listings</div>
              <div class='grid_agents-wrap'>
                <div class='fr-grid-thumb'>
                  <a href='agent-page.html'>
                    <span class='verified'>
                      <img src={ver1} class='verify mx-auto' alt='' />
                    </span>
                    <img src={team1} class='img-fluid mx-auto' alt='' />
                  </a>
                </div>

                <div class='fr-grid-deatil'>
                  <span>
                    <ImLocation2 />
                    Montreal, USA
                  </span>
                  <h5 class='fr-can-name'>
                    <a href='agent-page.html'>Mark C. Muler</a>
                  </h5>
                  <ul class='inline_social'>
                    <li>
                      <a href='index.html#' class='fb'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='index.html#' class='ln'>
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href='index.html#' class='ins'>
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li>
                      <a href='index.html#' class='tw'>
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>

                <div class='fr-infos-deatil'>
                  <span
                    data-toggle='modal'
                    data-target='#autho-message'
                    class='btn agent-btn theme-bg'
                  >
                    <FaEnvelope style={{ margin: '7px' }} />
                    Message
                  </span>
                  <a href='index.html#' class='btn agent-btn theme-black'>
                    <AiFillPhone />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='item-slide space' style={{ width: '98%' }}>
          {/* <!-- Single Item --> */}
          <div class='single_items'>
            <div class='grid_agents'>
              <div class='elio_mx_list theme-bg-2'>102 Listings</div>
              <div class='grid_agents-wrap'>
                <div class='fr-grid-thumb'>
                  <a href='agent-page.html'>
                    <span class='verified'>
                      <img src={ver1} class='verify mx-auto' alt='' />
                    </span>
                    <img src={team1} class='img-fluid mx-auto' alt='' />
                  </a>
                </div>

                <div class='fr-grid-deatil'>
                  <span>
                    <ImLocation2 />
                    Montreal, USA
                  </span>
                  <h5 class='fr-can-name'>
                    <a href='agent-page.html'>Mark C. Muler</a>
                  </h5>
                  <ul class='inline_social'>
                    <li>
                      <a href='index.html#' class='fb'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='index.html#' class='ln'>
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href='index.html#' class='ins'>
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li>
                      <a href='index.html#' class='tw'>
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>

                <div class='fr-infos-deatil'>
                  <span
                    data-toggle='modal'
                    data-target='#autho-message'
                    class='btn agent-btn theme-bg'
                  >
                    <FaEnvelope style={{ margin: '7px' }} />
                    Message
                  </span>
                  <a href='index.html#' class='btn agent-btn theme-black'>
                    <AiFillPhone />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='item-slide space' style={{ width: '98%' }}>
          {/* <!-- Single Item --> */}
          <div class='single_items'>
            <div class='grid_agents'>
              <div class='elio_mx_list theme-bg-2'>102 Listings</div>
              <div class='grid_agents-wrap'>
                <div class='fr-grid-thumb'>
                  <a href='agent-page.html'>
                    <span class='verified'>
                      <img src={ver1} class='verify mx-auto' alt='' />
                    </span>
                    <img src={team1} class='img-fluid mx-auto' alt='' />
                  </a>
                </div>

                <div class='fr-grid-deatil'>
                  <span>
                    <ImLocation2 />
                    Montreal, USA
                  </span>
                  <h5 class='fr-can-name'>
                    <a href='agent-page.html'>Mark C. Muler</a>
                  </h5>
                  <ul class='inline_social'>
                    <li>
                      <a href='index.html#' class='fb'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='index.html#' class='ln'>
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href='index.html#' class='ins'>
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li>
                      <a href='index.html#' class='tw'>
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>

                <div class='fr-infos-deatil'>
                  <span
                    data-toggle='modal'
                    data-target='#autho-message'
                    class='btn agent-btn theme-bg'
                  >
                    <FaEnvelope style={{ margin: '7px' }} />
                    Message
                  </span>
                  <a href='index.html#' class='btn agent-btn theme-black'>
                    <AiFillPhone />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  )
}
