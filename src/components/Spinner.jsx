import React from 'react';

export default function Spinner({ size = 8, color = 'text-blue-500' }) {
  // Tailwind sizing: h-8 w-8 by default
  const dimension = `h-${size} w-${size}`;
  return (
    <div className={`inline-block ${dimension} animate-spin rounded-full border-4 border-solid border-current border-r-transparent ${color}`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}
