//assets imports
import logo from '@/../public/assets/images/loginSuccess.png';
import ResponseViews from '@/views/Responses';

export default function LinkExpiredPage() {
  return (
    <ResponseViews
      headerText='You Are Login Successfully'
      paraText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
      logo={logo}
    />
  );
}
