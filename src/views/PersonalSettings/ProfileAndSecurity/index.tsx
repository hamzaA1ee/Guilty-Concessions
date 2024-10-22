import PrimaryButton from "@/components/Button/button";
import HeaderText from "@/components/HeaderText";
import PrimaryInput from "@/components/Input/PrimaryInput";
import ProfileAvatar from "@/components/ProfileAvatar";

export default function ProfileAndSecurityView(){
    return<>
    <HeaderText headerText="Profile And Security" />
    <div className="w-full flex items-center gap-4">
        <ProfileAvatar height={76} width={76}/>
        <p className="text-customPurple text-[14px]">Change Profile Photo</p> {/*here comes the cloudinary component for uploading the images for changing*/}
    </div>
    <div className='flex items-center justify-evenly mt-4 gap-4 flex-wrap sm:flex-nowrap '>
        <PrimaryInput placeHolder='First Name' />
        <PrimaryInput placeHolder='Last Name' />
      </div>
      <PrimaryInput placeHolder='Email' className="mt-4" />
      <PrimaryInput placeHolder='Username' className="mt-4" />
      <PrimaryInput placeHolder='Phone Number'  className="mt-4"/>
      <PrimaryButton text="Update Profile" className="rounded-3xl bg-customPurple mt-8"/>
    </>
}