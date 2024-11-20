import Image from "next/image";

const ProfileCard = () => {
    return (
        <div className="p-4 bg-slate-300 rounded-lg shadow-md shadow-red-900 text-sm flex flex-col gap-6">
            <div className="h-20 relative">
                <Image src="/digendweb.jpeg" alt="" fill className="rounded-md object-cover" />
                <Image src="/icon.png" alt="" width={48} height={48} className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-red-900 z-10" />
            </div>
            <div className="h-20 flex flex-col gap-2 items-center">
                <span className="font-semibold">Wheretube Profile</span>
                <div className="flex items-center gap-4">
                    <div className="flex">
                        <Image src="/icon.png" alt="" width={12} height={12} className="rounded-full w-3 h-3" />
                        <Image src="/icon.png" alt="" width={12} height={12} className="rounded-full w-3 h-3" />
                        <Image src="/icon.png" alt="" width={12} height={12} className="rounded-full w-3 h-3" />
                    </div>
                    <span className="text-xs text-slate-900">500 Followers</span>
                </div>
                <button className="bg-red-900 text-slate-100 text-xs p-2 rounded-md">My Profile</button>
            </div>
        </div>
    );
};

export default ProfileCard;