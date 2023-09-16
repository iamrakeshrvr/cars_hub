import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center
        sm:px-16 px-6 py-4">
            <Link href="/" className="flex justify-center items-center">
                <Image src="/logo.png"
                alt="AKR Cars Logo"
                width={158}
                height={58}
                className="object-contain"
                />
            </Link>

            <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="text-black
            rounded-full bg-white min-w-[130px]"
            />
        </nav>
    </header>
  )
}

export default Navbar
