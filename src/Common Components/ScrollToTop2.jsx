import { ArrowUp, MoveUp } from 'lucide-react'
import React from 'react'

export default function ScrollToTop2() {
     const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // for smooth scrolling
        });
    };
    return (
        <div>
            <div>
                <div
                    className="whatsapp fixed cursor-pointer bg-[var(--smallText-color)] text-white top-[80vh] right-[15px] rounded-full h-14 w-14 flex justify-center items-center shadow-lg transition-all duration-300 hover:scale-110"
                    style={{ zIndex: "100" }}
                    onClick={handleScrollToTop}
                >
                    <MoveUp size={24} />
                </div>
            </div>
        </div>
    )
}
