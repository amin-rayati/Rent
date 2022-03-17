import Select from "react-select";
import React from "react";

export const MySelect = (props) => {
    return (
        <Select

            {...props}
            placeholder={props.placeholder ? props.placeholder : <div/>}
            noOptionsMessage={() => 'نتیجه ای یافت نشد!'}

        />
    );
}