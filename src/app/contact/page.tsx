import ContactList from "../_components/ContactList";
import { getSession } from "../_lib/session";
import { getContacts } from "../api/contact";

const ContactPages = async () => {
  const user = await getSession();

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Please{" "}
        <a href="/login" className="text-blue-600 hover:underline ml-1">
          log in
        </a>{" "}
        to view this page.
      </div>
    );
  }

  const contacts = await getContacts(String(user.id));
  console.log("List of contacts", contacts);

  if (!contacts || contacts.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen text-center">
        Please{" "}
        <a href="/contact/new" className="text-blue-600 hover:underline ml-1">
          add a contact
        </a>{" "}
        to your contact list.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Your Contacts</h1>
        <a
          href="/contact/new"
          className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition"
        >
          Add Contact
        </a>
      </div>
      <ContactList contacts={contacts}/>
    </div>
  );
};

export default ContactPages;
