import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from "react";

const contactInfo = [
    {
        icon: <i className="bx bxl-linkedin text-2xl text-blue-400"></i>,
        label: "LinkedIn",
        value: "Harishkanna Ramamoorthi",
        link: "https://www.linkedin.com/in/harishkannar11",
    },
    {
        icon: <i className="bx bxl-github text-2xl text-gray-300"></i>,
        label: "GitHub",
        value: "HarishkannaR11",
        link: "https://github.com/HarishkannaR11",
    },
    {
        icon: <i className="bx bxl-twitter text-2xl text-sky-400"></i>,
        label: "Twitter",
        value: "@krisharish11",
        link: "https://twitter.com/krisharish11",
    },
    {
        icon: <i className="bx bxs-envelope text-2xl text-pink-400"></i>,
        label: "Email",
        value: "krisharish11@gmail.com",
        link: "mailto:krisharish11@gmail.com",
    },
];

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const formRef = useRef();

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init('m_g30txeYeC09aNvc');
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus(null);

        // Get form data for debugging
        const formData = new FormData(formRef.current);
        console.log('Form Data:', {
            title: formData.get('title'),
            from_name: formData.get('from_name'),
            from_email: formData.get('from_email'),
            message: formData.get('message')
        });

        try {
            const result = await emailjs.sendForm(
                'service_e9wtegd',
                'template_ifgjcmc',
                formRef.current,
                'm_g30txeYeC09aNvc'
            );

            console.log('EmailJS Result:', result);

            if (result.status === 200) {
                setSubmitStatus('success');
                formRef.current.reset();
            } else {
                console.error('EmailJS failed with status:', result.status);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('EmailJS Error Details:', {
                message: error.message,
                text: error.text,
                status: error.status
            });
            setSubmitStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-white text-gray-900 dark:bg-gradient-to-b dark:from-black dark:via-indigo-950 dark:to-purple-950 dark:text-indigo-100 min-h-[60vh] flex flex-col items-center justify-center transition-colors duration-500">
            <h2 className="text-4xl font-extrabold tracking-widest mb-8 text-center dark:text-indigo-200">Contact Me</h2>
            <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/80 dark:bg-black/80 dark:text-indigo-100 rounded-2xl shadow-xl dark:shadow-[0_0_32px_8px_rgba(80,80,255,0.4)] border border-indigo-100 dark:border-indigo-500 p-8 transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(80,80,255,0.4)] hover:ring-4 hover:ring-indigo-400/60">
                {/* Contact Info */}
                <div className="flex flex-col gap-6 justify-center">
                    <h3 className="text-2xl font-semibold mb-2">Let's Connect</h3>
                    <ul className="space-y-4">
                        {contactInfo.map((info) => (
                            <li key={info.label} className="flex items-center gap-4">
                                <span>{info.icon}</span>
                                <a href={info.link} target="_blank" rel="noopener noreferrer" className="hover:underline text-lg">
                                    <span className="font-bold">{info.label}:</span> {info.value}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Contact Form */}
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 bg-white/90 dark:bg-indigo-950/80 dark:text-indigo-100 rounded-xl p-6 shadow-lg dark:shadow-[0_0_32px_8px_rgba(80,80,255,0.4)] border border-indigo-100 dark:border-indigo-500"
                    autoComplete="off"
                >
                    <label htmlFor="title" className="font-semibold">Subject</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Message Subject"
                        className="px-4 py-2 rounded bg-gray-100 dark:bg-black text-gray-900 dark:text-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        required
                    />
                    <label htmlFor="from_name" className="font-semibold">Name</label>
                    <input
                        id="from_name"
                        name="from_name"
                        type="text"
                        placeholder="Your Name"
                        className="px-4 py-2 rounded bg-gray-100 dark:bg-black text-gray-900 dark:text-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        required
                    />
                    <label htmlFor="from_email" className="font-semibold">Email</label>
                    <input
                        id="from_email"
                        name="from_email"
                        type="email"
                        placeholder="Your Email"
                        className="px-4 py-2 rounded bg-gray-100 dark:bg-black text-gray-900 dark:text-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        required
                    />
                    <label htmlFor="message" className="font-semibold">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        className="px-4 py-2 rounded bg-gray-100 dark:bg-black text-gray-900 dark:text-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        rows={4}
                        required
                    />

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded animate-in slide-in-from-top-2 duration-300 ease-out">
                            <div className="flex items-center gap-2">
                                <i className="bx bx-check-circle text-xl text-green-600"></i>
                                <span className="font-medium">Message sent successfully!</span>
                            </div>
                            <p className="text-sm mt-1 text-green-600">I'll get back to you soon.</p>
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded animate-in slide-in-from-top-2 duration-300 ease-out">
                            <div className="flex items-center gap-2">
                                <i className="bx bx-error-circle text-xl text-red-600"></i>
                                <span className="font-medium">Failed to send message.</span>
                            </div>
                            <p className="text-sm mt-1 text-red-600">Please try again or contact me directly.</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-400 hover:to-purple-400 text-white font-bold py-2 px-6 rounded mt-2 transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''
                            }`}
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center">
                                <i className="bx bx-loader-alt bx-spin mr-2 text-lg"></i>
                                <span className="animate-pulse">Sending...</span>
                            </span>
                        ) : (
                            <span className="flex items-center justify-center">
                                <i className="bx bx-send mr-2"></i>
                                Send Message
                            </span>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact; 