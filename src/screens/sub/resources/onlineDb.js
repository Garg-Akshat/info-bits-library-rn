import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
const onlineDB = props => {


    return <>

        <WebView
            source={{
                uri: 'http://library.bits-pilani.ac.in/services/databases.php',
            }}




        />
    </>
};
export default onlineDB;