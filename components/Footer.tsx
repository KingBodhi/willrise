import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-alloy/30 py-10 text-sm">
      <div className="mx-auto max-w-6xl px-4 flex flex-col gap-6">
        <div className="flex flex-wrap gap-6">
          <div className="min-w-[160px]">
            <div className="font-bicubik text-xs opacity-70 mb-2">Explore</div>
            <ul className="space-y-2">
              <li><Link href="/patents" className="hover:text-signal">Patents</Link></li>
              <li><Link href="/licensing" className="hover:text-signal">Licensing</Link></li>
            </ul>
          </div>
          <div className="min-w-[160px]">
            <div className="font-bicubik text-xs opacity-70 mb-2">Company</div>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-signal">About</Link></li>
              <li><Link href="/distributors" className="hover:text-signal">Distributors</Link></li>
              <li><Link href="/blogs" className="hover:text-signal">Blogs</Link></li>
              <li><Link href="/contact" className="hover:text-signal">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Willrise Unlimited — Patent Pending.</p>
          <p className="opacity-70">Safety information only. Always follow standards and training.</p>
        </div>
      </div>
    </footer>
  );
}
