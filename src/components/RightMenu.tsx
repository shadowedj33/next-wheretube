import Ad from "./Ad";
import Anniversaries from "./Anniversaries";
import FriendRequests from "./FriendRequests";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

const RightMenu = ({ userId }:{ userId?: string }) => {
    return (
        <div className="flex flex-col gap-6">
            {userId ? (<>
            <UserInfoCard userId={userId} />
            <UserMediaCard userId={userId} />
            </>) : null }
            <FriendRequests />
            <Anniversaries />
            <Ad size="md" />
        </div>
    );
};

export default RightMenu;