import Image from "next/image";
export default function CenteredLogo(){
    return(
        <div className="flex-grow flex items-center justify-center py-55">
        <div className="relative w-[400px] h-[400px]">
          {/* Background GIF */}
          <Image
            src="/bg-sphere.gif"
            alt="Animated Blob"
            width={400}
            height={400}
            className="object-contain"
          />

          {/* Overlayed Logo */}
          <Image
            src="/logo.png"
            alt="Reflecting Growth Logo"
            width={180}
            height={180}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invert"
          />
        </div>
      </div>
    )
}