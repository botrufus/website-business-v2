import Link from 'next/link'

export default function footer() {
    return (
        <footer className="bg-black w-full flex flex-col md:flex-row px-8 pt-20 pb-10">
                <div className="flex-1 mb-6 pb-10 items-center">
                    <a className="text-white no-underline hover:no_underline font-mono text-5xl lg:text:4xl" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                      Name
                    </a>
                </div>
                <div className="flex-1 pt-10">
                    <p className="text-center font-mono text-white mb-6" href="#">Contact</p>
                    <p className="font-mono text-white text-center">© 2021, Name. Alle Rechte vorbehalten.</p>
                </div>
                <div className="flex-1">
                    <p className="text-white text-right no-underline hover:no_underline font-mono text-xl lg:text:4xl" href="#">
                        Datenschutz
                    </p>
                    <Link href="/imprint">
                        <p className="text-white text-right no-underline hover:underline font-mono text-xl lg:text:4xl">
                            Impressum
                        </p>
                    </Link>
            </div>
        </footer>
    )
}