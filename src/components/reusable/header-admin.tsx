import { ProfileHeader } from "./prifile-header";
export const HeaderAdmin = () => {
  return (
    <nav className="border-b h-fit flex items-center w-full min-w-full bg-sidebar py-2">
      <div className="flex justify-end mx-4 items-center space-x-4 w-full">
        <ProfileHeader />
      </div>
    </nav>
  );
};
