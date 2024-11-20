import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
    return (
        <div className="p-4 bg-slate-300 rounded-lg shadow-md shadow-red-900 text-sm ">
            {/* TOP */}
            <div className="flex items-center justify-between text-slate-900 font-medium">
                <span>Sponsored Ads</span>
                <Image src="/more.png" alt="" width={16} height={16} />
            </div>
            {/* BOTTOM */}
            <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4" }`}>
                <div className={`relative w-full ${ size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48" }`}>
                    <Image src="/digendweb.jpeg" alt="" fill className="rounded-lg object-cover" />
                </div>
                <div className="flex items-center gap-4">
                    <Image src="/digendweb.jpeg" alt="" width={24} height={24} className="rounded-full w-6 h-6 object-cover" />
                    <span className="text-slate-900 font-medium">Digital Endeavors</span>
                </div>
                <p className={ size === "sm" ? "text-xs" : "text-sm" }>
                    {size === "sm" 
                        ? "Upgrade your company digital presence." 
                        : size === "md" 
                        ? "Ready to take your business to the next digital level? Contact us today for a free consult!" 
                        : "Ready to take your business to the next digital level? Stop wasting time with premade website templates. Get the business tools or website your company deservers. Contact us today for a free consult!" }
                </p>
                <button className="bg-red-900 text-white text-xs px-2 py-1 rounded-lg">Learn More</button>
            </div>
        </div>
    );
};

export default Ad;