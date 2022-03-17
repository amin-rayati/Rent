import Select from "react-select";
import {Link} from "react-router-dom";
import {FaMinus, FaPlus, FaSearch} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import {RequestsUtil} from "../../Utils/RequestsUtil";
import {Placeholder} from "react-select/animated/dist/react-select.esm";

export const MainSearch = () => {

    const type = [
        {label: 'اجاره روزانه', value: '1'},
        {label: 'اجاره هفتگی', value: '2'},
        {label: 'اجاره ماهانه', value: '3'},
        {label: 'اجاره سالیانه', value: '4'},
    ]
    const [count, setCount] = useState(0);
    const [cities, setCities] = useState([]);
    const [cityId, setCiyId] = useState(null);

    const [isCounterShown, setIsCounterShown] = useState(false);

    const toggleCounter = () => {
        setIsCounterShown(!isCounterShown);
    }
    const getCities = async () => {
        const res = await RequestsUtil.topCities();
        if (res.isDone) {
            setCities(res.data);
        }
    }
    useEffect(() => {
        getCities();
    }, [])
    return (
        <div className='col-xl-10 col-lg-11 col-md-12'>
            <div className='full_search_box nexio_search lightanic_search hero_search-radius modern'>
                <div className='search_hero_wrapping'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'  style={{zIndex: '12'}}>
                            <div className='form-group p-3 text-right'>
                                <label>شهر مورد نظر</label>
                                <div className='input-with-icon mt-3'>
                                    <Select
                                        isRtl={true}
                                        onChange={e => setCiyId(e.value)}
                                        placeholder={<div>شهر یا کد آگهی</div>}
                                        options={cities.map(e => {
                                            return {
                                                label: e.name,
                                                value: e.id,
                                            }
                                        })}
                                    >
                                    </Select>
                                </div>
                            </div>
                        </div>

                        {/*<div className='col-lg-4 col-md-4 col-sm-12' style={{zIndex: '11'}}>*/}
                        {/*    <div className='form-group p-3 text-right'>*/}
                        {/*        <div className='input-with-icon'>*/}
                        {/*            <button onClick={toggleCounter} className="sc-AxjAm sc-fznMAR llYUQi p-2"*/}
                        {/*                    style={{direction: 'rtl'}}>*/}
                        {/*                <label>تعداد نفرات</label>*/}
                        {/*                <br/>*/}
                        {/*                <span className='count-display-span'>{count} نفر</span>*/}
                        {/*            </button>*/}
                        {/*            {isCounterShown ? (<div className='counter-drop-down'>*/}
                        {/*                <div className='row rtl'>*/}
                        {/*                    <div className='col-6'>*/}

                        {/*                        تعداد نفرات*/}
                        {/*                    </div>*/}
                        {/*                    <div className='col-6'>*/}
                        {/*                        <div className='counter-box'>*/}
                        {/*                            <FaPlus onClick={() => setCount(count + 1)}/>*/}
                        {/*                            <span>{count} نفر</span>*/}
                        {/*                            <FaMinus onClick={() => setCount(count > 0 ? count - 1 : 0)}/>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div onClick={toggleCounter} className='counter-close'>بستن</div>*/}
                        {/*            </div>) : ''}*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className='col-lg-4 col-md-4 col-sm-12' style={{zIndex: '10'}}>*/}
                        {/*    <div className='form-group p-3 none text-right'>*/}
                        {/*        <label>نوع اجاره</label>*/}
                        {/*        <div className='input-with-icon'>*/}
                        {/*            <Select*/}

                        {/*                isRtl={true}*/}
                        {/*                placeholder={<div/>}*/}
                        {/*                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}*/}

                        {/*                style={{direction: 'rtl'}}*/}
                        {/*                options={type}*/}

                        {/*            >*/}
                        {/*            </Select>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </div>

                    <Link

                        class='col-lg-12 col-md-12 col-sm-12 '
                        to={'/search/'+cityId}
                    >
                                <button disabled={cityId === null} className='btn search-btn text-white'>
                                     <span className='mr-1'> جستجو </span>
                                    <FaSearch/>
                                </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}