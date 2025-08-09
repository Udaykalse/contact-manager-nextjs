"use server";

import { revalidatePath } from "next/cache";
import { createContact, deleteContact , updateContact } from "../api/contact";
import { ContactType } from "../_types/contact";

// export const createContactAction = async (
//   prevState: unknown,
//   formdata: FormData
// ) => {
//   if(!formdata) {
//     return { error: "Form data is required" };
//   }
//  const newContact:ContactType = {
//    name: formdata.get("name") as string,
//    email: formdata.get("email") as string,
//    userId: "",
//    id: 0
//  };
//  console.log("Creating createContactAction contact:", newContact);
//  try {
//   await createContact(newContact);
//   revalidatePath("/contact");
//   return { success: true };
//  } catch (error) {
//     console.error("Error creating contact:", error);
//     return { error: "Failed to create contact" };
  
//  }
// };
import { getSession } from "../_lib/session"; // adjust path

export const createContactAction = async (
  prevState: unknown,
  formdata: FormData
) => {
  if (!formdata) {
    return { error: "Form data is required" };
  }

  const session = await getSession();
  if (!session) {
    return { error: "You must be logged in to add a contact" };
  }

  const newContact: ContactType = {
    name: formdata.get("name") as string,
    email: formdata.get("email") as string,
    userId: String(session.id), 
    id: Date.now(), 
  };

  console.log(`Creating contact for ${session.email} (userId: ${session.id})`);
  console.log(newContact);

  try {
    await createContact(newContact);
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.error("Error creating contact:", error);
    return { error: "Failed to create contact" };
  }
};

// export const updateContactAction = async (
//   prevState: unknown,
//   formdata: FormData
// ) => {
// //  if (!formdata) {
// //     return { error: "Form data is required" };
// //   }
// const id=formdata.get("id") as string;
//   const session = await getSession();
//   if (!session) {
//     return { error: "You must be logged in to add a contact" };
//   }

//   const updateContact: ContactType = {
//     name: formdata.get("name") as string,
//     email: formdata.get("email") as string,
//     userId: String(session.id), 
//     id: Date.now(), 
//   };

//   console.log(`Creating contact for ${session.email} (userId: ${session.id})`);
//   console.log(updateContact);

//   try {
//     await updateContact(id, updateContact);
//     revalidatePath("/contact");
//     return { success: true };
//   } catch (error) {
//     console.error("Error update contact:", error);
//     return { error: "Failed to update contact" };
//   }

// };


export const updateContactAction = async (
  prevState: unknown,
  formdata: FormData
) => {
  const id = formdata.get("id") as string;
  const session = await getSession();

  if (!session) {
    return { error: "You must be logged in to update a contact" };
  }

  const updatedContactData: ContactType = {
    name: formdata.get("name") as string,
    email: formdata.get("email") as string,
    userId: String(session.id),
    id: Number(id),
  };

  try {
    // Call the API function here:
    await updateContact(id, updatedContactData);

    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.error("Error updating contact:", error);
    return { error: "Failed to update contact" };
  }
};

export const deleteContactAction = async (
  prevState: unknown,
  formdata: FormData
) => {
  const id = formdata.get("id") as string;
  try {
    await deleteContact(id);
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.error("Error deleting contact:", error);
    return { error: "Failed to delete contact" };
  }
};
