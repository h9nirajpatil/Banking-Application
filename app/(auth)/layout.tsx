import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <Image
          src="/icons/auth-image-1.png"
          alt="Auth"
          width={700}
          height={500}
        />
      </div>
    </main>
  );
}
