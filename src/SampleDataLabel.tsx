import * as React from "react";
import './SampleDataLabel.scss'
export interface ISampleDataLabelProps {
    show?: boolean;
    info?:()=>React.ReactElement;
}
export const SampleDataLabel : React.FunctionComponent<ISampleDataLabelProps> = (props) => {
    if (props.show != undefined && props.show != null && !props.show) {
        return null;
    }
    return <div className='sample-data-label'>
        Sample Data
    </div>;
}