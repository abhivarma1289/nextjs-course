export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Feautres Products</h1>

      {children}
    </>
  );
}
