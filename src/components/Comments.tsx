import Image from "next/image";

const Comments = () => {
    return (
        <div className="">
            {/* WRITE COMMENT */}
            <div className="flex items-center gap-4">
                <Image src="/icon.png" alt="" width={32} height={32} className="w-8 h-8 rounded-full" />
                <div className="flex items-center justify-between bg-red-900 rounded-xl text-sm px-6 py-2 w-full">
                    <input type="text" placeholder="Write a comment..." className="bg-transparent outline-none flex-1" />
                    <Image src="https://cdn-icons-png.flaticon.com/128/876/876777.png" alt="" width={16} height={16} className="w-5 h-5 cursor-pointer" />
                </div>
            </div>
            {/* COMMENTS */}
            <div className="">
                {/* COMMENT */}
                <div className="flex gap-4 justify-between mt-6">
                    {/* USER ICON */}
                    <Image src="/icon.png" alt="" width={40} height={40} className="w-10 h-10 rounded-full" />
                    {/* COMMENT TEXT */}
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-medium">WhereTube</span>
                        <p>
                            Wow, amazing work! We would love to feature your work on our platform. Please reach out to us!
                        </p>
                        <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                            <div className="flex items-center gap-4">
                                <Image src="/heart.png" alt="" width={12} height={12} className="cursor-pointer w-4 h-4" />
                                <span className="text-red-900">|</span>
                                <span className="text-red-900 font-bold">25 Likes</span>
                            </div>
                            <div className="">Reply</div>
                        </div>
                    </div>
                    {/* ICON */}
                    <Image src="https://cdn-icons-png.flaticon.com/128/512/512142.png" alt="" width={16} height={16} className="cursor-pointer w-4 h-4" />
                </div>
            </div>
        </div>
    );
};

export default Comments