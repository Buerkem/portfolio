import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";

type AvatarProps = { src: string; alt: string };
const Avatar: React.FC<AvatarProps> = ({ src, alt }) => (
  <div className="relative size-24 md:size-36 lg:mx-auto">
    <Image
      className="rounded-full object-contain border border-zinc-100"
      src={src}
      alt={alt}
      width={250}
      height={250}
      unoptimized={true}
    />
  </div>
);

type ProfileHeaderProps = { name: string; role: string; avatar: string };

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  role,
  avatar,
}) => (
  <div className="flex flex-row md:flex-col items-center md:items-start w-full gap-2 md:gap-4">
    <Avatar src={avatar} alt={`${name}'s profile`} />
    <div className="flex flex-col items-start">
      <h1 className="md:mt-2 text-lg md:text-xl font-bold text-primary dark:text-primary-dark">
        {name}
      </h1>
      <h2 className="text-sm font-medium ">{role}</h2>
    </div>
  </div>
);

type ProfileBioProps = { bio: string };

const ProfileBio: React.FC<ProfileBioProps> = ({ bio }) => (
  <p className="mt-2 text-left text-sm ">{bio}</p>
);

type ProfileLinksProps = {
  links: {
    href: string;
    label: string;
    icon: React.ReactNode;
    active: boolean;
    to: string;
  }[];
};

const ProfileLinks: React.FC<ProfileLinksProps> = ({ links }) => (
  <div className="mt-4 flex flex-col space-y-1.5 border-t pt-3 border-zinc-300 dark:border-zinc-600 ">
    {links
      .filter((link) => link.active)
      .map(({ href, label, icon, to }) => (
        <a
          key={href}
          target="_blank"
          className=" flex items-center gap-2 group"
          href={href}
          title={`Visit my ${to}`}
          aria-label={`Visit my ${to}`}
        >
          {icon}
          <span className="text-sm duration-200 ease-linear text-muted dark:text-muted-dark group-hover:text-primary group-hover:dark:text-primary-dark">
            /{label}
          </span>
        </a>
      ))}
  </div>
);

type ProfileCardProps = {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  contactLink: string;
  links: {
    href: string;
    label: string;
    icon: React.ReactNode;
    active: boolean;
    to: string;
  }[];
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  avatar,
  bio,
  contactLink,
  links,
}) => (
  <div className="card p-4 md:p-6 md:flex-2/3 text-muted dark:text-muted-dark">
    <ProfileHeader name={name} role={role} avatar={avatar} />
    <ProfileBio bio={bio} />
    <div className="mt-4 mb-4">
      <Button label="Contact Me" href={contactLink} />
    </div>
    <ProfileLinks links={links} />
  </div>
);

export { Avatar, ProfileHeader, ProfileBio, ProfileLinks, ProfileCard };
