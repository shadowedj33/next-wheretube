import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

const AddPost = () => {
    const { userId } = auth();

    console.log(userId);

    const testAction = async (formData: FormData) => {
        "use server";
        
        if (!userId) return;
        const desc = formData.get('desc') as string;
        try {
            prisma.post.create({
                data: {
                    userId: userId,
                    desc: desc,
                },
            });
            console.log()
       } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="p-4 bg-slate-400 rounded-lg flex gap-4 justify-between test-sm">
            {/* USER IMAGE */}
            <Image src="/icon.png" alt="" width={48} height={48} className="w-12 h-12 object-cover rounded-full" />
            {/* POST INPUT */}
            <div className="flex-1">
                {/* TEXT INPUT */}
                <form action="" className="flex gap-4">
                    <textarea placeholder="What's new with your business?" className="flex-1 bg-red-900 rounded-lg text-center text-slate-100" name="desc"></textarea>
                    <button type="submit" className="bg-red-900 text-white px-4 py-2 rounded-lg">Post</button>
                </form>
                {/* POST OPTIONS */}
                <div className="flex items-center gap-4 mt-4 text-red-900 flex-wrap">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="https://cdn-icons-png.flaticon.com/128/1829/1829552.png" alt="" width={20} height={20} />
                        Photo
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="https://cdn-icons-png.flaticon.com/128/711/711245.png" alt="" width={20} height={20} />
                        Video
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="https://cdn-icons-png.flaticon.com/128/18345/18345365.png" alt="" width={20} height={20} />
                        Event
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/chart-histogram.png" alt="" width={20} height={20} />
                        Poll
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPost;