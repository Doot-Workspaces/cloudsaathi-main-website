import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BackButton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-4">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors duration-200 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-semibold">Back to Home</span>
      </Link>
    </div>
  );
}

