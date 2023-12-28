import { setCookie } from "nookies";
import React, { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const LoginModal = ({ setShowModal }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef(null);

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
      const response = await fetch("http://localhost:8080/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
      });
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
      const response = await fetch("http://localhost:8080/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      if (response.ok) {
        const responseData = await response.json();
        setCookie(null, "token", responseData.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        setShowSuccessMessage("Login SuccessFul");
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
      }, 2000);
    }
  };

  const reverseHandler = () => {
    setIsLogin(!isLogin);
  };
  return (
    <Overlay>
      <ModalContent>
        <Wrap ref={modalRef}>
          <DetailsWrap>
            <ReachedText>{isLogin ? "Login" : "Sign Up"}</ReachedText>
            <ReachedDisc>
              {!isLogin && (
                <InputWrap>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    name="name"
                    onChange={HandleChange}
                    value={formData.name}
                    autoComplete="off"
                  />
                </InputWrap>
              )}
              <InputWrap>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={HandleChange}
                  value={formData.email}
                  autoComplete="off"
                />
              </InputWrap>
              <InputWrap>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  onChange={HandleChange}
                  value={formData.password}
                  autoComplete="off"
                />
              </InputWrap>
            </ReachedDisc>
            <ButtonWrap>
              <Button
                onClick={() => {
                  isLogin ? loginHandler() : signUpHandler();
                }}
              >
                {isLogin ? "Login" : "SignUp"}
              </Button>
              <Button onClick={reverseHandler}>
                {isLogin
                  ? "Already Have an account? Login"
                  : "New User? Sign Up First"}
              </Button>
            </ButtonWrap>
            <SuccessMsg>{showSuccessMessage}</SuccessMsg>
            <ErrorMsg>{showErrorMessage}</ErrorMsg>
            {isLoading && <Loading>Loading...</Loading>}
          </DetailsWrap>
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

const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 10px;
  border-radius: 7px;
  font-size: 18px;
  color: white;
  font-family: "Satoshi";
  font-weight: 500;
  background-color: rgb(36, 115, 174);
  &:hover {
    background: rgb(27, 94, 145);
  }
  ${({ light }) =>
    light &&
    css`
      background-color: #8c8c8c;
      color: white;
      &:hover {
        background: #757575;
      }
    `}
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const SuccessMsg = styled.div`
  color: green;
  font-size: 20px;
`;

const ErrorMsg = styled.div`
  color: red;
  font-size: 20px;
`;

const Loading = styled.div`
  font-size: 20px;
  color: blue;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  color: white;
  font-family: "Satoshi";
  font-weight: 500;
`;

const Input = styled.input`
  padding: 4px;
  border-radius: 4px;
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
`;

const ReachedDisc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ReachedText = styled.div`
  font-family: "GilroySemiBold";
  color: rgba(229, 224, 216, 0.85);
  font-size: 28px;
  line-height: 34px;
  text-align: center;
`;

const DetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 700px;
  width: 100%;
  background-color: #323232;
  padding: 10px;
  border-radius: 5px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 900px;
  width: 90%;
  background-color: #323232;
  padding: 30px;
  border-radius: 5px;
  animation: ${slideDown} 0.4s ease-in-out;
`;

const ModalContent = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(36, 37, 37, 0.75);
  z-index: 9999;
`;
