import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import PasswordInput from "../../components/ShowHidePasswordInput";
import ResetPasswordModal from "../../components/ResetPasswordModal";
import {useFormik} from "formik";
import {FormikValidator} from "../../../shared/utility";
import {LoginFormValidator} from "../../../shared/validators/LoginFormValidator";
import {FormikErrorMessage} from "../../components/FormikErrorMessage";
import circleLines from "../../assets/images/circle.png"
import loginImg from "../../assets/images/login.png";
import cortLogo from "../../assets/images/cort.png";

const lock = require("../../../app/assets/images/lock.png");
const sms = require("../../../app/assets/images/sms.png");

const Login = () => {
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [modal1, setModal1] = useState<boolean>(false);

    const handlePasswordChange = (password: string) => {
        setPassword(password);
    };

    const handleToggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //   event.preventDefault();

    // };

    const handleModal = () => {
        setModal1(!modal1);
    };

    const navigate = useNavigate();
    //
    //

    const LoginFormik = useFormik<LoginFormValidator>({
        initialValues: {
            identifier: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log("Submit Values ==>", values);
        },

        validate: FormikValidator.validator(LoginFormValidator),
    });

    return (
        <>
            {/* Modal-1 */}
            {modal1 && (
                <ResetPasswordModal handleModal={handleModal} modal1={modal1}/>
            )}

            {/*  */}
            <div className="flex w-full p-0.5">
                <img className="h-sidebar w-full rounded-l-xl" src={loginImg} alt=""/>
                <div className="w-full h-sidebar bg-white rounded-r-xl">
                    <div className="flex flex-col gap-160px relative px-75px py-60px">
                        <div>
                            <img src={cortLogo} alt=""/>
                        </div>
                        <img className="absolute top-0 right-0" src={circleLines} alt=""/>
                        <div className="flex flex-col gap-9">
                            <div>
                                <h1 className="font-bold text-5xl leading-[150%] font-poppins text-Maincolor">
                                    Welcome Back :)
                                </h1>
                                <p className="font-normal text-base font-poppins leading-[150%] text-Primarycolor">
                                    Please Enter Your Login Details Below
                                </p>
                            </div>
                            <form onSubmit={LoginFormik.handleSubmit}>
                                <div className="flex flex-col gap-4">
                                    <div className="flex  flex-col">
                                        <div className="gap-13px border border-solid border-Stroke rounded-lg p-13px flex">
                                            <img className="w-[24px] h-[24px]" src={sms} alt=""/>
                                            <input
                                                className="border-none outline-none w-full bg-transparent"
                                                type="email"
                                                name="identifier"
                                                placeholder="Enter your email here"
                                                onChange={LoginFormik.handleChange}
                                                onBlur={LoginFormik.handleBlur}
                                            />
                                        </div>
                                        <FormikErrorMessage
                                            formik={LoginFormik}
                                            name="identifier"
                                            render={(error) => (
                                                <span className="error mt-1 text-rose-500">
                          {error}
                        </span>
                                            )}
                                        />
                                    </div>
                                    <div className="flex justify-between border border-solid border-Stroke rounded-lg p-13px">
                                        <div className="flex w-full gap-13px">
                                            <img className="w-[24px] h-[24px]" src={lock} alt=""/>
                                            <PasswordInput
                                                label="Password"
                                                value={password}
                                                onPasswordChange={handlePasswordChange}
                                                showPassword={showPassword}
                                                onToggleShowPassword={handleToggleShowPassword}
                                            />
                                        </div>
                                    </div>
                                    <p className="font-normal text-base font-poppins leading-[150%] text-Primarycolor">
                                        Have you forgotten your password?
                                        <span
                                            onClick={handleModal}
                                            className="cursor-pointer font-normal text-base font-poppins leading-[150%] text-[#E22828] underline"
                                        >
                      {""} Reset Password
                    </span>
                                    </p>
                                    <button
                                        type="submit"
                                        onClick={() => {
                                            navigate("/dashboard");
                                        }}
                                        className="font-bold text-base font-poppins leading-[150%] text-[#E7E7E7] bg-Maincolor py-4 rounded-lg"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
