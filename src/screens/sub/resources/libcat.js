import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
const LibCat = props => {


    return <>

        <WebView
            source={{
                uri: 'http://libcatalog.bits-pilani.ac.in/',
            }}




        />
    </>
};
export default LibCat;