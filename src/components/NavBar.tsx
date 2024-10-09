//custom imports
import { Button } from './ui/button';

//Next Imports
import Image from 'next/image';

//Image imports
import logo from '../../public/assets/images/Group 60.png';

export default function NavBarComponent() {
  return (
    <>
      <div className='flex items-center justify-center fixed w-full'>
        <div className='w-[90%] h-[101px] flex items-center justify-between'>
          <div className='max-w-[209px] h-[38px] flex items-center justify-around'>
            <Image
              src={logo}
              width={38}
              height={18}
              alt='logo'
            ></Image>
            <h4 className='font-bold ml-2 '>Guilty Concessions</h4>
          </div>
          <div>
            <Button className='w-[127px] h-[36px] rounded-2xl  font-bold  shadow-both-custom'>
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
