export default function ProductDetailsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
        
          {children}
          <h1>Feautres Products</h1>
          
        </body>
      </html>
    );
  }