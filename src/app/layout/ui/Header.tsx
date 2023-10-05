'use client';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function Header() {
  const segment = useSelectedLayoutSegment();
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl px-10 py-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 capitalize">
          {segment}
        </h1>
      </div>
    </header>
  );
}
