import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wguhagj', 'template_zichrq4', form.current, 'eXoxBwPfDvI54A0wc')
            .then((result) => {
                if (result.text) {
                    toast.success("message sent");

                }
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div >
            <div className='my-10 text-center contactMod p-10 container mx-auto rounded-lg'>
                <h1 className='my-5 text-4xl text-yellow-700 hover:text-orange-600'>Get in Touch</h1>
                <div className='flex flex-col items-center justify-center'>
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col">
                        <div className="flex flex-col">
                            <label className='font-bold text-green-900'>Name</label>
                            <input className="input input-bordered w-full max-w-xs" type="text" name="user_name" />
                            <label className='font-bold text-green-900'>Email</label>
                            <input className="input input-bordered w-full max-w-xs" type="email" name="user_email" />
                            <label className='font-bold text-green-900'>Message</label>
                            <textarea className='textarea textarea-bordered' name="message" />
                        </div>
                        <input className='btn my-3' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;