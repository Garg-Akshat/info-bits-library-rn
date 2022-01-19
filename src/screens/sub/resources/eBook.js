import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
const eBook = props => {


    return <>

        <WebView
            source={{
                uri: 'http://library.bits-pilani.ac.in/services/e-books_home.php',
            }}




        />
    </>
};
export default eBook;