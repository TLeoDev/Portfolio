'use client';

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: 'https://www.linkedin.com/in/leo-tuaillon/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/TLeoDev',
    name: <RiGithubFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
            <Link href={icon.path} key={index} passHref legacyBehavior>
              <a target="_blank" rel="noreferrer noopener">
                <div className={`${iconsStyles}`}>{icon.name}</div>
              </a>
            </Link>
        );
      })}
    </div>
  )
      ;
      };

        export default Socials;
