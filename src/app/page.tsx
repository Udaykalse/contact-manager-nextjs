import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center gap-6">
      <h1 className="text-4xl font-bold">Welcome to Contact Manager</h1>
      <p className="text-lg text-gray-600">
        Manage your contacts efficiently and securely.
      </p>
      <Image
        src="/Contact-mang.webp"
        alt="Contact Manager"
        width={300}
        height={300}
         priority
        className="rounded-lg shadow-lg"
      />
      <p className="text-lg text-gray-600">
        Start Managing Your Contact
      </p>
    </div>
  );
}
