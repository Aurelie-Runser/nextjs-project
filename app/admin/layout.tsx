
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }
  
  return (
    <>    
      <section className="border border-fuchsia-500">
        {children}
      </section>
    </>
  );
}
