export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="border border-fuchsia-500">
      {children}
    </section>
  );
}
