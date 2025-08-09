import ContactForm from "@/app/_components/contactForm";
import { createContactAction } from "@/app/actions/contact";
import React from "react";

const NewContactPage = () => {
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">New Contact</h1>
            <ContactForm  action={createContactAction}/>
        </div>
    );
};

export default NewContactPage;
