import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
    return (
        <div className="flex flex-col gap-4">
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/5248733/pexels-photo-5248733.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" width={40} height={40} className="w-10 h-10 rounded-full" />
                    <span className="font-medium">ABC Cleaning</span>
                </div>
                <Image src="/more.png" alt="" width={20} height={20} />
            </div>
            {/* CAPTION */}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                    <Image src="https://images.pexels.com/photos/6872583/pexels-photo-6872583.jpeg?auto=compress&cs=tinysrgb&w=300" fill className="object-cover rounded-md" alt=""  />
                </div>
                <p>
                    Lauren got the pleasure of detailing a Bentley today! This car was in desperate need of a deep clean and we were happy to help. Swipe to see the before and after photos!
                </p>
            </div>
            {/* INTERACTION */}
            <div className="flex items-center justify-between text-sm my-4">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                        <Image src="/heart.png" alt="" width={16} height={16} className="cursor-pointer" />
                        <span className="text-red-900">|</span>
                        <span className="text-red-900">
                            159<span className="hidden md:inline"> Likes</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                        <Image src="/beacon.png" alt="" width={16} height={16} className="cursor-pointer" />
                        <span className="text-red-900">|</span>
                        <span className="text-red-900">
                            42<span className="hidden md:inline"> Comments</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                        <Image src="https://cdn-icons-png.flaticon.com/128/2526/2526496.png" alt="" width={16} height={16} className="cursor-pointer" />
                        <span className="text-red-900">|</span>
                        <span className="text-red-900">
                            23<span className="hidden md:inline"> Shares</span>
                        </span>
                    </div>
                </div>
            </div>
            <Comments />
        </div>
    );
};

export default Post;