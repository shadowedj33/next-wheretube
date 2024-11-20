import Image from "next/image";
import Link from "next/link";

const FriendRequests = () => {
    return (
        <div className="p-4 bg-slate-300 rounded-lg shadow-md shadow-red-900 text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-slate-900">Friend Requests</span>
                <Link href="" className="text-red-900 text-xs">See all</Link>
            </div>
            {/* BOTTOM */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/28607266/pexels-photo-28607266/free-photo-of-young-man-in-leather-jacket-with-urban-motion-blur.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                    <span>Max Walrop</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <Image src="https://cdn-icons-png.flaticon.com/128/17134/17134877.png" alt="" width={20} height={20} className="cursor-pointer" />
                    <Image src="https://cdn-icons-png.flaticon.com/128/2516/2516681.png" alt="" width={20} height={20} className="cursor-pointer" />
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/28607266/pexels-photo-28607266/free-photo-of-young-man-in-leather-jacket-with-urban-motion-blur.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                    <span>DEF Painting</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <Image src="https://cdn-icons-png.flaticon.com/128/17134/17134877.png" alt="" width={20} height={20} className="cursor-pointer" />
                    <Image src="https://cdn-icons-png.flaticon.com/128/2516/2516681.png" alt="" width={20} height={20} className="cursor-pointer" />
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/28607266/pexels-photo-28607266/free-photo-of-young-man-in-leather-jacket-with-urban-motion-blur.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                    <span>FoodCritic79</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <Image src="https://cdn-icons-png.flaticon.com/128/17134/17134877.png" alt="" width={20} height={20} className="cursor-pointer" />
                    <Image src="https://cdn-icons-png.flaticon.com/128/2516/2516681.png" alt="" width={20} height={20} className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default FriendRequests;