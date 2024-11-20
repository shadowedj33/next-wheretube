import Image from "next/image";
import Link from "next/link";

const UserMediaCard = ({userId}:{userId:string}) => {
    return (
        <div className="p-4 bg-slate-300 rounded-lg shadow-md shadow-red-900 text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-slate-900">User Media</span>
                <Link href="" className="text-red-900 text-xs">See More</Link>
            </div>
            {/* MEDIA */}
            <div className="flex gap-4 justify-between flex-wrap">
                <div className="relative w-1/4 h-24">
                    <Image src="https://images.pexels.com/photos/4239104/pexels-photo-4239104.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" fill className="object-cover rounded-md" />
                </div>
                <div className="relative w-1/4 h-24">
                    <Image src="https://images.pexels.com/photos/4099261/pexels-photo-4099261.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" fill className="object-cover rounded-md" />
                </div>
                <div className="relative w-1/4 h-24">
                    <Image src="https://images.pexels.com/photos/3616746/pexels-photo-3616746.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" fill className="object-cover rounded-md" />
                </div>
                <div className="relative w-1/4 h-24">
                    <Image src="https://images.pexels.com/photos/4239074/pexels-photo-4239074.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" fill className="object-cover rounded-md" />
                </div>
                <div className="relative w-1/4 h-24">
                    <Image src="https://images.pexels.com/photos/3616746/pexels-photo-3616746.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" fill className="object-cover rounded-md" />
                </div>
                <div className="relative w-1/4 h-24">
                    <Image src="https://images.pexels.com/photos/4239139/pexels-photo-4239139.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" fill className="object-cover rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default UserMediaCard;