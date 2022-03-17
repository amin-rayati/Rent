import React, {useEffect, useState} from 'react'
import {components} from 'react-select'
import {RequestsUtil} from "../../Utils/RequestsUtil";
import {MySelect} from "../../Component/MySelect";
// import NeshanMap from 'react-neshan-map-leaflet'
import {ImageUploadPreviewComponent} from "../../Component/AddAd/ImageUpload";
import Dropzone from "react-dropzone";
import Checkbox from "@mui/material/Checkbox";

const {Option} = components;
const IconOption = props => (
    <Option {...props}>
        <img className='ml-2'
             src={props.data.icon}
             style={{width: 36}}
             alt={props.data.label}
        />
        {props.data.label}
    </Option>
);


const AddRent = () => {
    const [categories, setCategories] = useState(null);
    const [states, setStates] = useState(null);
    const [cities, setCities] = useState(null);
    const [districts, setDistricts] = useState(null);
    const [optionData, setOptionData] = useState(null);
    const [rentTypes, setRentTypes] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [adImages, setAdImages] = useState([])



    const getCategories = async () => {
        const res = await RequestsUtil.getCategories();
        if (res.isDone) {
            setCategories(res.data);
        }
    }
    const getStates = async () => {
        const res = await RequestsUtil.getStates();
        if (res.isDone) {
            setStates(res.data);
        }
    }
    const getRentTypes = async () => {
        const res = await RequestsUtil.getRentTypes();
        if (res.isDone) {
            setRentTypes(res.data);
        }
    }
    const getCities = async stateId => {
        const res = await RequestsUtil.getCities(stateId);
        if (res.isDone) {
            setCities(res.data);
        }
    }
    const getDistricts = async districtId => {
        const res = await RequestsUtil.getDistricts(districtId);
        if (res.isDone) {
            setDistricts(res.data);
        }
    }
    const getOptionData = async categoryId => {
        const res = await RequestsUtil.getOptionData(categoryId);
        if (res.isDone) {
            setOptionData(res.data);
        }
    }
    const onStateChanged = async e => getCities(e.value)
    const onCityChanged = async e => getDistricts(e.value)
    const onCategoryChanged = async e => getOptionData(e.value)
    useEffect(() => {
        getCategories();
        getRentTypes();
        getStates();
    }, [])

    const submit = async () => {
        setIsLoading(true);
        const fullForm = document.getElementById('fullForm');
        const formData = new FormData(fullForm);
        for await (const adImage of adImages) {
            formData.append('images[]',adImage);
        }
        formData.append('customerId', '1');
        let res = await RequestsUtil.uploadAd(formData);
        setIsLoading(false);
    }
    const onDrop = async acceptedFiles => {
        setIsLoading(true);
        if (adImages.length <= 20) {
            adImages.push(...acceptedFiles)
            setAdImages(adImages)
        } else {
            adImages.length = 20
            adImages.push(acceptedFiles.pop())
            setAdImages(adImages)
        }
        setIsLoading(false);

    }

    return (
        <div style={{direction: 'rtl'}} id='main-wrapper'>

            <section>
                <form id='fullForm'>
                    <div className='container mt-lg-5 mt-sm-0'>
                        <h3>ثبت آگهی</h3>

                        <div className='row'>


                            {categories ? <div className='col-lg-12 col-md-12 text-right'>
                                    <div className='submit-page p-0 mt-5'>
                                        <div className='frm_submit_block'>
                                            <div className='frm_submit_wrap'>
                                                <div className='form-row'>
                                                    <div className='form-group col-md-12'>
                                                        <label>دسته بندی</label>
                                                        <MySelect
                                                            isRtl={true}
                                                            components={{Option: IconOption,}}
                                                            onChange={onCategoryChanged}
                                                            name='categoryId'
                                                            style={{zIndex: '999'}}
                                                            options={categories.map(e => {
                                                                return {
                                                                    label: e.name,
                                                                    icon: e.icon,
                                                                    value: e.id,
                                                                }
                                                            })}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='frm_submit_block'>
                                            <div className='frm_submit_wrap'>
                                                {states ? <div className='form-row'>

                                                        <div className='form-group col-md-4'>
                                                            <label>استان</label>
                                                            <MySelect
                                                                isRtl={true}
                                                                onChange={onStateChanged}
                                                                name='stateId'
                                                                style={{zIndex: '999'}}
                                                                options={states.map(e => {
                                                                    return {
                                                                        label: e.name,
                                                                        value: e.id,
                                                                    }
                                                                })}
                                                            />
                                                        </div>
                                                        <div className='form-group col-md-4'>
                                                            <label>شهر</label>
                                                            <MySelect
                                                                isDisabled={cities === null}
                                                                isRtl={true}
                                                                onChange={onCityChanged}
                                                                name='cityId'


                                                                style={{zIndex: '999'}}
                                                                options={cities ? cities.map(e => {
                                                                    return {
                                                                        label: e.name,
                                                                        value: e.id,
                                                                    }
                                                                }) : []}
                                                            />
                                                        </div>

                                                        <div className='form-group col-md-4'>
                                                            <label>محدوده</label>
                                                            <MySelect
                                                                isDisabled={districts === null}

                                                                isRtl={true}
                                                                name='districtId'

                                                                style={{zIndex: '999'}}
                                                                options={districts ? districts.map(e => {
                                                                    return {
                                                                        label: e.name,
                                                                        value: e.id,
                                                                    }
                                                                }) : []}
                                                            />
                                                        </div>
                                                        <div className='form-group col-md-12'>
                                                            {/*<NeshanMap*/}
                                                            {/*    options={{*/}
                                                            {/*        key: 'web.x9wS92dQXwHM61Z4YlZHZcU3DornfgNCjCYD9ktu',*/}
                                                            {/*        center: [35.699739, 51.338097],*/}
                                                            {/*        zoom: 13*/}
                                                            {/*    }}*/}
                                                            {/*/>*/}
                                                        </div>

                                                    </div>

                                                    : ''}
                                            </div>
                                        </div>
                                        <div className='frm_submit_block'>
                                            <div className='frm_submit_wrap'>

                                                <div className='my-3'>
                                                    <p style={{fontWeight: 'bolder', fontSize: '19px'}}>
                                                        آپلود تصاویر
                                                    </p>

                                                    <Dropzone
                                                        onDrop={onDrop}
                                                        accept='image/png,image/jpeg,image/jpg'
                                                    >
                                                        {({getRootProps, getInputProps}) => (
                                                            <div
                                                                style={{
                                                                    width: '80%',
                                                                    borderRadius: '10px',
                                                                    border: '1px solid rgb(194 194 194)',
                                                                }}
                                                                className='mt-2 text-center container'
                                                            >
                                                                <div {...getRootProps()}>
                                                                    <input {...getInputProps()} />
                                                                    <p className='mt-2'>تصاویر را بکشید یا کلیک کنید</p>
                                                                    <br/>
                                                                    <div className='d-flex flex-wrap justify-content-center'>
                                                                        {adImages.map((e) => {
                                                                            return (
                                                                                <div className='col-md-3 mt-sm-3 mb-sm-3'>
                                                                                    <img
                                                                                        style={{
                                                                                            width: '100%',
                                                                                            height: '150px',
                                                                                            borderRadius: '10px',
                                                                                            objectFit: 'cover',
                                                                                        }}
                                                                                        alt='b'
                                                                                        src={URL.createObjectURL(e)}
                                                                                    />
                                                                                </div>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </Dropzone>
                                                </div>
                                            </div>
                                        </div>

                                        {optionData ? <div className='frm_submit_block'>
                                            <h4>جزئیات</h4>
                                            <div className='frm_submit_wrap mt-4'>
                                                <div className='form-row'>

                                                    {optionData.options.map(e => <SelectOrInputOption
                                                        option={e}
                                                        type={'options'}
                                                    />)}

                                                    {optionData.otherOptions.map(e => <SelectOrInputOption
                                                        option={e}
                                                        type={'otherOptions'}
                                                    />)}


                                                    {/*<div className='form-group col-md-12'>*/}
                                                    {/*    <label>امکانات دیگر</label>*/}
                                                    {/*    <div className='o-features'>*/}
                                                    {/*        <ul className='no-ul-list third-row'>*/}
                                                    {/*            <li>*/}
                                                    {/*                <input*/}
                                                    {/*                    id='a-1'*/}
                                                    {/*                    className='checkbox-custom'*/}
                                                    {/*                    name='a-1'*/}
                                                    {/*                    type='checkbox'*/}
                                                    {/*                />*/}
                                                    {/*                <label htmlFor='a-1' className='checkbox-custom-label'>*/}
                                                    {/*                    کولر*/}
                                                    {/*                </label>*/}
                                                    {/*            </li>*/}
                                                    {/*        </ul>*/}
                                                    {/*    </div>*/}
                                                    {/*</div>*/}
                                                </div>
                                            </div>
                                            <h5 className='mt-4'>امکانات دیگر</h5>
                                            <div className='frm_submit_wrap mt-3'>
                                                <div className='form-row'>


                                                    {optionData.advancedOptions.map(e => <CheckBox option={e}
                                                                                                   type={'advancedOptions'}
                                                    />)}
                                                    {optionData.welfareOptions.map(e => <CheckBox option={e}
                                                                                                  type={'welfareOptions'}
                                                    />)}


                                                    {/*<div className='form-group col-md-12'>*/}
                                                    {/*    <label>امکانات دیگر</label>*/}
                                                    {/*    <div className='o-features'>*/}
                                                    {/*        <ul className='no-ul-list third-row'>*/}
                                                    {/*            <li>*/}
                                                    {/*                <input*/}
                                                    {/*                    id='a-1'*/}
                                                    {/*                    className='checkbox-custom'*/}
                                                    {/*                    name='a-1'*/}
                                                    {/*                    type='checkbox'*/}
                                                    {/*                />*/}
                                                    {/*                <label htmlFor='a-1' className='checkbox-custom-label'>*/}
                                                    {/*                    کولر*/}
                                                    {/*                </label>*/}
                                                    {/*            </li>*/}
                                                    {/*        </ul>*/}
                                                    {/*    </div>*/}
                                                    {/*</div>*/}
                                                </div>
                                            </div>
                                        </div> : ''}

                                    </div>
                                </div>
                                : ''}
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div className='form-group col-lg-6 col-md-8 col-sm-10'>
                                <label>ودیعه</label>
                                <div className='input-group'>
                                    <input className='form-control' name='ad_trust'/>
                                    <div className='input-group-prepend'>
                                        <span className='input-group-text'>تومان</span>
                                    </div>
                                </div>
                            </div>
                            <div className='form-group col-lg-6 col-md-8 col-sm-10'>
                                <label>نوع و مبلغ اجاره</label>
                                {rentTypes ?
                                    <MySelect name='rentTypeId' options={rentTypes.map(e => {
                                        return {
                                            label: e.name,
                                            value: e.id,
                                        }
                                    })}/> : ''}
                                <div className='input-group mt-3'>
                                    <input className='form-control' name='ad_rent'/>
                                    <div className='input-group-prepend'>
                                        <span className='input-group-text'>تومان</span>
                                    </div>

                                </div>
                            </div>
                            <div className='form-group col-lg-8 col-md-10 col-sm-12 mt-5'>
                                <label>عنوان آگهی</label>
                                <input className='form-control' name='ad_title'/>
                            </div>

                            <div className='form-group col-lg-8 col-md-10 col-sm-12'>
                                <label>توضیحات آگهی</label>
                                <textarea className='form-control' name='ad_details'/>
                            </div>

                            <div className='form-group col-md-2'>
                            </div>
                        </div>
                    </div>
                </form>
                <button onClick={submit} disabled={!optionData || !districts}
                        className='btn book_btn theme-bg w-25 mr-auto ml-auto mt-5'>ثبت آگهی
                </button>

            </section>
        </div>
    )
}
const SelectOrInputOption = ({option, type}) => {
    let newType = `${type}[${option.id}]`;
    return (
        <div className='form-group col-md-4'>
            <label>{option.name}</label>
            {option.values.length > 0 ? <MySelect
                    name={newType}
                    style={{zIndex: '999'}}
                    options={option.values.map(e => {
                        return {
                            label: e.name,
                            value: e.id,
                        }
                    })}
                /> :
                <input name={newType} type='text' className='form-control'/>

            }
        </div>
    );
}
const CheckBox = ({option, type}) => {
    type = `${type}[]`;
    return (
        <div className='form-group col-md-4'>

            <Checkbox value={option.id} name={type} defaultChecked color="success"/>
            <img width='25px' src={option.icon} alt={option.name}/>
            <label className='mr-2'>{option.name}</label>

        </div>
    );
}
export default AddRent
