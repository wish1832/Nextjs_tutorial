// Add CSS from global.css to app
import '@/app/ui/global.css';
// Import fonts
import {inter} from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Apply font in className attribute */}
      {/* Backticks do not create a string. They appear to be necessary for the className to be interpereted. What are the backticks? */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
