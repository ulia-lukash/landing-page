import { Benefits } from "./benefits";
import { Connect } from "./connect";
import { FeaturesCarousel } from "./features-carousel";
import { LogoCloud } from "./logoCloud";

export function Main() {
    return (
        <main>
            <LogoCloud/>
            <Benefits/>
            <FeaturesCarousel />
            <Connect />
        </main>
    )
}