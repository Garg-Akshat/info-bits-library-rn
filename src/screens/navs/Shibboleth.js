import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
const Shibboleth = props => {


    return <>

        <WebView
            source={{
                uri: 'https://idpb.bits-pilani.ac.in/',
            }}




        />
    </>
};
export default Shibboleth;