import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  const renderPageLinks = () => {
    const pages = [];

    // Always show first page
    pages.push(
      <Link
        key={1}
        href={`${basePath}?page=1`}
        className={`w-10 h-10 flex items-center justify-center rounded-full ${
          currentPage === 1
            ? "bg-green-500 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        1
      </Link>
    );

    // Calculate range of pages to show
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    // Add ellipsis after first page if needed
    if (startPage > 2) {
      pages.push(
        <span key="ellipsis1" className="px-2">
          ...
        </span>
      );
    }

    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Link
          key={i}
          href={`${basePath}?page=${i}`}
          className={`w-10 h-10 flex items-center justify-center rounded-full ${
            currentPage === i
              ? "bg-green-500 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {i}
        </Link>
      );
    }

    // Add ellipsis before last page if needed
    if (endPage < totalPages - 1) {
      pages.push(
        <span key="ellipsis2" className="px-2">
          ...
        </span>
      );
    }

    // Always show last page if there is more than one page
    if (totalPages > 1) {
      pages.push(
        <Link
          key={totalPages}
          href={`${basePath}?page=${totalPages}`}
          className={`w-10 h-10 flex items-center justify-center rounded-full ${
            currentPage === totalPages
              ? "bg-green-500 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {totalPages}
        </Link>
      );
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2 my-8">
      {/* Previous Page Button */}
      {currentPage > 1 && (
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
        >
          &lt;
        </Link>
      )}

      {/* Page Numbers */}
      {renderPageLinks()}

      {/* Next Page Button */}
      {currentPage < totalPages && (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
        >
          &gt;
        </Link>
      )}
    </div>
  );
}
