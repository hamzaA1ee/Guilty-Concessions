import PrimaryButton from "@/components/Button/button";
import HeaderText from "@/components/HeaderText";
import PrimaryInput from "@/components/Input/PrimaryInput";

export default function ChangePassword(){
    return <>
    <div className="w-full flex flex-col gap-5">
    <HeaderText headerText="Change Password" />
    <PrimaryInput placeHolder="Current Password"/>
    <PrimaryInput placeHolder="New Password"/>
    <PrimaryInput placeHolder="Confirm New Password"/>
    <PrimaryButton text="Change Password" className="rounded-3xl bg-customPurple"/>
    </div>
    </>
}