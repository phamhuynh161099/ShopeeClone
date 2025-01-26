import Button from "@/components/Button";
import Input from "@/components/Input";
import React from "react";
import { Link } from "react-router-dom";

const AsideFilter = () => {
  return (
    <>
      <div className="py-4">
        <Link to="/" className="flex items-center font-bold">
          <svg viewBox="0 0 4 7" className="w-3 h-4 fill-current">
            <polygon points="4 3.5 0 0 0 7"></polygon>
          </svg>
          Tat ca danh muc
        </Link>
        <div className="bg-gray-300 h-[1px] my-4"></div>
        <ul>
          <li className="py-2 pl-2">
            <Link to="/" className="relative px-2 text-orange font-semibold">
              <svg
                viewBox="0 0 4 7"
                className="w-2 h-2 absolute fill-orange top-1 left-[-10px]"
              >
                <polygon points="4 3.5 0 0 0 7"></polygon>
              </svg>
              Thoi trang nam
            </Link>
            <li className="py-2 pl-2">
              <Link to="/" className="relative px-2">
                Thoi trang nam
              </Link>
            </li>
          </li>
        </ul>

        <Link to="/" className="flex items-center font-bol mt-4 uppercase">
          <svg viewBox="0 0 4 7" className="w-3 h-4 fill-current">
            <polygon points="4 3.5 0 0 0 7"></polygon>
          </svg>
          Bo loc tim kiem
        </Link>

        <div className="bg-gray-300 h-[1px] my-4" />
        <div className="my-5">
          <div>Khoang gia</div>
          <form className="mt-2">
            <div className="flex items-start">
              <Input
                type="text"
                className="grow"
                name="from"
                classNameInput="p-1 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm"
              />

              <div className="mx-2 mt-2 shrink-0">~</div>
              <Input
                type="text"
                className="grow"
                name="to"
                classNameInput="p-1 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm"
              />
            </div>
            <Button className="w-full p-2 uppercase bg-orange text-white text-sm flex justify-center items-center">
              Ap Dung
            </Button>
          </form>
        </div>

        <div className="bg-gray-300 h-[1px] my-4" />
        <div className="text-sm">Danh Gia</div>
        <ul className="my-3">
          <li className="py-1 pl-2">
            <Link to="" className="flex items-center text-sm">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 text-yellow-900"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </>
                ))}
              <span>Tro len</span>
            </Link>
          </li>
        </ul>
        <div className="bg-gray-300 h-[1px] my-4" />
        <Button className="w-full bg-orange py-2 px-2 uppercase text-white">
          Xoa tat ca
        </Button>
      </div>
    </>
  );
};

export default AsideFilter;
