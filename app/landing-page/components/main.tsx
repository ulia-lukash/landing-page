import { Benefits } from "./benefits";
import { Connect } from "./connect";
import { FeaturesCarousel } from "./features-carousel";
import { LogoCloud } from "./logoCloud";
import { Specifications } from "./specifications";
import { Testimonial } from "./testimonial";

export function Main() {
    return (
        <main>
            <LogoCloud/>
            <Benefits/>
            <FeaturesCarousel />
            <Specifications />
            <Testimonial />
            <Connect />
        </main>
    )
}