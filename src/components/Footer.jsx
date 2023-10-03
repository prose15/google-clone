import React from 'react'

export const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200">
    &copy; {date} Goggl, Inc.
  </div>
  );
}
