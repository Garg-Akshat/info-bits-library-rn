import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
const Ques = props => {


    return <>

        <WebView
            source={{
                uri: 'http://library.bits-pilani.ac.in/Question_Papers/question_paper.php',
            }}




        />
    </>
};
export default Ques;