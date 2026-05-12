import { Link } from 'react-router-dom';
import { ANNOUNCEMENT } from '@/lib/content';

export default function TopAnnouncementBar() {
  return (
    <div className="w-full bg-[#0A0A0A] text-white px-4 py-2 flex items-center justify-between font-sans text-sm">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
        </span>
        <span className="truncate">{ANNOUNCEMENT.text}</span>
      </div>
      <Link 
        to={ANNOUNCEMENT.cta.href} 
        className="text-lime-400 hover:text-lime-300 font-medium whitespace-nowrap"
      >
        {ANNOUNCEMENT.cta.label}
      </Link>
    </div>
  );
}
