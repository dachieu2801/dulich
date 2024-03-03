import React, { useState } from 'react';

import { formatToVND } from '@/utils/funtions';

const TwoPointRangeSlider = ({ value }) => {
  const [values, setValues] = useState([0, value]);

  const handleChange = (newValues) => {
    setValues(newValues);
  };

  return (
    <div className='unselectable'>
      <div>
        <span>{formatToVND(values[0])} - </span>
        <span>{formatToVND(values[1])}</span>
      </div>
      {/* <Slider
        value={values}
        onChange={handleChange}
        min={0}
        max={value}
      /> */}
    </div>
  );
};

export default TwoPointRangeSlider;