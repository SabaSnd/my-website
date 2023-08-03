import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

// TODO: should be added to config file
export const YouTubeLink =
  'https://www.youtube.com/channel/UCMsxbz4QS32ZqIrMSNcMH7Q'
export const GitHubLink = 'https://github.com/SabaSnd'
export const LinkedIn = 'https://www.linkedin.com/in/saba-safarnezhad'
const TwitterLink = 'https://twitter.com/Saba__snd'

export default function SocialFollow() {
  return (
    <div className="flex items-baseline space-x-3 justify-center  ">
      {/* <a target="_blank" rel="noreferrer" href={YouTubeLink}>
        <FaYoutube className="h-10 w-10 socialIcon" />
      </a> */}
      <a target="_blank" rel="noreferrer" href={GitHubLink}>
        <FaGithub className="h-10 w-10 socialIcon" />
      </a>
      <a target="_blank" rel="noreferrer" href={LinkedIn}>
        <FaLinkedinIn className="h-10 w-10 socialIcon" />
      </a>
      <a target="_blank" rel="noreferrer" href={TwitterLink}>
        <FaTwitter className="h-10 w-10 socialIcon" />
      </a>
    </div>
  )
}
