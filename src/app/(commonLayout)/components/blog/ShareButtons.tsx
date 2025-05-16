"use client";

import { Facebook, Twitter, Linkedin, Mail, LinkIcon } from "lucide-react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-700 font-medium">Share:</span>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
        aria-label="Share on Facebook"
      >
        <Facebook size={16} />
      </a>

      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter size={16} />
      </a>

      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={16} />
      </a>

      <a
        href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
        className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
        aria-label="Share via Email"
      >
        <Mail size={16} />
      </a>

      <button
        onClick={copyToClipboard}
        className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition-colors"
        aria-label="Copy link"
      >
        <LinkIcon size={16} />
      </button>
    </div>
  );
}
