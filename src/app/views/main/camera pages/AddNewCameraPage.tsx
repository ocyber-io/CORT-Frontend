import React, { useState } from "react";
import { AddNewCameraValidator } from "../../../../shared/validators/AddNewCameraValidator";
import { useFormik } from "formik";
import { FormikValidator } from "../../../../shared/utility";
import { FormikErrorMessage } from "../../../components/FormikErrorMessage";

const AddNewCameraPage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDivClick = (value) => {
    setSelectedOption(value);
  };

  const NewCameraFormik = useFormik<AddNewCameraValidator>({
    initialValues: {
      name: "",
      password: "",
      address: "",
      model: "",
      port: "",
      make: "",
      username: "",
      path: "",
      protocol: "",
      stream: "",
    },
    onSubmit: (values) => {
      console.log("Add New Camera Values ==>", values);
    },

    validate: FormikValidator.validator(AddNewCameraValidator),
  });

  const CustomRadio = ({ name, id, value, label }) => (
    <label
      htmlFor={id}
      className={`border cursor-pointer rounded-[10px]  font-medium text-[14px] mt-[9px] flex py-[18px] px-[16px] items-center justify-between ${
        selectedOption === name
          ? "border-2 border-[#7D3519] "
          : "border border-[#D8DBDD] "
      }
      }`}
    >
      <p
        className={`text-[14px] leading-[140%] font-normal ${
          selectedOption === name
            ? "text-[#7D3519] font-medium"
            : "text-[#9EA6A9] "
        }`}
      >
        {label}
      </p>

      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={selectedOption === value}
        onChange={NewCameraFormik.handleChange}
        onBlur={NewCameraFormik.handleBlur}
        className="hidden"
      />

      <span
        className={`w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center  ${
          selectedOption === value ? "bg-[#7D3519]" : "bg-white"
        }`}
      >
        {selectedOption === value && (
          <div className="w-4 h-4 border-2 border-white bg-[#7D3519] rounded-full m-auto">
            <span className="bg-[#7D3519] w-2 h-2"></span>
          </div>
        )}
      </span>
    </label>
  );

  return (
    <div className="w-full h-[100%] bg-white rounded-10px p-[20px]">
      <div className="flex gap-1">
        <p className="text-[#0163E0] underline leading-[150%] font-medium text-[16px]">
          Cameras
        </p>
        <span className="textb">/</span>
        <p className="text-[#0163E0] underline leading-[150%] font-medium text-[16px]">
          Add New Camera
        </p>
      </div>

      <h1 className="mt-[24px] text-[24px] font-semibold leading-[150%] textb">
        Add New Camera
      </h1>
      <h1 className="mt-[24px] text-[16px] font-semibold leading-[150%] textb">
        Transport Protocol
      </h1>

      <div className=" w-full overflow-auto">
        <form action="" onSubmit={NewCameraFormik.handleSubmit}>
          <div>
            <div className="grid grid-cols-2 gap-[10px] ">
              <div onClick={() => handleDivClick("udp")}>
                <CustomRadio name="udp" id="udp" value="udp" label="UDP" />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="protocol"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
              <div onClick={() => handleDivClick("tcp")} className=" ">
                {/* <input
                  id="tcp"
                  type="radio"
                  name="protocol"
                  checked={selectedOption === "tcp"}
                  onChange={NewCameraFormik.handleChange}
                  onBlur={NewCameraFormik.handleBlur}
                /> */}
                <CustomRadio name="tcp" id="tcp" value="tcp" label="TCP" />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="protocol"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
            </div>
            <h1 className="mt-[24px] text-[16px] font-semibold leading-[150%] textb">
              Application Protocol
            </h1>
            <div className="grid grid-cols-3 gap-[10px] ">
              <div onClick={() => handleDivClick("rtsp")}>
                <CustomRadio name="rtsp" id="rtsp" value="rtsp" label="RTSP" />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="protocol2"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
              <div onClick={() => handleDivClick("rtmp")}>
                <CustomRadio name="rtmp" id="rtmp" value="rtmp" label="RTMP" />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="protocol2"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
              <div onClick={() => handleDivClick("file")}>
                <CustomRadio name="file" id="file" value="file" label="FILE" />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="protocol2"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
            </div>
            <hr className="my-[24px]" />
            <div className="grid grid-cols-2 gap-5">
              <div>
                <input
                  className="border rounded-md py-5 px-4 w-full"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={NewCameraFormik.handleChange}
                  onBlur={NewCameraFormik.handleBlur}
                />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="name"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>

              <div>
                <input
                  className="border rounded-md py-5 px-4 w-full"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={NewCameraFormik.handleChange}
                  onBlur={NewCameraFormik.handleBlur}
                />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="password"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
              <div>
                <input
                  className="border rounded-md py-5 px-4 w-full"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                  onChange={NewCameraFormik.handleChange}
                  onBlur={NewCameraFormik.handleBlur}
                />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="address"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
              <div>
                <input
                  className="border rounded-md py-5 px-4 w-full"
                  type="text"
                  name="model"
                  id="model"
                  placeholder="Model"
                  onChange={NewCameraFormik.handleChange}
                  onBlur={NewCameraFormik.handleBlur}
                />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="model"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
              <div>
                <input
                  className="border rounded-md py-5 px-4 w-full"
                  type="text"
                  name="port"
                  id="port"
                  placeholder="Port"
                  onChange={NewCameraFormik.handleChange}
                  onBlur={NewCameraFormik.handleBlur}
                />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="port"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
              <div>
                <input
                  className="border rounded-md py-5 px-4 w-full"
                  type="text"
                  name="make"
                  id="make"
                  placeholder="Make"
                  onChange={NewCameraFormik.handleChange}
                  onBlur={NewCameraFormik.handleBlur}
                />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="make"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
              <div>
                <input
                  className="border rounded-md py-5 px-4 w-full"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="User Name"
                  onChange={NewCameraFormik.handleChange}
                  onBlur={NewCameraFormik.handleBlur}
                />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="username"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
              <div>
                <input
                  className="border rounded-md py-5 px-4 w-full"
                  type="text"
                  name="path"
                  id="path"
                  placeholder="Path"
                  onChange={NewCameraFormik.handleChange}
                  onBlur={NewCameraFormik.handleBlur}
                />
                <FormikErrorMessage
                  formik={NewCameraFormik}
                  name="path"
                  render={(error) => (
                    <span className="error mt-1 text-rose-500">{error}</span>
                  )}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="float-right px-[26px] py-[13px] text-white font-medium bg-[#7D3519] rounded-[10px] mt-[24px] "
          >
            Add Camera
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewCameraPage;
