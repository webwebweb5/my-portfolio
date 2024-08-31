import { LeftSectionView } from "@/components/dashboard/view/left-section-view";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="max-w-[78rem] mx-auto p-4">
      <div className="gap-4 flex flex-col md:flex-row">
        <LeftSectionView />
        {children}
        {/* <View /> */}
      </div>
    </main>
  );
}
