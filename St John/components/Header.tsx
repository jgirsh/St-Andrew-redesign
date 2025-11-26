import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      {/* Top utility bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center gap-6 py-3 text-sm">
            <Link href="#" className="hover:text-primary transition-colors">
              ATTENDANCE
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              CALENDAR
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              HOT LUNCH
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              SCHOOL NEWS
            </Link>
            <button className="hover:text-primary transition-colors">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-primary text-white relative overflow-hidden">
        {/* Diagonal accent */}
        <div className="absolute top-0 right-0 w-[500px] h-full bg-white"
             style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-20 h-20 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M50 10 L30 35 L40 35 L40 60 L35 60 L50 85 L65 60 L60 60 L60 35 L70 35 Z"
                        fill="#c8a882" stroke="#c8a882" strokeWidth="2"/>
                  <rect x="45" y="45" width="10" height="15" fill="#331555"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xl font-bold tracking-wide">ST. JOHN</div>
                <div className="text-xs tracking-wider">CATHOLIC</div>
                <div className="text-xs tracking-wider">SCHOOL</div>
              </div>
            </Link>

            {/* Navigation menu */}
            <nav className="flex items-center gap-8 text-sm font-semibold">
              <div className="relative group">
                <button className="flex items-center gap-1 py-2 hover:text-accent transition-colors">
                  ABOUT <ChevronDown size={16} />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center gap-1 py-2 hover:text-accent transition-colors">
                  ADMISSIONS <ChevronDown size={16} />
                </button>
              </div>
              <Link href="#" className="py-2 hover:text-accent transition-colors">
                ACADEMICS
              </Link>
              <Link href="#" className="py-2 hover:text-accent transition-colors text-primary">
                PRESCHOOL
              </Link>
              <div className="relative group">
                <button className="flex items-center gap-1 py-2 hover:text-accent transition-colors text-primary">
                  ACTIVITIES <ChevronDown size={16} />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center gap-1 py-2 hover:text-accent transition-colors text-primary">
                  GIVING <ChevronDown size={16} />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center gap-1 py-2 hover:text-accent transition-colors text-primary">
                  PARENTS <ChevronDown size={16} />
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

