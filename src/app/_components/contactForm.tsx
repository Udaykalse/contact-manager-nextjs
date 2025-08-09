'use client';
import React, { useEffect } from "react";
import { ContactType } from "../_types/contact";
import { useRouter } from "next/navigation";

type ContactFormProps = {
  action: (formData: FormData) => Promise<{ success?: boolean; error?: string }>;
  contact?: ContactType;
};

const ContactForm = ({ action, contact }: ContactFormProps) => {
  const router = useRouter();
  const [state, formAction] = React.useActionState(action, null);

  useEffect(() => {
    if (state?.success) {
      router.push("/contact");
    }
  }, [state, router]);

  return (
    <form
      action={formAction}
      className="space-y-4 max-w-md mx-auto p-4 border rounded shadow"
    >
      <input type="hidden" name="id" value={contact?.id} />
      <div className="mt-3">
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"

          defaultValue={contact?.name || ""}
          required
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter contact name"
        />
      </div>

      <div className="mt-3">
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          defaultValue={contact?.email || ""}
          required
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter contact email"
        />
      </div>

      {state?.error && (
        <div className="text-red-500 text-sm mt-2">
          {state.error}
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
      >
        Save
      </button>
    </form>
  );
};

export default ContactForm;
