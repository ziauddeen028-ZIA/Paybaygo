import {
    AiOutlineApple,
    AiOutlineFacebook,
    AiOutlineGoogle,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineX,
} from "react-icons/ai";
import logo from "../assets/LOGO.png";

export default function Footer() {
    return (
        <footer className="bg-[#0B1638] text-white">
            <div className="page-container border-b border-white/10 py-16">
                <div className="grid gap-10 xl:grid-cols-5">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-xl font-semibold text-white">
                            <a
                                href="/"
                                className="inline-flex items-center"
                            >
                                <img
                                    src={logo}
                                    alt="PayBayGo"
                                    className="h-10 w-auto object-contain"
                                />
                            </a>
                        </div>
                        <p className="max-w-sm text-sm leading-6 text-slate-300">
                            Smart, seamless and secure parking solutions for modern urban mobility.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Product</h3>
                        <ul className="mt-6 space-y-3 text-sm text-slate-300">
                            <li><a href="#" className="transition hover:text-white">PayBayGo Park</a></li>
                            <li><a href="#" className="transition hover:text-white">PayBayGo Pass</a></li>
                            <li><a href="#" className="transition hover:text-white">PayBayGo Fleet</a></li>
                            <li><a href="#" className="transition hover:text-white">PayBayGo Valet</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Policies</h3>
                        <ul className="mt-6 space-y-3 text-sm text-slate-300">
                            <li><a href="/privacy-policy" className="transition hover:text-white">Privacy Policy</a></li>
                            <li><a href="/terms-and-conditions" className="transition hover:text-white">Terms & Conditions</a></li>
                            <li><a href="/payment-policy" className="transition hover:text-white">Payment Policy</a></li>
                            <li><a href="/parking-space-cancellation-policy" className="transition hover:text-white">Parking Space Cancellation Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Quick Links</h3>
                        <ul className="mt-6 space-y-3 text-sm text-slate-300">
                            <li><a href="/" className="transition hover:text-white">Home</a></li>
                            <li><a href="/about" className="transition hover:text-white">About Us</a></li>
                            <li><a href="#vision" className="transition hover:text-white">Our Vision</a></li>
                            <li><a href="#products" className="transition hover:text-white">Our Product</a></li>
                            <li><a href="#partner" className="transition hover:text-white">Partner With Us</a></li>
                            <li><a href="#contact" className="transition hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Contact</h3>
                        <div className="mt-6 space-y-4 text-sm text-slate-300">
                            <p>support@paybaygo.com</p>
                            <p>Onboarding.partners@paybaygo.com</p>
                            <a
                                href="https://wa.me/919071150404?text=Hi%20PayBayGo%2C%20I%20have%20an%20inquiry."
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#294bb8]"
                            >
                                Chat With Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-container border-t border-white/10 py-8 text-white">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Download the PayBayGo App</p>
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                            <a
                                href="https://play.google.com/store/apps/details?id=com.rimsolutions.paybaygo"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#4169E1] hover:bg-slate-800"
                            >
                                <AiOutlineGoogle className="h-5 w-5 text-[#4169E1]" />
                                Google Play
                            </a>
                            <button
                                type="button"
                                disabled
                                className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm font-semibold text-slate-400"
                            >
                                <AiOutlineApple className="h-5 w-5" />
                                App Store
                            </button>
                        </div>
                    </div>

                    <div className="max-w-xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Follow Us</p>
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                            <a
                                href="https://www.instagram.com/paybaygo/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-[#4169E1] hover:bg-slate-800 hover:text-white"
                            >
                                <AiOutlineInstagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://x.com/paybaygo"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-[#4169E1] hover:bg-slate-800 hover:text-white"
                            >
                                <AiOutlineX className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/paybaygo/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-[#4169E1] hover:bg-slate-800 hover:text-white"
                            >
                                <AiOutlineLinkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.facebook.com/share/19MieWAtZX/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-[#4169E1] hover:bg-slate-800 hover:text-white"
                            >
                                <AiOutlineFacebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-container py-6 text-sm text-slate-500">
                <p>© 2026 PayBayGo – RIM Solutions Private Limited. All rights reserved.</p>
            </div>
        </footer>
    );
}
