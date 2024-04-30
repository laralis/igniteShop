import logo from "@/assets/logo.svg";
import Image from 'next/image';
export default function Header() {
  return (
    <header className="py-8 px-0 w-full max-w-5xl m-auto">
     <Image src={logo} alt={''}/>
    </header>
  );
}
