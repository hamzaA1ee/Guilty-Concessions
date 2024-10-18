//shadcn imports
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface IProfileAvatar {
  src?: string;
}
export default function ProfileAvatar({ src }: IProfileAvatar) {
  return (
    <Avatar>
      <AvatarImage
        width={37}
        height={37}
        src={src || 'https://github.com/shadcn.png" alt="@shadcn'}
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
