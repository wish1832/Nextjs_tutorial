// Layout.tsx: defines UI that is shared between multiple pages
// In this example, this is a dashboard layout.
// The dashboard layout is defined in 
// app/ui/dashboard/sidenav.tsx
// The layout will be deployed for all subpages of this page

// When refreshing or switching pages within the layout, 
// only the page contents will render, not the layout itself.
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {/* "children" in this case is the page.tsx of
        dashboard/. In subpages, it is page.tsx of each
        subpage. */}
        {children}
        </div>
    </div>
  );
}