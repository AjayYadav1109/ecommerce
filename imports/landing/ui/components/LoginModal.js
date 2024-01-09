import {
  handleLoginApi,
  handleRegisterApi,
} from "@/imports/allproducts/apis/api/api";
import Flex from "@/imports/allproducts/atoms/Flex";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const LoginModal = ({ setShowModal }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef(null);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const HandleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const signUpHandler = async () => {
    setIsLoading(true);

    if (!formData.email || !formData.password) {
      setShowErrorMessage("Please fill Email and Password Field");
      setTimeout(() => {
        setShowErrorMessage("");
      }, 2000);
      setIsLoading(false);
      return;
    }

    const signUpData = {
      username: formData.name,
      email: formData.email,
      password: formData.password,
    };
    try {
      const response = await handleRegisterApi(signUpData);
      if (response.ok) {
        const responseData = await response.json();
        setCookie(null, "token", responseData.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        setShowSuccessMessage("Signup Successful");
      } else {
        setShowErrorMessage("Signup Failed");
      }
    } catch (error) {
      setShowErrorMessage("Error while signing up");
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setShowSuccessMessage("");
        setShowErrorMessage("");
        setShowModal(false);
        router.push("/");
      }, 2000);
    }
  };

  const loginHandler = async () => {
    setIsLoading(true);
    if (!formData.email || !formData.password) {
      setShowErrorMessage("Please fill Email and Password Field");
      setTimeout(() => {
        setShowErrorMessage("");
      }, 2000);
      setIsLoading(false);
      return;
    }

    const loginData = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await handleLoginApi(loginData);
      if (response.ok) {
        const responseData = await response.json();
        setCookie(null, "token", responseData.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        setShowSuccessMessage("Login Successful");
      } else {
        setShowErrorMessage("Login Failed");
      }
    } catch (error) {
      setShowErrorMessage("Error while login");
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setShowSuccessMessage("");
        setShowErrorMessage("");
        setShowModal(false);
        router.push("/");
      }, 2000);
    }
  };

  const handleCtaTrigger = () => {
    isLogin ? loginHandler() : signUpHandler();
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const reverseHandler = () => setIsLogin(!isLogin);

  return (
    <Overlay alignItems="center" justifyContent="center">
      <ModalContent alignItems="center" justifyContent="center" fullWidth>
        <Wrap ref={modalRef} direction="column" alignItems="center">
          {isLogin ? <Title>Login</Title> : <Title>Sign Up</Title>}
          <InputGroup direction="column" fullWidth>
            {!isLogin && (
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={HandleChange}
                autoComplete="off"
              />
            )}
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={HandleChange}
              autoComplete="off"
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={HandleChange}
              autoComplete="off"
            />
            <AccountText>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <span onClick={reverseHandler}>
                {isLogin ? "SignUp" : "Login"}
              </span>
            </AccountText>
          </InputGroup>
          {showSuccessMessage && <SuccessMsg>{showSuccessMessage}</SuccessMsg>}
          {showErrorMessage && <ErrorMsg>{showErrorMessage}</ErrorMsg>}
          <BtnField fullWidth>
            <FieldButton
              type="button"
              onClick={handleCtaTrigger}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Submit"}
            </FieldButton>
            <FieldButton type="button" onClick={handleCloseModal}>
              Cancel
            </FieldButton>
          </BtnField>
        </Wrap>
      </ModalContent>
    </Overlay>
  );
};

export default LoginModal;

const slideDown = keyframes`
  from {
    transform: translateY(-50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const SuccessMsg = styled.div`
  color: #f00;
  text-align: center;
  font-size: 20px;
`;

const ErrorMsg = styled.span`
  font-size: 15px;
  color: red;
`;

const FieldButton = styled.button`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: #000;
  color: #fff;
  width: 100%;
  padding: 10px;
  line-height: 22px;
  border-radius: 20px;
  font-size: 18px;
  border: none;

  &:hover {
    background-color: #454545;
  }
`;

const BtnField = styled(Flex)`
  gap: 10px;
`;

const AccountText = styled(Flex)`
  font-size: 15px;

  span {
    color: #000;
    font-weight: 600;
    cursor: pointer;
  }
`;

const Input = styled.input`
  padding: 15px;
  border-radius: 8px;
  background: #eaeaea;
  color: #14141f;
  border: 1px solid #e3e3e4;
  width: 100%;
  font-size: 15px;

  &:focus {
    outline-color: #c9cdff;
  }

  &::placeholder {
    color: #adadad;
  }
`;

const InputGroup = styled(Flex)`
  gap: 10px;
`;

const Title = styled.h3`
  font-size: 30px;
  color: #000;
`;

const Wrap = styled(Flex)`
  gap: 20px;
  width: 90%;
  max-width: 450px;
  background: #fff;
  padding: 40px 50px 60px;
  border-radius: 5px;
  animation: ${slideDown} 0.4s ease-in-out;
`;

const ModalContent = styled(Flex)`
  position: relative;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
`;

const Overlay = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(36, 37, 37, 0.75);
  z-index: 9999;
`;
