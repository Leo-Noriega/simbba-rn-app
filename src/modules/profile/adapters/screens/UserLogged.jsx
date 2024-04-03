//rnf
import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
//importacion que saque de la documentacion de firebase
//import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loading from '../../../../kernel/components/Loading';
import Profile from './Profile';
import Login from '../../../auth/login/adapters/screens/Login';
import { isLoggedIn } from '../../../auth/login/adapters/screens/Login';
//import UserGuest from '../../../login/adapters/screens/UserGuest'

export default function UserLogged(props) {
    const {navigation} = props;
    const [session, setSession] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Aquí puedes realizar cualquier lógica adicional basada en el estado de la sesión
        setSession(isLoggedIn);
      }, [isLoggedIn]);

    if(session === null ){
        return (<Loading isShow={true} tittle="Cargando" />)
    }else {
        return (session ? <Profile  navigation={navigator}/>: <Login navigation={Login}/>)
    }
}