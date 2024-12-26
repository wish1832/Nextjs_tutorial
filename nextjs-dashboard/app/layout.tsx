// layout.tsx files define UI components shared across
// multiple pages.

// The layout.tsx in app/ is known as the root layout, 
// and it is required. The layout here will be applied to 
// all pages in the app. 

// This is where <html> and <body> tags should be added and
// modified, and this is also where metadata should be added.
// Putting these tags in a layout keeps from having to copy 
// them to every single page in the application.

// Add CSS from global.css to app
import '@/app/ui/global.css';
// Import primary application font
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
      <body className={`${inter.className} antialiased`}>
        {children}
        </body>
    </html>
  );
}
