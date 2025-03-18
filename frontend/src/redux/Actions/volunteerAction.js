import axios from "axios";
import { BACKEND_URL } from "../../constants/url";


axios.defaults.withCredentials=true;

const URL=BACKEND_URL+"api/v1/volunteer"


export const registerVolunteer=(details)=>async(dispatch)=>{
    try {
		dispatch({
			type: "VOLUNTEER_REGISTER_REQUEST",
		});

		const { data } = await axios.post(`${URL}/register`, details, {
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		});

		dispatch({
			type: "VOLUNTEER_REGISTER_SUCCESS",
			payload: {
				message: data.message,
				id: data.newVolunteer._id,
			},
		});
	} catch (error) {
		dispatch({
			type: "VOLUNTEER_REGISTER_FAILURE",
			payload: error?.response?.data?.message,
		});
	}
}


export const verifyVolunteerRegister=(id,otp)=>async(dispatch)=>{
    try {
		dispatch({
			type: "VOLUNTEER_REGISTER_OTP_REQUEST",
		});
		const { data } = await axios.post(
			`${URL}/verify/${id}`,
			{ otp },
			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}
		);
		dispatch({
			type: "VOLUNTEER_REGISTER_OTP_SUCCESS",
			payload: data.message,
		});
	} catch (error) {
		dispatch({
			type: "VOLUNTEER_REGISTER_OTP_FAILURE",
			payload: error?.response?.data?.message,
		});
	}
}


export const resendVerifyVolunteerRegister=(id)=>async(dispatch)=>{
    try {
		dispatch({
			type: "RESEND_VOLUNTEER_OTP_REQUEST",
		});
		const { data } = await axios.get(`${URL}/resend/${id}`);
		dispatch({
			type: "RESEND_VOLUNTEER_OTP_SUCCESS",
			payload: data.message,
		});
	} catch (error) {
		dispatch({
			type: "RESEND_VOLUNTEER_OTP_FAILURE",
			payload: error?.response?.data?.message,
		});
	}
}


export const VolunteerLogin=(email,password)=>async(dispatch)=>{
    try {
		dispatch({
			type: "VOLUNTEER_LOGIN_REQUEST",
		});
		const { data } = await axios.post(
			`${URL}/login`,
			{ email, password },
			{
				headers: {
					"content-Type": "application/json",
				},
				withCredentials: true,
			}
		);

		dispatch({
			type: "VOLUNTEER_LOGIN_SUCCESS",
			payload: {
				message: data.message,
				id: data.data,
			},
		});
	} catch (error) {
		dispatch({
			type: "VOLUNTEER_LOGIN_FAILURE",
			payload: error.response?.data?.message,
		});
	}
}


export const volunteerLoginVerify=(id,otp)=>async(dispatch)=>{
    try {
		dispatch({
			type: "VOLUNTEER_LOGIN_OTP_REQUEST",
		});
		const { data } = await axios.post(
			`${URL}/login/verify/${id}`,
			{ otp },
			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}
		);
		dispatch({
			type: "VOLUNTEER_LOGIN_OTP_SUCCESS",
			payload: {
				message: data.message,
				id: data.data,
			}
		});
	} catch (error) {
		dispatch({
			type: "VOLUNTEER_LOGIN_OTP_FAILURE",
			payload: error?.response?.data?.message,
		});
	}
}

export const volunteerLoginVerifyResend=(id)=>async(dispatch)=>{
    try {
		dispatch({
			type: "RESEND_LOGIN_OTP_REQUEST",
		});
		const { data } = await axios.get(`${URL}/login/resend/${id}`);
		dispatch({
			type: "RESEND_LOGIN_OTP_SUCCESS",
			payload: data.message,
		});
	} catch (error) {
		dispatch({
			type: "RESEND_LOGIN_OTP_FAILURE",
			payload: error?.response?.data?.message,
		});
	}
}

export const volunteerForgotPassword=(email)=>async(dispatch)=>{
    try {
		dispatch({
			type: "FORGOT_VOLUNTEER_PASSWORD_REQUEST",
		});
		const { data } = await axios.post(
			`${URL}/forgotPassword`,
			{ email },
			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}
		);
		dispatch({
			type: "FORGOT_VOLUNTEER_PASSWORD_SUCCESS",
			payload: {
				message: data.message,
				id: data.data,
			},
		});
	} catch (error) {
		dispatch({
			type: "FORGOT_VOLUNTEER_PASSWORD_FAILURE",
			payload: error?.response?.data?.message,
		});
	}
}

export const volunteerResetPassword=(id,otp)=>async(dispatch)=>{
    try {
		dispatch({
			type: "RESET_VOLUNTEER_PASSWORD_REQUEST",
		});
		const { data } = await axios.post(
			`${URL}/resetPassword/${id}`,
			{ otp },
			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}
		);
		dispatch({
			type: "RESET_VOLUNTEER_PASSWORD_SUCCESS",
			payload: data.message,
		});
	} catch (error) {
		dispatch({
			type: "RESET_VOLUNTEER_PASSWORD_FAILURE",
			payload: error?.response?.data?.message,
		});
	}
}


export const volunteerChangePassword=(id,password)=>async(dispatch)=>{
    try {
		dispatch({
			type: "CHANGE_VOLUNTEER_PASSWORD_REQUEST",
		});
		const { data } = await axios.put(
			`${URL}/changePassword/${id}`,
			{ password },
			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}
		);
		dispatch({
			type: "CHANGE_VOLUNTEER_PASSWORD_SUCCESS",
			payload: data.message,
		});
	} catch (error) {
		dispatch({
			type: "CHANGE_VOLUNTEER_PASSWORD_FAILURE",
			payload: error?.response?.data?.message,
		});
	}
}

export const volunteerLogout = () => async (dispatch) => {
	try {
		dispatch({
			type: "LOGOUT_VOLUNTEER_REQUEST",
		});
		const { data } = await axios.post(`${URL}/logout`, {
			withCredentials: true,
		});
		dispatch({
			type: "LOGOUT_VOLUNTEER_SUCCESS",
			payload: data.message,
		});
	} catch (error) {
		dispatch({
			type: "LOGOUT_VOLUNTEER_FAILURE",
			payload: error?.response?.data?.message,
		});
	}
}