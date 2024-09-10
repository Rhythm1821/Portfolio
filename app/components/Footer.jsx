import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <div 
         className="mb-8 mt-20">
            <div className="flex items-center justify-center gap-8">
                <a href="https://x.com/rawattwts" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter fontSize={25} className="opacity-50 hover:opacity-80" />
                </a>
                <a href="https://github.com/Rhythm1821" target="_blank" rel="noopener noreferrer">
                    <FaGithub fontSize={25} className="opacity-50 hover:opacity-80" />
                </a>

                <a href="https://www.linkedin.com/in/rhythm-rawat/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin fontSize={25} className="opacity-50 hover:opacity-80" />
                </a>
            </div>
            <p className="mt-8 text-center text-sm tracking-wide text-slate-700">
                &copy; All Rights Reserved
            </p>
         </div>
    )
}