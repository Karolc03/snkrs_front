import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ForgotPassword.module.css';
import { Link } from "react-router-dom";
import Logo from '../../Icons/Logo'
import { ICONS, SESSION_NOT_COOKIE } from '../../../const'
import { MdEmail } from 'react-icons/md';
import { resetPassword } from '../../../services/firebase';
import { ResetPassword, NotRegister } from '../../Alerts';
import axiosInstance from '../../../utils/axiosInstance';
import Shoe from '../../Icons/Shoe';
import Footprint from '../../Icons/Footprint';

const ForgotPassword = ({ initEmail = '', viewForgot, onViewForgot }) => {
  console.log("🚀 ~ file: ForgotPassword.jsx:14 ~ ForgotPassword ~ initEmail:", initEmail)
  const [email, setEmail] = useState(initEmail)
  const [error, setError] = useState('')

  useEffect(() => {
    setEmail(initEmail)
    setError(initEmail)
  }, [initEmail])
  const handlerResetPassword = async () => {
    try {
      if (email) {
        const data = await axiosInstance.post(`/auth/verify-email/${email}`)
        if (data) {
          if (data.status == 'inactive') {
            return NotRegister()
          }
          if (data.status == 'active') {
            return ResetPassword({ email })
          }
        }
      }
    } catch (error) {
      return NotRegister()
    }
  }

  const handlerCloseBox = () => { onViewForgot(false); };
  // Check if the click was outside the load dialog
  const handlerExternalClick = (event) => {
    if (event.target.classList.contains(styles.ForgotContainer)) handlerCloseBox();
  };

  const handlerInputChange = (event) => {
    setEmail(event.target.value)
    setError(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {viewForgot && (
        <div className={styles.ForgotPasswordContainer} onClick={handlerExternalClick}>
          <Footprint width={'100vw'} height={'100vh'} fill={'#FFFFFF'}></Footprint>
          <div className={styles.ForgotContainer}>
            <div className={styles.ForgotPassword} >
              <div className={styles.Header}>
                <div>
                  <Shoe width={'50px'} height={'50px'} fill={'#000000'} />
                  <Logo width={'180px'} height={'60px'} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div className={styles.Close} onClick={() => handlerCloseBox()}>x</div>
                </div>
              </div>
              <span className={styles.ForgotFormInfo} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <div className={styles.ForgotForm}>
                    <span className={styles.InputForgot}>
                      <h1>Continue with us...</h1>
                      <h4>Reset your password</h4>
                      <input
                        type={'text'}
                        placeholder='Enter your email'
                        name={email}
                        value={email}
                        onChange={(event) => { handlerInputChange(event) }}
                        className={styles.inputField}
                      />
                      {error && <p className={styles.errorText}>{error}</p>}
                    </span>
                  </div>
                </div>
                <div className={styles.BtnPass}>
                  <button type="submit" className={styles.submitButton} onClick={handlerResetPassword}>
                    Send
                  </button>
                </div>
              </span>
            </div>
          </div>
        </div>)}
    </>

  );
};

ForgotPassword.propTypes = {
  initEmail: PropTypes.string,
  viewForgot: PropTypes.boolean,
  onViewForgot: PropTypes.func

};
ForgotPassword.propTypes = {};

export default ForgotPassword;
