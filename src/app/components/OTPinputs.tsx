import React, { useRef } from "react";

type OptInputsProps = {
  values: number[];
  onChange: (values: number[]) => void;
};

const OptInputs: React.FC<OptInputsProps> = ({ values, onChange }) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputValue = event.target.value;
    const newValue = inputValue.slice(0, 1); // limit to a single character
    if (!/^\d+$/.test(newValue)) {
      return; // ignore non-numeric input
    }
    const newValues = [...values];
    newValues[index] = Number(newValue);
    onChange(newValues);
    if (inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4 w-full px-[30px] mt-[24px]">
      {values.map((value, index) => (
        <input
          key={index}
          type="text"
          placeholder="-"
          value={value === 0 ? "" : value}
          onChange={(event) => handleChange(event, index)}
          className="border border-[#D8DBDD] px-8 py-4 text-center rounded-xl text-4xl text-black"
          ref={(el) => (inputRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default OptInputs;
