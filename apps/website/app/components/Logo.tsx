import Image from "next/image"
import hermesLogo from "../asset/hermes_logo_1.1.jpg"

interface LogoProps {
    className? : String
};


export const Logo = ({className}: LogoProps) => {
    return(
        <Image
        src={hermesLogo}
        alt="hermes_logo"
        className={`default-logo-styles ${ className || ""}.trim()`}
        style= {{height: '30px', width: "auto" }}
        >

        </Image>
    )
}