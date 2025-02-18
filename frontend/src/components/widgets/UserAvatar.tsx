import React from 'react';

type Props = {
  name?: string;
};

const UserAvatar = ({ name = "Dr. John Doe" }: Props) => {
  const getInitials = (fullName: string) => {
    return fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="px-4 py-3 border-b bg-[#111411] text-white text-xl flex justify-end items-center gap-3">
      <div>{name}</div>
      <div className="h-7 w-7 flex items-center justify-center text-xs font-bold rounded-full bg-purple-500">
        {getInitials(name)}
      </div>
    </div>
  );
};

export default UserAvatar;
