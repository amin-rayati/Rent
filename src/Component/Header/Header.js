import * as React from 'react'
import { useState } from 'react'
import logo1 from '../../Assets/img/rentvilla.png'
import { Link, NavLink } from 'react-router-dom'
import { useProjectContext } from '../../Context/ProjectProvider'
import { Cookies, useCookies } from 'react-cookie'
import Swal from 'sweetalert2'
import { BsList } from 'react-icons/bs'

import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import { Navbar, NavDropdown } from 'react-bootstrap'
import {
  AiFillHome,
  AiFillInfoCircle,
  AiFillPlusCircle,
  AiOutlineLogin,
} from 'react-icons/ai'
import { FaBuilding } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { MdDashboard } from 'react-icons/md'
import Login from '../LoginRegister/Login'

const Header = () => {
  const { loginModal, loginModalShow, userData, setUserData } =
    useProjectContext()
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const logOut = () => {
    Swal.fire({
      text: 'آیا میخواهید از سایت خارج شوید؟',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'red',
      cancelButtonText: 'خیر',
      confirmButtonText: 'بله',
    }).then((result) => {
      if (result.isConfirmed) {
        removeCookie('user')
        setUserData(null)
      }
    })
  }

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }
  const [item1, setItem1] = useState([
    { path: '', text: 'صفحه اصلی' },
    { path: '/search', text: ' اجاره ها' },
    { path: '/about', text: 'درباره ما' },
    { path: '/add', text: 'افزودن آگهی' },
    { path: '/', text: 'ورود و ثبت نام' },
  ])

  const [item, setItem] = useState([
    { path: '', text: 'صفحه اصلی' },
    { path: '/search', text: ' اجاره ها' },
    { path: '/about', text: 'درباره ما' },
    { path: '/add', text: 'افزودن آگهی' },
    { path: '/dashboard', text: 'داشبورد' },
    { path: '/', text: 'خروج' },
  ])

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {userData
          ? item.map((e, index) => (
              <>
                <NavLink
                  to={e.path}
                  style={{ color: '#27ae60', textDecoration: 'underline' }}
                >
                  <ListItem
                    onClick={e.text === 'خروج' ? logOut : null}
                    button
                    key={e.text}
                  >
                    <ListItemIcon>
                      {index === 0 ? (
                        <AiFillHome style={{ color: '#27ae60' }} size={20} />
                      ) : null}
                      {index === 1 ? (
                        <FaBuilding style={{ color: '#27ae60' }} size={20} />
                      ) : null}
                      {index === 2 ? (
                        <AiFillInfoCircle
                          style={{ color: '#27ae60' }}
                          size={20}
                        />
                      ) : null}
                      {index === 3 ? (
                        <AiFillPlusCircle
                          style={{ color: '#27ae60' }}
                          size={20}
                        />
                      ) : null}

                      {userData ? (
                        index === 4 ? (
                          <MdDashboard style={{ color: '#27ae60' }} size={20} />
                        ) : null
                      ) : null}
                      {userData ? (
                        index === 5 ? (
                          <BiLogOut
                            onClick={e.text === 'خروج' ? () => logOut() : null}
                            style={{ color: '#27ae60' }}
                            size={20}
                          />
                        ) : null
                      ) : null}
                    </ListItemIcon>
                    <p style={{ fontSize: '15px', marginTop: '12px' }}>
                      {e.text}
                    </p>
                  </ListItem>
                </NavLink>
                <Divider />
              </>
            ))
          : item1.map((e, index) => (
              <>
                <NavLink
                  to={e.path}
                  style={{ color: '#27ae60', textDecoration: 'underline' }}
                >
                  <ListItem
                    onClick={
                      e.text === 'ورود و ثبت نام' ? loginModalShow : null
                    }
                    button
                    key={e.text}
                  >
                    <ListItemIcon>
                      {index === 0 ? (
                        <AiFillHome style={{ color: '#27ae60' }} size={20} />
                      ) : null}
                      {index === 1 ? (
                        <FaBuilding style={{ color: '#27ae60' }} size={20} />
                      ) : null}
                      {index === 2 ? (
                        <AiFillInfoCircle
                          style={{ color: '#27ae60' }}
                          size={20}
                        />
                      ) : null}
                      {index === 3 ? (
                        <AiFillPlusCircle
                          style={{ color: '#27ae60' }}
                          size={20}
                        />
                      ) : null}

                      {!userData ? (
                        index === 4 ? (
                          <AiOutlineLogin
                            style={{ color: '#27ae60' }}
                            size={20}
                          />
                        ) : null
                      ) : null}
                    </ListItemIcon>
                    <p style={{ fontSize: '15px', marginTop: '12px' }}>
                      {e.text}
                    </p>
                  </ListItem>
                </NavLink>
                <Divider />
              </>
            ))}
      </List>
    </Box>
  )
  return (
    <>
      <div
        className='d-xl-none d-lg-none d-md-block d-sm-block d-block '
        style={{ backgroundColor: '#27ae60' }}
      >
        <Navbar.Toggle
          style={{ border: 'none', width: '-webkit-fill-available' }}
        >
          <div className='d-flex' style={{ justifyContent: 'space-between' }}>
            <BsList
              onClick={toggleDrawer('right', true)}
              style={{ color: 'white' }}
              size={35}
            />
          </div>
        </Navbar.Toggle>
        <React.Fragment key={'right'}>
          <SwipeableDrawer
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            <a className='nav-brand static-logo' href='index.html'>
              <img src={logo1} className='logo' alt='rentvilla' />
            </a>
            {list('right')}
          </SwipeableDrawer>
        </React.Fragment>
      </div>
      <div className='header header-transparent change-logo d-xl-block d-lg-block d-md-none d-sm-none d-none'>
        <div className='container'>
          <nav id='navigation' className='navigation navigation-landscape'>
            <div className='nav-header'>
              <ul className='nav-menu nav-menu-social align-to-right'>
                {!userData ? (
                  <li>
                    <a
                      className='alio_green'
                      data-toggle='modal'
                      data-target='#login'
                      onClick={loginModalShow}
                      style={{ cursor: 'pointer' }}
                    >
                      <span className='dn-lg'>ورود و ثبت نام</span>
                    </a>
                    {loginModal ? <Login /> : null}
                  </li>
                ) : (
                  <li style={{ cursor: 'pointer' }}>
                    <NavDropdown
                      title={userData['firstName'] + ' ' + userData['lastName']}
                      id='collasible-nav-dropdown '
                      style={{
                        right: '0px',
                        borderRadius: '20px',
                        width: 'fit-content',
                        textAlign: 'right',
                      }}
                    >
                      {' '}
                      <NavDropdown.Item style={{ textAlign: 'end' }}>
                        <Link
                          to='/dashboard'
                          style={{ cursor: 'pointer', textAlign: 'right' }}
                        >
                          داشبورد
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        onClick={() => logOut()}
                        style={{ textAlign: 'right', cursor: 'pointer' }}
                      >
                        خروج
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                )}
                <li className='add-listing'>
                  <Link to='/add' className='theme-cl'>
                    <i className='fas fa-plus-circle mr-1'></i>افزودن ملک
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className='nav-menus-wrapper'
              style={{ transitionProperty: 'none' }}
            >
              <Link
                to='/'
                className='nav-brand static-logo'
                style={{ float: 'right', marginTop: '7px' }}
              >
                <img src={logo1} className='logo' alt='rentvilla' />
              </Link>
              <ul className='nav-menu' style={{ float: 'right' }}>
                <li>
                  <Link to='/about'>
                    درباره ما<span className='submenu-indicator'></span>
                  </Link>
                </li>
                <li>
                  <Link to='/search'>
                    اجاره ها<span className='submenu-indicator'></span>
                  </Link>
                </li>
                <li className='active'>
                  <Link to='/'>
                    صفحه اصلی<span className='submenu-indicator'></span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
