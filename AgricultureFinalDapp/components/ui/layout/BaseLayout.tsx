import { FunctionComponent } from "react";
import Navbar from "../navbar";

interface BaseLayoutProps {
  backgroundColor?: string;
}

const BaseLayout: FunctionComponent<BaseLayoutProps> = ({
  children,
  backgroundColor = "bg-green-500",
}) => {
  return (
    <>
      <Navbar />
      <div className={`py-16 ${backgroundColor} overflow-hidden min-h-screen`}>
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </>
  );
};

export default BaseLayout;
