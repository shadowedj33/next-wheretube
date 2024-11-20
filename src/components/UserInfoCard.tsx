import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({userId}:{userId:string}) => {
    return (
        <div className="p-4 bg-slate-300 rounded-lg shadow-md shadow-red-900 text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-slate-900">User Information</span>
                <Link href="" className="text-red-900 text-xs">See all</Link>
            </div>
            {/* BODY */}
            <div className="flex flex-col gap-4 text-slate-900">
                <div className="flex items-center gap-2">
                    <span className="text-xl text-black">ABC Cleaning</span>
                    <span className="text-sm">@abcleaning</span>
                </div>
                <p>
                    The best cleaning service in the world. We clean everything from your house to your car. We are the best in the business.
                </p>
                <div className="flex items-center gap-2">
                    <Image src="/map.png" alt="Profile Picture" width={16} height={16} />
                    <span>Located in <b>Pittsburgh</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/map.png" alt="Profile Picture" width={16} height={16} />
                    <span>Category: <b>Cleaner</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/map.png" alt="Profile Picture" width={16} height={16} />
                    <span>Around Since <b>2017</b></span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-1 items-center">
                        <Image src="/link.png" alt="" width={16} height={16} />
                        <Link href="https://abcleaning.com" target="_blank" className="text-red-900 font-medium">abcleaning.com</Link>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Image src="/date.png" alt="" width={16} height={16} />
                        <span>Joined November 2024</span>
                    </div>
                </div>
                <button className="bg-slate-900 text-white text-sm rounded-md p-2">Follow</button>
                <span className="text-red-900 self-end text-xs cursor-pointer">Block User</span>
            </div>
        </div>
    );
};

export default UserInfoCard;