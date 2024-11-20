import Post from "./Post";

const Feed = () => {
    return (
        <div className="p-4 bg-slate-400 shadow-md shadow-red-900 rounded-lg flex flex-col gap-12">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Feed;