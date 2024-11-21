import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#091A25] w-screen h-screen flex items-center justify-center">
      <Image
        src={"/logo.svg"}
        alt="Logo"
        width={155}
        height={42}
        className="aspect-[155/42] w-2/4"
      />
    </main>
  );
}
