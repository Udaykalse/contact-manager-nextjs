// "use client";
// import React, { useActionState } from "react";
// import { ContactType } from "../_types/contact";
// import { FiTrash2 } from "react-icons/fi";

// type DeleteButtonProps = {
//   // @typescript-eslint/no-explicit-any
//   action: (prevState: unknown, formData: FormData) => Promise<unknown>;
//   contact?: ContactType;
// };

// const DeleteButton = ({ action, contact }: DeleteButtonProps) => {
//   const [state, formAction] = useActionState(action, null)
//   return (
//     <form action={formAction} method="post" className="inline">
//       {contact && <input type="hidden" name="id" value={contact?.id} />}

//       <button
//         type="submit"
//         aria-label={`Delete contact ${contact?.name ?? ""}`}
//         className="flex items-center gap-1 text-red-600 hover:text-red-800 cursor-pointer"
//         onClick={(e) => {
//           if (!confirm("Are you sure you want to delete this contact?")) {
//             e.preventDefault();
//           }
//         }}
//       >
//         <FiTrash2 />
//         Delete
//       </button>
//     </form>
//   );
// };

// export default DeleteButton;
"use client";
import React, { useActionState } from "react";
import { ContactType } from "../_types/contact";
import { FiTrash2 } from "react-icons/fi";

type DeleteButtonProps = {
  action: (prevState: unknown, formData: FormData) => Promise<unknown>;
  contact?: ContactType;
};

const DeleteButton = ({ action, contact }: DeleteButtonProps) => {
  const [state, formAction] = useActionState(action, null);

  return (
    <form action={formAction} className="inline">
      {contact && <input type="hidden" name="id" value={contact?.id} />}

      <button
        type="submit"
        aria-label={`Delete contact ${contact?.name ?? ""}`}
        className="flex items-center gap-1 text-red-600 hover:text-red-800 cursor-pointer"
        onClick={(e) => {
          if (!confirm("Are you sure you want to delete this contact?")) {
            e.preventDefault();
          }
        }}
      >
        <FiTrash2 />
        Delete
      </button>
    </form>
  );
};

export default DeleteButton;
