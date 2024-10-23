//shadcn imports
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface IProfileAvatar {
  src?: string;
  height?: number;
  width?: number;
}
export default function ProfileAvatar({ src, height, width }: IProfileAvatar) {
  return (
    <Avatar>
      <AvatarImage
        width={width || 28}
        height={height || 28}
        src={src || 'https://github.com/shadcn.png'}
        alt='@shadcn'
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
