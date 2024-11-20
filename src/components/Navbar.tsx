import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import {
    ClerkLoaded,
    ClerkLoading,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
    return (
        <div className="h-24 flex items-center justify-between">
            {/* Left */}
            <div className="xs:hidden sm:hidden md:hidden lg:block w-[20%]">
                <Link href="/" className="font-bold text-xl text-red-900">WHERETUBE</Link>
            </div>
            {/* Center */}
            <div className="hidden md:flex w-[50%]">
            {/* LINKS */}
                <div className='flex gap-6 text-red-900'>
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/home.png" alt="Homepage" width={16} height={16} className="w-4 h-4" />
                        <span>Homepage</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/discover.png" alt="Homepage" width={16} height={16} className="w-4 h-4" />
                        <span>Explore</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/handshake.png" alt="Homepage" width={16} height={16} className="w-4 h-4" />
                        <span>Following</span>
                    </Link>
                </div>
            </div>
            {/* Right */}
            <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
                <ClerkLoading>
                    <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-red-900 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <div className="cursor-pointer">
                            <Image src="https://cdn-icons-png.flaticon.com/128/681/681443.png" alt="" width={20} height={20} />
                        </div>
                        <div className="cursor-pointer">
                            <Image src="/beacon.png" alt="" width={20} height={20} />
                        </div>
                        <div className="cursor-pointer">
                            <Image src="/megaphone.png" alt="" width={20} height={20} />
                        </div>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <div className="flex items-center gap-2">
                            <Image src="/user.png" alt="" width={20} height={20} />
                            <Link href="/sign-in">Login/Register</Link>
                        </div>
                    </SignedOut>
                </ClerkLoaded>
                <MobileMenu />
            </div>
        </div>
    )
}

export default Navbar;