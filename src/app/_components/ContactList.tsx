import React from "react";
import { ContactType } from "../_types/contact";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import DeleteButton from "./DeleteButton";
import { deleteContactAction } from "../actions/contact";

const ContactList = ({ contacts }: { contacts: ContactType[] }) => {
   console.log("ContactList received contacts:", contacts);
  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div key={contact.id} className="p-4 border rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold">{contact.name}</h2>
              <p>{contact.email}</p>
            </div>
            <div
              className="flex items-center self-center g-3
            "
            >
                <Link href={`/contact/edit/${contact.id}`} className="text-blue-600 hover:text-blue-800">
                <FiEdit className="text-blue-600 hover:text-blue-800 cursor-pointer mr-3" />
                </Link>

                <DeleteButton action={deleteContactAction} contact={contact} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
