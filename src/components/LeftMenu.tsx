import Link from "next/link";
import ProfileCard from "./ProfileCard";
import Image from "next/image";
import Ad from "./Ad";

const LeftMenu = ({type}:{type:"home" | "profile"}) => {
    return (
        <div className="flex flex-col gap-6">
            {type==="home" && <ProfileCard />}
            <div className="p-4 bg-slate-300 rounded-lg shadow-md shadow-red-900 text-sm text-red-900 flex flex-col gap-2">
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-400">
                    <Image src="/posts.png" alt="" width={20} height={20} />
                    <span>My Posts</span>
                </Link>
                <hr className="border-t-1 border-gray-50 w-36 self-center" />
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-400">
                    <Image src="/posts.png" alt="" width={20} height={20} />
                    <span>Activity</span>
                </Link>
                <hr className="border-t-1 border-gray-50 w-36 self-center" />
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-400">
                    <Image src="/posts.png" alt="" width={20} height={20} />
                    <span>Marketplace</span>
                </Link>
                <hr className="border-t-1 border-gray-50 w-36 self-center" />
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-400">
                    <Image src="/posts.png" alt="" width={20} height={20} />
                    <span>Promotions</span>
                </Link>
                <hr className="border-t-1 border-gray-50 w-36 self-center" />
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-400">
                    <Image src="/posts.png" alt="" width={20} height={20} />
                    <span>Events</span>
                </Link>
                <hr className="border-t-1 border-gray-50 w-36 self-center" />
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-400">
                    <Image src="/posts.png" alt="" width={20} height={20} />
                    <span>Categories</span>
                </Link>
                <hr className="border-t-1 border-gray-50 w-36 self-center" />
                <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-400">
                    <Image src="/posts.png" alt="" width={20} height={20} />
                    <span>Settings</span>
                </Link>
            </div>
            <Ad size="sm" />
        </div>
    );
};

export default LeftMenu;