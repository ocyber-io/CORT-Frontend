import React, {useState} from "react";

const ResetImage = require("../../app/assets/images/resetpassword.png");
const cross = require("../../app/assets/images/cross.png");

type showModalProps = {
    handleModal: () => void;
    modal1: boolean;
};

const ChangePasswordModal = (props: showModalProps) => {
    const [modal3, setModal3] = useState<boolean>(false);

    const handleNextModal = () => {
        setModal3(!modal3);
    };

    return (
        <>
            {!modal3 && (
                <div
                    className="w-full h-screen bg-[#3D4D53]/50 flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-10">
                    <div
                        className={`fixed bg-[#fff] w-[500px] flex items-center flex-col rounded-xl transition-all ease-in duration-1000  ${
                            props.modal1 ? "fixed " : ""
                        }`}
                    >
                        <div className="float-right w-full p-4">
                            <img
                                onClick={handleNextModal}
                                className="float-right w-[20px] h-[20px] cursor-pointer"
                                src={cross}
                                alt=""
                            />
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <img
                                src={ResetImage}
                                alt="reset-password"
                                className="w-[151px] h-[120px] m-auto"
                            />
                            <h1 className="text-[24px] font-semibold color-[#3D4D53] text-center mt-[14px] ">
                                Change Password
                            </h1>
                            <p className="font-normal text-[16px] text-center w-[70%] mt-[14px]">
                                Enter your new password and confirm again
                            </p>
                        </div>
                        <div className="w-full p-[30px]">
                            <label>Current Password</label>
                            <input
                                className="w-full px-[16px] py-[12px] border-2 rounded-xl mt-[4px]  border-[#D8DBDD]"
                                type="password"
                                placeholder="New Password"
                            />
                            <div className="mt-4">
                                <label>New Password</label>
                                <input
                                    className="w-full px-[16px] py-[12px] border-2 rounded-xl mt-[4px]  border-[#D8DBDD]"
                                    type="password"
                                    placeholder="New Password"
                                />
                            </div>
                            <div className="mt-4">
                                <label>Confirm Password</label>
                                <input
                                    className="w-full px-[16px] py-[12px] border-2 rounded-xl mt-[4px]  border-[#D8DBDD]"
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <button
                                onClick={handleNextModal}
                                className="font-medium text-base leading-[150%] mt-[24px] text-[#E7E7E7] bg-Maincolor py-[13px] px-[28px] rounded-lg float-right"
                            >
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChangePasswordModal;
