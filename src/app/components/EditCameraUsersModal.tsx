import React, { useState } from "react";
import EditUserProfileModal from "./EditUserProfileModal";
import EditPassword from "./EditPassword";
import ConfirmDelete from "./ConfirmDelete";
const cross = require("../assets/images/close.png");
const profile = require("../assets/images/editprofilepic.png");
const arrowdown = require("../assets/images/arrow-down.png");
const menu = require("../assets/images/options.png");

type Props = {
  handleModal: () => void;
};

const EditCameraUsersModal = (props: Props): JSX.Element => {
  const [editUserModal, setEditUserModal] = useState<boolean>(false);
  const [editPasswordModal, setEditPasswordModal] = useState<boolean>(true);

  const handleEditUserModal = () => {
    setEditUserModal(!editUserModal);
  };

  const [confirmDeleteModal, setConfirmDeleteModal] = useState<boolean>(false);
  function handleNotConfirmDelete() {
    setConfirmDeleteModal(!confirmDeleteModal);
    setEditUserModal(!editUserModal);
    setEditPasswordModal(!editPasswordModal);
  }
  function handleConfirmDelete() {
    setConfirmDeleteModal(!confirmDeleteModal);
  }

  const [isChecked, setIsChecked] = useState(false);

  const handlesCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    console.log("Checkbox checked:", event.target.checked);
  };

  //
  //
  const [checkboxStates, setCheckboxStates] = useState({
    camera1: false,
    camera2: false,
    camera3: false,
    camera4: false,
  });

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setCheckboxStates({ ...checkboxStates, [name]: checked });
  };

  const renderCheckbox = (name: string, label: string) => (
    <div
      className={`border rounded-[10px]  font-medium text-[14px] mt-[9px] flex py-[13px] px-[16px] items-center justify-between  ${
        checkboxStates[name] ? "border-[#7D3519] " : "border-[#D8DBDD]"
      }`}
      onClick={() => handleCheckboxChange(name, !checkboxStates[name])}
    >
      <div className="flex gap-1.5 font-medium text-base">
        <p
          className={`text-[14px] font-medium text-${
            checkboxStates[name] ? "[#7D3519]" : "[#3D4D53]"
          }`}
        >
          {label}
        </p>
      </div>
      {checkboxStates[name] && (
        <>
          <input
            id="custom-checkbox"
            type="checkbox"
            checked={!isChecked}
            onChange={handlesCheckboxChange}
            className="hidden"
          />
          <span
            className={`flex items-center justify-center w-5 h-5 border border-gray-400 rounded-md ${
              !isChecked ? "bg-[#7D3519]" : "bg-white"
            }`}
          >
            {!isChecked && (
              <svg
                className="w-3 h-3 mx-auto my-auto text-white fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            )}
          </span>
        </>
      )}
    </div>
  );

  return (
    <>
      {confirmDeleteModal && (
        <ConfirmDelete
          handleConfirmDelete={handleConfirmDelete}
          handleNotConfirmDelete={handleNotConfirmDelete}
        />
      )}
      {editPasswordModal ? (
        <>
          {!editUserModal ? (
            <div className="w-full h-[100%] overflow-hidden  bg-[#3D4D53]/50 flex  justify-center items-center absolute top-0 left-0 right-0 bottom-0 z-10">
              <div className="relative h-[98%] bg-white w-[570px] rounded-xl  ">
                <div className=" modal-inner-section-header">
                  <div className=" event-modal-background-image bg-cover bg-center bg-no-repeat h-[120px] rounded-tl-xl rounded-tr-xl p-[10px]">
                    <div
                      onClick={props.handleModal}
                      className="flex items-center justify-end p-[10px] cursor-pointer group"
                    >
                      <img
                        className="w-[20px] h-[20px] group-hover:scale-110 group-hover:brightness-200"
                        src={cross}
                        alt="cross"
                      />
                    </div>
                  </div>
                  <div>
                    <img
                      className="absolute bg-[#E8EAEA] top-[07%] left-[30px] h-[94px] w-[94px] border-[4px] border-white rounded-[16px]  text-white"
                      src={profile}
                      alt="edit profile"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer absolute text-[#0163E0] left-[130px] top-[128px] leading-[150%] text-[14px] font-normal"
                    >
                      Upload image
                    </label>
                    <input
                      className="hidden"
                      type="file"
                      name="file"
                      id="file-upload"
                    />
                  </div>
                </div>
                <div className="z-20 p-2 w-full">
                  <img
                    onClick={handleNotConfirmDelete}
                    src={menu}
                    alt="menu"
                    className="z-20 p-4  cursor-pointer  float-right"
                  />
                </div>
                <div className="z-[1] absolute w-full h-full top-[146px] px-[32px] overflow-auto">
                  <form action="">
                    <div className="grid grid-cols-2 gap-[10px] mt-[30px]">
                      <div>
                        <label
                          className="text-[#3D4D53] font-medium text-[14px]"
                          htmlFor=""
                        >
                          First Name
                        </label>
                        <input
                          className="w-full border rounded-[10px] border-[#D8DBDD] text-[#3D4D53] font-normal text-sm py-[13px] px-[16px] mt-[9px]"
                          type="text"
                          name="name"
                          id="name"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label
                          className="text-[#3D4D53] font-medium text-[14px]"
                          htmlFor=""
                        >
                          Last Name
                        </label>
                        <input
                          className="w-full border rounded-[10px] border-[#D8DBDD] text-[#3D4D53] font-normal text-sm py-[13px] px-[16px] mt-[9px]"
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Jane"
                        />
                      </div>
                    </div>
                    <div className="mt-[16px]">
                      <label
                        className="text-[#3D4D53] font-medium text-[14px]"
                        htmlFor=""
                      >
                        Email
                      </label>
                      <input
                        className="w-full border mt-[9px] rounded-[10px] border-[#D8DBDD] py-[13px] px-[16px] text-[#3D4D53] font-normal text-sm "
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@example.com"
                      />
                    </div>
                    <div className="mt-[16px]">
                      <label
                        className="text-[#3D4D53] font-medium text-[14px]"
                        htmlFor=""
                      >
                        Phone Number
                      </label>

                      <input
                        className="w-full border mt-[9px] rounded-[10px] border-[#D8DBDD] py-[13px] px-[16px] text-[#3D4D53] font-normal text-sm "
                        type="text"
                        name="number"
                        id="number"
                        placeholder="+665 545 454"
                      />
                    </div>

                    <div className="mt-[16px]">
                      <label
                        className="text-[#3D4D53] font-medium text-[14px]"
                        htmlFor=""
                      >
                        Password
                      </label>

                      <div className="border rounded-[10px] border-[#D8DBDD] mt-[9px] flex py-[13px] px-[16px] items-center justify-between">
                        <input
                          className="w-full  text-[#3D4D53] font-normal text-sm outline-none border-none "
                          type="text"
                          name="number"
                          id="number"
                          placeholder="********"
                        />
                        <p className="cursor-pointer">show</p>
                      </div>
                    </div>
                    <hr className="my-[20px]" />
                    <label
                      className="text-[#3D4D53] font-medium text-[14px]"
                      htmlFor=""
                    >
                      Role
                    </label>
                    <div className="border rounded-[10px] border-[#D8DBDD] mt-[9px] flex py-[13px] px-[16px] items-center justify-between">
                      <input
                        className="w-full  text-[#3D4D53] font-normal text-sm outline-none border-none "
                        type="text"
                        name="number"
                        id="number"
                        placeholder="Admin"
                      />
                      <img className="cursor-pointer" src={arrowdown} alt="" />
                    </div>
                    <hr className="my-[20px]" />

                    <label className="text-[#3D4D53] " htmlFor="">
                      Cameras
                    </label>
                    <div className="grid grid-cols-2 gap-[10px]">
                      {renderCheckbox("camera1", "Camera 1")}
                      {renderCheckbox("camera2", "Camera 2")}
                      {renderCheckbox("camera3", "Camera 3")}
                      {renderCheckbox("camera4", "Camera 4")}
                    </div>
                    <button className=" ml-[16px] float-right px-[26px] py-[13px] text-white font-medium bg-[#7D3519] rounded-[10px] mt-[16px] ">
                      Save Changes
                    </button>
                    <button className="float-right px-[26px] py-[13px] textb font-medium bg-[#E8EAEA] rounded-[10px] mt-[16px] ">
                      Discard
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <EditUserProfileModal editUserModal={handleEditUserModal} />
          )}
        </>
      ) : null}
    </>
  );
};

export default EditCameraUsersModal;
