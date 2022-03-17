import React, {useEffect, useState} from 'react'
import SingleSlider from '../../Component/Slider/SingleSlider'
import {FaClock,} from 'react-icons/fa'
import {useLocation} from "react-router-dom";
import {number_format, RequestsUtil} from "../../Utils/RequestsUtil";
import Loading from "../../Component/Loading/LoginLoading";
import Button from "@mui/material/Button";
import {MdOutlineContentCopy, MdShare} from "react-icons/md";
import Snackbar from "@mui/material/Snackbar";

const Single = () => {
    let {pathname} = useLocation();

    const [ad, setAd] = useState();
    const [mobile, setMobile] = useState();
    const [snackBarOpen, setSnackBarOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const getAd = async id => {
        const result = await RequestsUtil.getAd(id);
        console.log(result)
        if (result.isDone) {
            setAd(result.data);
        }
    }
    const getMobile = async () => {
        setIsLoading(true);
        const result = await RequestsUtil.getMobile(ad.id)
        if (result.isDone) {
            setMobile(result.data);
        }
        setIsLoading(false);

    }
    const copyMobile = () => {
        navigator.clipboard.writeText(mobile);
        setSnackBarOpen(true);

    }
    useEffect(() => {
        getAd(parseInt(pathname.split('/').pop()));
    }, [])


    const MainWidget = () => {
        return (
            <section
                className='mr-lg-5 ml-lg-5 pl-lg-5 pr-lg-5 gallery_parts pt-2 pb-2 d-block d-sm-block d-md-block d-lg-block d-xl-block single-main'
                style={{marginTop: '100px'}}
            >
                <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-12 col-sm-12 text-right mt-5'>
                        <div className='property_info_detail_wrap mb-4'>
                            <div className='property_info_detail_wrap_first text-right'>
                                <div className='pr-price-into'>
                                    <ul className='prs_lists'>
                                        <li>
                                            <span className='bath'>رهن: {number_format(ad.trust)} تومان</span>
                                        </li>
                                        <li>
                                            <span className='gar'>اجاره {ad.rentType.name}</span>
                                        </li>
                                        <li>
                                            <span className='sqft'>{ad.district.name}</span>
                                        </li>
                                    </ul>
                                    <h2 className='mt-5 mb-1'>{ad.title}</h2>
                                    <span className='mt-2' style={{color: 'grey', fontSize: '12px'}}>
                                      <FaClock style={{marginLeft: '0.5em'}}/>
                                        {ad.date} در {ad.district.name}
                                    </span>
                                    <div className='mt-4 row d-flex justify-content-between mr-2 ml-2'>
                                        <Button onClick={getMobile} className='login-btn'>
                                            {isLoading ? <Loading/> : 'اطلاعات بیشتر'}
                                        </Button>
                                        <MdShare style={{color: 'grey', cursor: 'pointer'}}
                                                 className='mt-auto mb-auto '/>
                                    </div>
                                    <div onClick={copyMobile}
                                         className={'mt-4 row d-flex justify-content-between mr-2 ml-2 mobile-div ' + (mobile ? ' mobile-show' : '')}>
                                        <span style={{color: 'grey', fontSize: '14px'}}>شماره موبایل: </span>
                                        <div>
                                            <span className='mt-auto mb-auto'
                                                  style={{color: '#e62222', cursor: 'pointer'}}>{mobile}</span>
                                            <MdOutlineContentCopy style={{color: 'grey', cursor: 'pointer'}}
                                                                  className='mt-auto mb-auto mr-2'/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='property_block_wrap'>
                            <div className='property_block_wrap_header'>
                                <h4 className='property_block_title'>درباره ملک </h4>
                            </div>

                            <div className='block-body'>
                                <p>
                                    {ad.details}
                                </p>
                            </div>
                        </div>

                        <div className='property_block_wrap'>
                            <div className='property_block_wrap_header'>
                                <h4 className='property_block_title'>امکانات پیشرفته</h4>
                            </div>

                            <div className='block-body'>
                                <ul className='row p-0 m-0 mt-1'>
                                    {ad.advancedOptions.map(e => <li className='col-lg-4 col-md-6 mb-2 p-0'>
                                        <img width='18px' src={e.icon} alt={e.name} className='ml-2'/>
                                        <span style={{fontSize: '14px'}}>{e.name}</span>
                                    </li>)}
                                </ul>
                            </div>
                        </div>

                        <div className='property_block_wrap'>
                            <div className='property_block_wrap_header'>
                                <h4 className='property_block_title'>امکانات رفاهی</h4>
                            </div>

                            <div className='block-body'>
                                <ul className='row p-0 m-0 mt-1'>
                                    {ad.welfareOptions.map(e => <li className='col-lg-4 col-md-6 mb-2 p-0'>
                                        <img width='18px' src={e.icon} alt={e.name} className='ml-2'/>
                                        <span style={{fontSize: '14px'}}>{e.name}</span>
                                    </li>)}
                                </ul>
                            </div>
                        </div>
                        <div className='property_block_wrap'>
                            <div className='property_block_wrap_header'>
                                <h4 className='property_block_title'>امکانات عمومی</h4>
                            </div>

                            <div className='block-body'>
                                <ul className='row p-0 m-0 mt-1'>
                                    {
                                        Object.values(ad.options).map(e => {
                                            return (
                                                <li className='col-lg-4 col-md-6 mb-2 p-0'>
                                                    <span style={{color: 'grey', fontSize: '12px'}}>
                                                        {e.name}:
                                                    </span>
                                                    <span style={{fontSize: '12px', marginRight: '0.4em'}}>
                                                        {e.value?.name}
                                                    </span>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='property_block_wrap'>
                            <div className='property_block_wrap_header'>
                                <h4 className='property_block_title'>امکانات اختصاصی</h4>
                            </div>

                            <div className='block-body'>
                                <ul className='row p-0 m-0 mt-1'>
                                    {
                                        Object.values(ad.otherOptions).map(e => {
                                            return (
                                                <li className='col-lg-4 col-md-6 mb-2 p-0'>
                                                    <span style={{color: 'grey', fontSize: '12px'}}>
                                                        {e.name}:
                                                    </span>
                                                    <span style={{fontSize: '12px', marginRight: '0.4em'}}>
                                                        {e.value?.name}
                                                    </span>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style={{height: '100vh'}} className='col-lg-6 col-md-12 col-sm-12 pr-1'>
                        <SingleSlider ad={ad}/>
                    </div>

                </div>
            </section>
        );
    }
    return (ad ?
        <>
            <div id='main-wrapper' className='mb-5' style={{direction: 'rtl'}}>
                <MainWidget/>
            </div>
            <Snackbar
                message="کپی شد!"

                autoHideDuration={3000}

                open={snackBarOpen}
                onClose={(event, reason) => {
                    setSnackBarOpen(false);
                    event.preventDefault()
                }}
            />
        </> : <div id='main-wrapper' style={{direction: 'rtl'}}>
            <section className='pt-4 h-100'>
                <div className='container'>
                    <Loading/>

                </div>
            </section>

        </div>)

}

export default Single
