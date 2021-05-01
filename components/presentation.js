export default function presentation() {
  return (
    <div className="w-full max-w-7xl font-mono text-black pt-20 pb-10 mx-auto items-center justify-center" id="the-team">
        <div className="flex flex-col sm:flex-row">
          <div className="flex-1 p-10">
            <p className="font-semibold text-3xl font-mono">Über Uns</p>
            <p className="text-sm font-light font-mono">
              Wir beide studieren Informatik an der Technischen Universität
              München. Aufgrund unserer Interessen und unserem Hintergrund
              der Informatik, sind wir überzeugt Ihnen die bestmögliche Lösung
              für Ihre Webseite zu bieten.
              </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <Member name="Andreas Cselovszky" tag="Hat nen sehr großen" />
            <Member name="Cristoph Schure" tag="Hat nen sehr kleinen" />
            <Member name="Matt Ronchetto" tag="Je ne parle pas allemand" />
          </div>
        </div>
    </div>
  );
}

export function Member({name, tag, image}) {
  return (
    <div className="flex flex-col p-5 text-center">
      <div className="flex bg-gray-300">
        {image ? (
          <img
            src={image}
            className="h-13 w-13"
            alt={`Picture of ${name}`}
          />
        ) : (
          <svg
            xmlns="https://www.w3.org/2000/svg"
            className="h-13 w-13"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        )}
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-3xl">{name}</p>
        <p className="font-light text-sm">{tag}</p>
      </div>
    </div>
  )
}