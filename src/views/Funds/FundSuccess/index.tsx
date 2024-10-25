import HeaderText from "@/components/HeaderText";
import SuccessMessage from "@/components/SuccessMessage";

export default function FundSuccessView(){
    return <div className="w-full h-full flex flex-col items-center justify-center">
    <HeaderText headerText="You are adding funds to:" />
    <SuccessMessage msg="Completed" email="email@example.com"/>
    </div>
}