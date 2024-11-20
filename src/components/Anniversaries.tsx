import Image from "next/image";
import Link from "next/link";

const Anniversaries = () => {
    return (
        <div className="p-4 bg-slate-300 rounded-lg shadow-md shadow-red-900 text-sm flex flex-col gap-4">
            <div className="flex justify-between items-center font-medium">
                <span className="text-slate-900">Company Anniversaries</span>
            </div>
            {/* BOTTOM */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/28607266/pexels-photo-28607266/free-photo-of-young-man-in-leather-jacket-with-urban-motion-blur.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                    <span>ABC Cleaning</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <button className="bg-red-900 text-white text-xs px-2 py-1 rounded-md">See Deals</button>
                </div>
            </div>
            {/* UPCOMING */}
            <div className="p-4 bg-slate-300 rounded-lg flex items-center gap-4">
                <Image src="https://cdn-icons-png.flaticon.com/128/2824/2824564.png" alt="" width={24} height={24} />
                <Link href="/" className="flex flex-col gap-1 text-xs">
                    <span>Upcoming Anniversaries</span>
                    <span className="text-red-900">See 13 upcoming anniversaries.</span>
                </Link>
            </div>
        </div>
    )
}

export default Anniversaries;