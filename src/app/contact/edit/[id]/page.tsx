import ContactForm from "@/app/_components/contactForm";
import {  updateContactAction } from "@/app/actions/contact";
import { getContactsById } from "@/app/api/contact";


const editContactPage = async ({params}:{params:Promise<{id:string}>}) => {

    const {id} = await params;
    const contact = await getContactsById(id);
console.log("contact edits", contact);
   return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Edit Contact</h1>
            <ContactForm  action={updateContactAction} contact={contact}/>
        </div>
    );
};

export default editContactPage;