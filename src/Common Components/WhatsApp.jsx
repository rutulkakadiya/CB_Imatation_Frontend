import React from "react";

export default function Whatsapp() {
    
    const handleButton = () => {
    const phoneNumber = "919724076944";
    const message = "Hello, I would like to know more about your products!";
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappURL = isMobile
        ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    window.open(whatsappURL, "_blank");
};

    return (
        <div>
            <div
                onClick={handleButton}
                className="whatsapp fixed cursor-pointer bg-[#36c14a] text-white top-[90vh] right-[15px] rounded-full h-14 w-14 flex justify-center items-center shadow-lg transition-all duration-300 hover:scale-110 animate-bounce"
                style={{ zIndex: "100" }}
            >
                <img src="/whatsapp.png" className="h-11 w-11" alt="WhatsApp" />
            </div>
        </div>
    );
}
