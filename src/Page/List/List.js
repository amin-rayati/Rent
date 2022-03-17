import {React, useEffect, useState} from 'react'
import {MySelect} from "../../Component/MySelect";
import {number_format, RequestsUtil} from "../../Utils/RequestsUtil";
import Loading from "../../Component/Loading/LoginLoading";
import {RiArrowDownSLine, RiArrowLeftSLine} from "react-icons/ri";
import {Link, useLocation} from "react-router-dom";
import CheckBox from "@mui/material/Checkbox";
import Checkbox from "@mui/material/Checkbox";

import {Modal} from "react-bootstrap";
import {components} from "react-select";
import Button from "@mui/material/Button";

const {Option} = components;
const IconOption = props => (
    <Option {...props}>
        {props.data.icon ? <img className='ml-2'
                                src={props.data.icon}
                                style={{width: 36}}
                                alt={props.data.label}
        /> : ''}

        {props.data.label}
    </Option>
);

const List = () => {
    const CheckBox = ({option, type, onChange}) => {
        type = `${type}[${option.id}]`;

        return (
            <>
                <div className='form-group col-md-4 d-flex'>

                    <Checkbox id={type + "_" + option.id} onChange={onChange} value={option.id} name={type}
                              color="success"/>
                    <label className='mt-auto mb-auto'>{option.name}</label>

                </div>
            </>
        );
    }
    let {pathname} = useLocation();

    const getCity = async () => {
        await getCities();

        setShowCityModal(true);
    }


    const [grid, setGrid] = useState(false)
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [ads, setAds] = useState([]);
    const [showTrust, setShowTrust] = useState(false);
    const [showRent, setShowRent] = useState(false);
    const [showCityModal, setShowCityModal] = useState(false);
    const [closeCityModal, setCloseCityModal] = useState(false);
    const [cityId, setCityId] = useState(0);
    const [districts, setDistricts] = useState(0);
    const loadMore = async () => {
        setLoading(true);
        await setPage(prevState => prevState + 1);
        await getAds();
        setLoading(false);
    }
    const getAds = async () => {
        setTimeout(async () => {
            let form = document.getElementById('filterForm')
            let formData = new FormData(form);
            formData.append('page', page.toString());
            formData.append('cityId', cityId.toString());
            if (!formData.get('categoryId')) {
                formData.set('categoryId', '0');
            }
            const list = await RequestsUtil.adList(formData);
            if (list.isDone) {
                setAds(prevState => [...prevState, ...list.data]);
            }
        }, 250)
    }
    const expandTrust = () => setShowTrust(!showTrust)

    const expandRent = () => setShowRent(!showRent)
    const [cities, setCities] = useState([]);
    const selectCity = async cityId => {
        window.location.href = '/search/' + cityId
    }
    const getCities = async () => {
        let result = await RequestsUtil.allCities();
        if (result.isDone) {
            setCities(result.data);
        }
    }
    useEffect(() => {
        if (pathname.split('/').length < 3) {
            getCity();
        } else {
            setCityId(parseInt(pathname.split('/').pop()));
            init(parseInt(pathname.split('/').pop()));
        }
    }, [])
    const init = async cityId => {
        await getCities();
        await getAds();
        await getDistricts(cityId);
        await getCategories();
    }
    const getDistricts = async cityId => {
        let result = await RequestsUtil.getDistricts(cityId);
        if (result.isDone) {
            setDistricts(result.data);
        }
    }
    const FilterComponent = ({show, title, expand, name,}) => {
        return (
            <div className='form-group row pr-3 pl-3 flex-nowrap'>
                                           <span onClick={expand}
                                                 className={'collapse-icon-parsa ' + (show ? 'rotate' : '')}>
                                                <RiArrowDownSLine size={25}/>
                                            </span>
                <div className={'filter-collapse mr-1 ' + (show ? 'expand' : '')}>
                    <div className='justify-content-between'>
                        <span className='expand-title'>{title}</span>
                        <span className='expand-title text-danger float-left'
                              style={{fontSize: '12px', cursor: 'pointer',}}>
                                                    {show ? 'اعمال' : 'حذف'}
                                                </span>
                    </div>
                    <div className='mt-3 row pl-3 pr-3  justify-content-between'>
                        <label style={{fontSize: '12px', color: "grey"}} className='mt-auto mb-auto'>حداقل</label>
                        <input
                            name={name + '[min]'}
                            type='text'
                            className='form-control w-75 expand-input'
                            placeholder='مبلغ پیشنهادی'
                        />
                    </div>
                    <div className='row mt-2 pl-3 pr-3 justify-content-between'>
                        <label style={{fontSize: '12px', color: "grey"}} className='mt-auto mb-auto'>حداکثر</label>
                        <input
                            name={name + '[max]'}
                            type='text'
                            className='form-control w-75 expand-input'
                            placeholder='مبلغ پیشنهادی'
                        />
                    </div>
                </div>
            </div>
        );
    }
    const SelectCityModal = () => {

        const CityListItem = ({city}) => {
            return <li onClick={() => selectCity(city.id)}
                       className={'d-flex justify-content-between city-item ' + (cities.indexOf(city) === cities.length - 1 ? 'last' : '')}>
            <span>
                {city.name}
            </span>
                <RiArrowLeftSLine className='mt-auto mb-auto' color='grey'/>
            </li>
        }
        return <Modal show={showCityModal} onHide={closeCityModal} centered>
            <Modal.Header style={{justifyContent: 'center', border: 'none'}}>
                <Modal.Title
                    style={{fontWeight: 'bolder', textAlign: 'center', width: '100%', direction: 'rtl'}}
                >
                    <div
                        style={{
                            borderRadius: '10px',
                            color: 'grey',
                            width: '100%',

                            fontSize: '21px',
                        }}
                    >
                        انتخاب شهر
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body
                style={{direction: 'rtl', textAlign: 'right', height: '300px'}}
            >
                <ul>
                    {cities.map(e => <CityListItem city={e}/>)}
                </ul>
            </Modal.Body>
        </Modal>;
    }
    const [categories, setCategories] = useState(null);

    const getCategories = async () => {
        const res = await RequestsUtil.getCategories();
        if (res.isDone) {
            setCategories(res.data);
        }
    }
    const [optionData, setOptionData] = useState(null);
    const onCategoryChanged = async e => {
        await getOptionData(e.value);
        await getAds();
    }

    const getOptionData = async categoryId => {
        const res = await RequestsUtil.getOptionData(categoryId);
        if (res.isDone) {
            setOptionData(res.data);
        }
    }
    return (
        <>
            <SelectCityModal/>
            <div id='main-wrapper' style={{direction: 'rtl'}}>

                <section className='gray pt-4 ' style={{marginTop: '80px'}}>
                    <div
                        className='row mt-5 col-xl-10 col-lg-12 col-md-12 col-sm-12 mr-auto ml-auto justify-content-center'>
                        <div className='col-lg-4 order-lg-1 col-md-12 order-md-1 col-sm-12 order-sm-1 col-12 order-1'>
                            <div className='page-sidebar p-0'>
                                <div id='fltbox'>
                                    <form id='filterForm' className='sidebar-widgets p-4'>
                                        <FilterComponent name='trust' show={showTrust} expand={expandTrust}
                                                         title='ودیعه'/>
                                        <FilterComponent name='rent' show={showRent} expand={expandRent} title='اجاره'/>


                                        <div className='form-group'>
                                            {districts ? <div
                                                className='simple-input'
                                                style={{justifyContent: 'right'}}
                                            >

                                                <MySelect
                                                    onChange={getAds}
                                                    placeholder='منطقه'
                                                    name='districtIds[]'
                                                    isMulti={true}
                                                    options={
                                                        districts.map(e => {
                                                            return {
                                                                label: e.name,
                                                                value: e.id,
                                                            };
                                                        })
                                                    }
                                                />
                                            </div> : ''}
                                        </div>

                                        <div className='form-group'>
                                            {categories ? <div
                                                className='simple-input'
                                                style={{justifyContent: 'right'}}
                                            >
                                                <MySelect

                                                    name='categoryId'
                                                    placeholder='دسته بندی'
                                                    components={{Option: IconOption,}}
                                                    onChange={onCategoryChanged}

                                                    options={[
                                                        {
                                                            label: "همه",
                                                            value: 0,

                                                        },
                                                        ...categories.map(e => {
                                                            return {
                                                                label: e.name,
                                                                value: e.id,
                                                                icon: e.icon,
                                                            };
                                                        })
                                                    ]}
                                                />
                                            </div> : ''}
                                        </div>

                                        {optionData ? <>
                                            <div className='row'>
                                                <h6 className='mt-2 mr-3'>امکانات پیشرفته</h6>
                                                <div className='col-lg-12 col-md-12 col-sm-12 text-right row  mr-1'>
                                                    {optionData.advancedOptions.map(e => <CheckBox onChange={getAds}
                                                                                                   option={e}
                                                                                                   type={'advancedOptions'}
                                                    />)}
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <h6 className='mt-2 mr-3'>امکانات رفاهی</h6>
                                                <div className='col-lg-12 col-md-12 col-sm-12 text-right row  mr-1'>

                                                    {optionData.welfareOptions.map(e => <CheckBox onChange={getAds}
                                                                                                  option={e}
                                                                                                  type={'welfareOptions'}
                                                    />)}
                                                </div>
                                            </div>


                                            {optionData.options ?
                                                optionData.options.map(e => {
                                                    return <div className='form-group'>
                                                        <div
                                                            className='simple-input'
                                                            style={{justifyContent: 'right'}}
                                                        >
                                                            <label>{e.name}</label>
                                                            {e.values.length > 0 ? <MySelect
                                                                name={`options[${e.id}][]`}
                                                                placeholder=''
                                                                isMulti={true}
                                                                onChange={getAds}
                                                                options={e.values.map(value => {
                                                                    return {
                                                                        label: value.name,
                                                                        value: value.id,
                                                                    };
                                                                })}
                                                            /> : <input name={`options[${e.id}]`}
                                                                        className='form-control'/>
                                                            }
                                                        </div>
                                                    </div>;
                                                })
                                                : ''}
                                            {optionData.otherOptions ?
                                                optionData.otherOptions.map(e => {
                                                    return <div className='form-group'>
                                                        <div
                                                            className='simple-input'
                                                            style={{justifyContent: 'right'}}
                                                        >
                                                            <label>{e.name}</label>
                                                            {e.values.length > 0 ? <MySelect
                                                                name={`otherOptions[${e.id}][]`}
                                                                placeholder=''
                                                                isMulti={true}
                                                                onChange={getAds}

                                                                options={e.values.map(value => {
                                                                    return {
                                                                        label: value.name,
                                                                        value: value.id,
                                                                    };
                                                                })}
                                                            /> : <input name={`options[${e.id}]`}
                                                                        className='form-control'/>
                                                            }
                                                        </div>
                                                    </div>;
                                                })
                                                : ''}
                                        </> : ''}

                                    </form>
                                </div>
                            </div>
                        </div>


                        <div
                            className='col-lg-8 order-lg-1 col-md-12 order-md-2 col-sm-12 order-sm-2 col-12 order-1'>
                            <div
                                className='row justify-content-center'
                                style={{justifyContent: 'center'}}
                            >

                                {
                                    ads.length > 0 ?
                                        <>
                                            {ads.map(e => <SingleAdListItem ad={e}/>)}
                                            <Button onClick={loadMore} className='login-btn'>
                                                {!loading ? 'بارگذاری بیشتر...' : <Loading/>}
                                            </Button>
                                        </>
                                        : <Loading/>
                                }
                            </div>
                        </div>


                    </div>

                </section>
            </div>
        </>
    )

}
const SingleAdListItem = ({ad}) => {
    return (
        <div
            className='col-xl-12 col-lg-12 col-md-12 col-sm-12'
        >
            <div>
                <div className='property-listing list_view text-right row'>
                    <div className='listing-img-wrapper text-center' style={{width: '14em',}}>
                        <Link to={'/ad/' + ad.id}>
                            <img
                                style={{
                                    width: '12em',
                                    height: '12em',
                                    borderRadius: '10px',
                                    objectFit: 'cover',
                                }}
                                src={ad.image}
                                className='img-fluid mx-auto'
                                alt=''
                            />
                        </Link>


                        <span className='text-center mt-4 d-block' style={{color: "grey", fontSize: '12px'}}>
                            {ad.date} در {ad.district.name}
                        </span>

                    </div>

                    <div className='list_view_flex' style={{width: 'max-content'}}>
                        <div className='listing-detail-wrapper mt-1'>
                            <div className='listing-short-detail-wrap'>
                                <div className='_card_list_flex mb-2'>
                                    <div className='_card_flex_01'>
                                        {
                                            ad.advancedOptions ?
                                                ad.advancedOptions.map(e => <span
                                                        className={`_list_blickes ${e.isActive ? 'types' : '_netork'}`}>
                                                        {e.name}
                                                </span>
                                                )
                                                : ''
                                        }
                                        {
                                            ad.welfareOptions ?
                                                ad.welfareOptions.map(e => <span
                                                        className={`_list_blickes m-1 ${e.isActive ? 'types' : '_netork'}`}>
                                                        {e.name}
                                                </span>
                                                )
                                                : ''
                                        }
                                    </div>
                                    <div className='_card_flex_last'>
                                        <h6 className='listing-card-info-price mb-0'>
                                            {ad.rentType.name} - {number_format(ad.rent)} تومان
                                        </h6>
                                    </div>
                                </div>
                                <div className='_card_list_flex'>
                                    <div className='_card_flex_01'>
                                        <h3 className='listing-name verified mr-1' style={{fontSize: '21px'}}>
                                            {ad.title}
                                        </h3>
                                        <p className='mr-1' style={{color: "grey", fontSize: '12px'}}>
                                            {ad.details}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='price-features-wrapper'>
                            <div className='list-fx-features'>
                                {
                                    ad.options.map(e => <div className='listing-card-info-icon'>

                                        {e.name}: {e.value.name}
                                    </div>)
                                }
                                {
                                    ad.otherOptions.map(e => <div className='listing-card-info-icon'>

                                        {e.name}: {e.value.name}
                                    </div>)
                                }
                            </div>
                        </div>

                        <div className='listing-detail-footer'>
                            <div className='footer-first' style={{color: "grey", fontSize: '1۲px'}}>
                                ودیعه: {number_format(ad.trust)} تومان
                            </div>
                            <div className='footer-flex'>
                                <a href={'/ad/' + ad.id} className='prt-view'>
                                    مشاهده
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default List
