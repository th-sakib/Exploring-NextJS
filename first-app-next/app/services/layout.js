export default function RootLayout({ children }) {
  return (
    <main>
      <h1 className="text-2xl text-red-800">hello service layout</h1>
      {children}
    </main>
  );
}
