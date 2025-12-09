import React from "react";
import { navLinks } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top",
                onEnter: () => {
                    gsap.to("nav", {
                        backgroundColor: "#00000050",
                        backdropFilter: "blur(10px)",
                        duration: 0.5,
                        ease: "power1.inOut",
                    });
                },
                onLeaveBack: () => {
                    gsap.to("nav", {
                        backgroundColor: "transparent",
                        backdropFilter: "blur(0px)",
                        duration: 0.5,
                        ease: "power1.inOut",
                    });
                },
                // toggleActions: "play reverse play reverse",
            },
        });

        navTween.fromTo(
            "nav",
            { backgroundColor: "transparent", backdropFilter: "blur(0px)" },
            {
                backgroundColor: "#00000050",
                backdropFilter: "blur(10px)",
                duration: 1,
                ease: "power1.inOut",
            }
        );
    });

    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo" />
                    <p>Velvet Pour</p>
                </a>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
