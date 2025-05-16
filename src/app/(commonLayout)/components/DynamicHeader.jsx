import { ChevronRight, Home } from "lucide-react";
export default function DynamicHeader({ pageName }) {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage: "url('images/contact/c1.jpg')",
          filter: "brightness(0.6)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full  text-white">
        {/* Title */}
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-6">
          {pageName}
        </h1>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 bg-white text-gray-800 opacity-70 px-6 py-2 rounded-full">
          <div className="flex items-center">
            <Home className="h-4 w-4" />
          </div>
          <NavLink href="/" label="Home" />
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium">{pageName}</span>
        </div>
      </div>
    </div>
  );
}

// Navigation Link with Hover Effect
const NavLink = ({ href, label }) => {
  return (
    <a href={href} className="relative group">
      <span className="relative overflow-hidden">
        <span className="relative z-10">{label}</span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
      </span>
    </a>
  );
};
