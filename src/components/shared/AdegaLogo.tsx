import Image from "next/image";

export default function AdegaLogo() {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3">
      <Image
        alt="logo adega-tech"
        width={100}
        height={50}
        src={'/logo.png'}
        className="w-18 h-18"
      />

    </div>
  )
}
