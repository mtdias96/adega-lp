import Image from "next/image";

export default function AdegaLogo() {
  return (
    <div
      className="flex items-center space-x-3"
    >
      <Image
        alt="logo adega-tech"
        width={100}
        height={10}
        src={'/logo.png'}
      />

      <span className="text-3xl font-bold text-primary-400 font-sans uppercase leading-[38.4px]">
        adegatech
      </span>
    </div>

  )
}
