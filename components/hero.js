import Image from "next/image";
export default function hero() {
  return (
    <div className="py-20 bg-white font-mono mx-auto max-w-7xl pl-10 pr-10">
      <div className="grid grid-rows-3 grid-flow-row gap-4 grid-cols-2">
        <div className="row-span-2">
          <div className="font-extrabold text-5xl">
            <h1>Erfolg für ihr Unternehmen durch die bestmögliche Webseite.</h1>
          </div>
        </div>
        <div className="row-start-3 pt-20">
          <p className="font-semibold text-3xl font-mono">Was wir machen</p>
          <p className="text-sm font-light font-mono">
            Aufgrund der Digitalisierung wird die Internetpräsenz eines Unternehmens immer wichtiger. Wir sind dafür da,
            sie in der Hinsicht bestens aufzustellen und den weiteren Erfolg ihres Unternehmes zu unterstützen.
            </p>
        </div>
        <div className="animate__bounceIn row-span-2 pt-10 transition duration-100 ease-in-out transform hover:scale-110">
          <Image
            src="/heropic.png"
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}