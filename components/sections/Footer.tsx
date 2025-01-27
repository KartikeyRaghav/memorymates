import { IconHome } from "@tabler/icons-react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillPlusCircle,
  AiFillRead,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineGlobal,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mt-20 mb-10 px-20">
      <hr className="mt-8" />
      <div className="mt-8 flex justify-evenly flex-col md:flex-row items-center">
        <div className="h-full flex flex-col space-y-2">
          <a href="/#home" className="w-fit">
            <div className="flex w-fit items-center hover:text-green-500">
              <IconHome className="h-7 w-7" />
              <div className="ml-2 text-[1.5rem]">Home</div>
            </div>
          </a>
          <a href="/#english" className="w-fit">
            <div className="flex w-fit items-center hover:text-green-500">
              <AiFillRead className="h-7 w-7" />
              <div className="ml-2 text-[1.5rem]">English</div>
            </div>
          </a>
          <a href="/#maths" className="w-fit">
            <div className="flex w-fit items-center hover:text-green-500">
              <AiFillPlusCircle className="h-7 w-7" />
              <div className="ml-2 text-[1.5rem]">Maths</div>
            </div>
          </a>
          <a href="/#geography" className="w-fit">
            <div className="flex w-fit items-center hover:text-green-500">
              <AiOutlineGlobal className="h-7 w-7" />
              <div className="ml-2 text-[1.5rem]">Geography</div>
            </div>
          </a>
        </div>
        <div className="h-full flex flex-col space-y-2 mt-7 md:mt-0">
          <a href="/#" className="w-fit">
            <div className="flex w-fit items-center hover:text-green-500">
              <AiFillInstagram className="h-7 w-7" />
              <div className="ml-2 text-[1.5rem]">Instagram</div>
            </div>
          </a>
          <a href="/#" className="w-fit">
            <div className="flex w-fit items-center hover:text-green-500">
              <AiFillYoutube className="h-7 w-7" />
              <div className="ml-2 text-[1.5rem]">Youtube</div>
            </div>
          </a>
          <a href="/#" className="w-fit">
            <div className="flex w-fit items-center hover:text-green-500">
              <AiFillTwitterCircle className="h-7 w-7" />
              <div className="ml-2 text-[1.5rem]">Twitter</div>
            </div>
          </a>
          <a
            href="https://github.com/KartikeyRaghav"
            target="_blank"
            className="w-fit"
          >
            <div className="flex w-fit items-center hover:text-green-500">
              <AiFillGithub className="h-7 w-7" />
              <div className="ml-2 text-[1.5rem]">Github</div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
