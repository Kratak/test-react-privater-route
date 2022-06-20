import {useNavigate} from "react-router";
import React, {ChangeEvent, useCallback, useState} from "react";
import {Button, TextField} from "@mui/material";

interface AuthDataProps {
    login: {
        value: string;
        valid: boolean;
        errorMessage: string;
    }
    password: {
        value: string;
        valid: boolean;
        errorMessage: string;
    }
}

const initialFormData: AuthDataProps = {
    login: {
        value: '',
        valid: false,
        errorMessage: ''
    },
    password: {
        value: '',
        valid: false,
        errorMessage: ''
    }
}

interface FormComponentProps {
    isRegister: boolean
}

export const FormComponent = (props: FormComponentProps) => {
    const navigate = useNavigate();
    const [authData, setAuthData] = useState<AuthDataProps>(initialFormData);


    const handleLoginChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let errorMessage = authData.login.errorMessage
        let valid = authData.login.valid
        if (e.target.value.length < 3) {
            errorMessage = "To short";
            valid = false;
        }
        if (e.target.value.length > 3) {
            errorMessage = '';
            valid = true;
        }
        if (e.target.value.length > 20) {
            errorMessage = "To long";
            valid = false;
        }

        setAuthData({
            ...authData, login: {
                ...authData.login,
                value: e.target.value,
                valid,
                errorMessage
            }
        })
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let errorMessage = authData.password.errorMessage
        let valid = authData.password.valid
        if (e.target.value.length < 3) {
            errorMessage = "To short";
            valid = false;
        }
        if (e.target.value.length > 3) {
            errorMessage = '';
            valid = true;
        }
        if (e.target.value.length > 20) {
            errorMessage = "To long";
            valid = false;
        }

        setAuthData({
            ...authData, password: {
                ...authData.password,
                value: e.target.value,
                valid,
                errorMessage
            }
        })
    }

    const handleSubmit = useCallback(() => {
        localStorage.setItem('auth', JSON.stringify(authData))
        navigate('/Dashboard')
    }, [authData])

    return <div className="Login">
        <div>{props.isRegister ? 'Register' : 'Login'}</div>
        <TextField
            id="input-login"
            label="Login"
            variant="outlined"
            value={authData.login.value}
            onChange={handleLoginChange}
            error={!authData.login.valid && !!authData.login.errorMessage}
            helperText={authData.login.errorMessage}
        />
        <TextField
            id="input-password"
            label="Password" variant="outlined"
            value={authData.password.value}
            onChange={handlePasswordChange}
            error={!authData.password.valid && !!authData.password.errorMessage}
            helperText={authData.password.errorMessage}
        />
        <Button
            disabled={!authData.login.valid || !authData.password.valid}
            variant="outlined"
            onClick={handleSubmit}
        >Submit</Button>
    </div>
}
