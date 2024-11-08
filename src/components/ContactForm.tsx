"use client"
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        services: '',
        country: '',
        schedule: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            e.currentTarget,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        )
        .then(
            (result) => {
                setSuccessMessage('Your message has been sent successfully!');
                setErrorMessage('');
                // Reset form data
                setFormData({
                    name: '',
                    email: '',
                    services: '',
                    country: '',
                    schedule: ''
                });
            },
            (error) => {
                setErrorMessage('Something went wrong, please try again.');
                setSuccessMessage('');
            }
        );
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-gray-700 font-medium" htmlFor="name">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium" htmlFor="email">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium" htmlFor="services">
                        Which services would you like to take? <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="services"
                        name="services"
                        value={formData.services}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium" htmlFor="country">
                        Which country are you from? <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium" htmlFor="schedule">
                        Would you like to provide us with a specific time?
                    </label>
                    <input
                        type="datetime-local"
                        id="schedule"
                        name="schedule"
                        value={formData.schedule}
                        onChange={handleChange}
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
                <button type="submit" className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
                    Send Message
                </button>
                {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}
                {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default ContactForm;