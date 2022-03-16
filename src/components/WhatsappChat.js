import React from "react";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const WhatsappChat = () => {
    return (
        <WhatsAppWidget
            phoneNo="+2348180042708"
            position="right"
            widgetWidth="300px"
            widgetWidthMobile="260px"
            autoOpen={true}
            autoOpenTimer={5000}
            messageBox={true}
            messageBoxTxt=""
            iconSize="40"
            iconColor="white"
            iconBgColor="#160647"
            headerIcon="https://writa.com.ng/Writa2green.png"
            headerIconColor="#160647"
            headerTxtColor="white"
            headerBgColor="#160647"
            headerTitle="Solomon"
            headerCaption="Online"
            bodyBgColor="#bbb"
            chatPersonName="Support"
            chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
            footerBgColor="#160647"
            btnBgColor="#00f5d4"
            btnTxtColor="black"
        />
    );
};

export default WhatsappChat;