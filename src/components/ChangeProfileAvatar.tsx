import ProfileAvatar from './ProfileAvatar';

export default function ChangeProfileAvatar() {
  return (
    <>
      {' '}
      <ProfileAvatar
        height={76}
        width={76}
      />
      <p className='text-customPurple text-[14px]'>Change Profile Photo</p>
    </>
  );
}
