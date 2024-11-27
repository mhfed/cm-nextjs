import React from 'react';

interface AccountLayoutProps {
  children: React.ReactNode;
  auth: React.ReactNode;
}

export default function AccountLayout({
  children,
  auth,
}: AccountLayoutProps) {
  return (
    <div className="container mx-auto py-8">
      {auth}
      {children}
    </div>
  );
} 