import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {RequestsUtil} from "../../Utils/RequestsUtil";

const CategoryItem = ({category}) => {
    return (
        <Link to='/search' class='col-lg-3 col-md-4 col-sm-6'>
            <div>
                <div className='_category_box'>
                    <a>
                        <div className='_category_elio'>
                            <div className='_category_thumb'>
                                <img src={category.icon} className='img-fluid hover' alt=''/>
                                <img src={category.icon} style={{transform: 'scale(1.2)',transition: 'scale 250mx'}} className='img-fluid simple' alt=''/>
                            </div>
                            <div className='_category_caption' style={{marginTop: '0.5em'}}>
                                <h5 className='text-dark' style={{textDecoration: 'none'}}>{category.name}</h5>
                                <span className='d-flex text-center justify-content-center mt-1' style={{direction: 'rtl',fontSize: '12px'}}>
                                    <span>{category.count} </span>
                                    <span className='mr-1'>مورد</span>
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </Link>
    );
}
export const MainCategories = () => {
    const [categories, setCategories] = useState(null);
    const getCategories = async () => {
        const res = await RequestsUtil.getCategories();
        if (res.isDone) {
            setCategories(res.data);
        }
    }
    useEffect(() => {
        getCategories();
    }, [])
    return (
        <section className='min'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-7 col-md-8'>
                        <div className='sec-heading center'>
                            <h2>دسته بندی ها</h2>
                            <p>دسته بندی خونه های اجاره ای را در شهر خود انتخاب کنید</p>
                        </div>
                    </div>
                </div>

                <div className='row justify-content-center mt-4'>
                    {categories ? categories.map(e => <CategoryItem category={e}/>) : ''}
                </div>
            </div>
        </section>
    );
}