import axios from "axios";

const baseUrl = "https://jajore.com/admin/"
const controllers = {
    Customers: 'Customers',
    Cities: 'Cities',
    Categories: 'Categories',
    States: 'States',
    Districts: 'Districts',
    Ads: 'Ads',
    RentTypes: 'RentTypes',
};
const methods = {
    all: 'all',
    allByState: 'allByState',
    topCities: 'topCities',
    allByCity: 'allByCity',
    options: 'options',
    submit: 'submit',
    single: 'single',
    list: 'list',
    mobile: 'mobile',
};
export const RequestsUtil = {
    topCities: async () => {
        let response = await axios
            .get(`${baseUrl}/${controllers.Cities}/API/_${methods.topCities}`,
                {
                    headers: {
                        token: 'test'
                    }
                }
            );
        return response.data;
    },
    allCities: async () => {
        let response = await axios
            .get(`${baseUrl}/${controllers.Cities}/API/_${methods.all}`,
                {
                    headers: {
                        token: 'test'
                    }
                }
            );
        return response.data;
    },
    getCategories: async () => {
        let response = await axios
            .get(`${baseUrl}/${controllers.Categories}/API/_${methods.all}`,
                {
                    headers: {
                        token: 'test'
                    }
                }
            );
        return response.data;
    },
    getRentTypes: async () => {
        let response = await axios
            .get(`${baseUrl}/${controllers.RentTypes}/API/_${methods.all}`,
                {
                    headers: {
                        token: 'test'
                    }
                }
            );
        return response.data;
    },
    getStates: async () => {
        let response = await axios
            .get(`${baseUrl}/${controllers.States}/API/_${methods.all}`,
                {
                    headers: {
                        token: 'test'
                    }
                }
            );
        return response.data;
    },
    getCities: async stateId => {
        let response = await axios
            .post(`${baseUrl}/${controllers.Cities}/API/_${methods.allByState}`,
                {
                    stateId,
                },
                {
                    headers: {
                        token: 'test'
                    }
                }
            );
        return response.data;
    },
    getDistricts: async cityId => {
        let response = await axios
            .post(`${baseUrl}/${controllers.Districts}/API/_${methods.allByCity}`,
                {
                    cityId,
                },
                {
                    headers: {
                        token: 'test'
                    }
                }
            );
        return response.data;
    },
    getOptionData: async categoryId => {
        let response = await axios
            .post(`${baseUrl}/${controllers.Ads}/API/_${methods.options}`,
                {
                    categoryId,
                },
                {
                    headers: {
                        token: 'test'
                    }
                }
            );
        return response.data;
    },
    uploadAd: async formData => {
        let response = await axios
            .post(`${baseUrl}/${controllers.Ads}/API/_${methods.submit}`,
                formData,
                {
                    headers: {
                        token: 'test'
                    }
                }
            );
        return response.data;
    },
    adList: async formData => {
        let response = await axios
            .post(`${baseUrl}/${controllers.Ads}/API/_${methods.list}`,
                formData,
                {
                    headers: {
                        token: 'test'
                    }
                }
            );
        return response.data;
    },
    getAd: async id => {

        let response = await axios
            .post(`${baseUrl}/${controllers.Ads}/API/_${methods.single}`,
                {id,},
                {
                    headers: {
                        token: 'test'
                    }
                }
            );
        return response.data;
    },
    getMobile: async adId => {

        let response = await axios
            .post(`${baseUrl}/${controllers.Ads}/API/_${methods.mobile}`,
                {adId,},
                {
                    headers: {
                        token: 'test'
                    }
                }
            );
        return response.data;
    }
}

export function number_format(number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    let n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            let k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}
