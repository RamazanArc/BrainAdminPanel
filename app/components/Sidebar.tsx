"use client";
import {
  FaUserAstronaut,
  FaFilter,
  FaCriticalRole,
  FaSlidersH,
  FaImage,
} from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoHomeSharp, IoCall } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { useState } from "react";
import { FaRankingStar, FaUsersBetweenLines } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { RiSurveyLine } from "react-icons/ri";
import { MdNotificationsActive, MdGrade } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import Link from "next/link";

const Dashboard = () => {
  const [active, setActive] = useState(true);

  function toggleSidebar() {
    setActive(!active);
  }

  return (
    <div className="flex min-h-screen">
      <aside
        className={`
        transition-all duration-300
        flex flex-col items-center justify-between
        ${active ? "w-64" : "w-20"}
      `}
      >
        <div className="p-4 w-full space-y-6">
          <div className="flex items-center justify-between">
            <img
              className={`
              ${active ? "block" : "hidden"}
              w-10 h-10
            `}
              src="/assets/brain.jpg"
            />
            <label
              className={`
              ${active ? "block" : "hidden"}
              w-full h-full pl-4
            `}
            >
              Brain Admin Panel
            </label>
            <button className="p-3 rounded-xl0" onClick={toggleSidebar}>
              <IoIosMenu className="h-6 w-6 rounded-md hover:bg-blue-400 hover:text-white" />
            </button>
          </div>

          <div className="space-y-3">
            <Link
              className="flex w-full p-3 rounded-xl hover:bg-blue-400 hover:text-white"
              href={"/home"}
            >
              <IoHomeSharp className="h-6 w-6" />
              <span
                className={`
                ml-3
                ${active ? "block" : "hidden"}
              `}
              >
                Home
              </span>
            </Link>

            <Link
              className="flex w-full p-3 rounded-xl hover:bg-blue-400 hover:text-white "
              href={"/products"}
            >
              <FaFilter className="h-6 w-6" />
              <span
                className={`
                ml-3
                ${active ? "block" : "hidden"}
              `}
              >
                Ürün Filtreleri
              </span>
            </Link>

            <Link
              className="flex w-full p-3 rounded-xl hover:bg-blue-400 hover:text-white"
              href={"/yarisma"}
            >
              <FaRankingStar className="h-6 w-6" />
              <span
                className={`
                ml-3
                ${active ? "block" : "hidden"}
              `}
              >
                Yarışma Tipleri
              </span>
            </Link>

            <Link
              className="flex w-full p-3 rounded-xl hover:bg-blue-400 hover:text-white"
              href={"/churn"}
            >
              <IoCall className="h-6 w-6" />
              <span
                className={`
                ml-3
                ${active ? "block" : "hidden"}
              `}
              >
                Churn Arama
              </span>
            </Link>

            <Link
              className="flex w-full p-3 rounded-xl hover:bg-blue-400 hover:text-white"
              href={"/call"}
            >
              <BiSolidPhoneCall className="h-6 w-6" />
              <span
                className={`
                ml-3
                ${active ? "block" : "hidden"}
              `}
              >
                Call
              </span>
            </Link>
            <Link
              className="flex w-full p-3 rounded-xl hover:bg-blue-400 hover:text-white"
              href={"/anket"}
            >
              <RiSurveyLine className="h-6 w-6" />
              <span
                className={`
                ml-3
                ${active ? "block" : "hidden"}
              `}
              >
                Anket
              </span>
            </Link>
            <Link
              className="flex w-full p-3 rounded-xl hover:bg-blue-400 hover:text-white"
              href={"/disKullanici"}
            >
              <FaUsersBetweenLines className="h-6 w-6" />
              <span
                className={`
                ml-3
                ${active ? "block" : "hidden"}
              `}
              >
                Dış Kullanıcılar
              </span>
            </Link>
            <Link
              className="flex w-full p-3 rounded-xl hover:bg-blue-400 hover:text-white"
              href={"/roller"}
            >
              <FaCriticalRole className="h-6 w-6" />
              <span
                className={`
                ml-3
                ${active ? "block" : "hidden"}
              `}
              >
                Roller
              </span>
            </Link>
            <Link
              className="flex w-full p-3 rounded-xl hover:bg-blue-400 hover:text-white"
              href={"/slider"}
            >
              <FaSlidersH className="h-6 w-6" />
              <span
                className={`
                ml-3
                ${active ? "block" : "hidden"}
              `}
              >
                Slider
              </span>
            </Link>
            <Link
              className="flex w-full p-3 rounded-xl hover:bg-blue-400 hover:text-white"
              href={"/bildirim"}
            >
              <MdNotificationsActive className="h-6 w-6" />
              <span
                className={`
                ml-3
                ${active ? "block" : "hidden"}
              `}
              >
                Bidirim Gönder
              </span>
            </Link>
            <Link
              className="flex w-full p-3 rounded-xl hover:bg-blue-400 hover:text-white"
              href={"/duyurular"}
            >
              <TfiAnnouncement className="h-6 w-6" />
              <span
                className={`
                ml-3
                ${active ? "block" : "hidden"}
              `}
              >
                Duyurular
              </span>
            </Link>
            <Link
              className="flex w-full p-3 rounded-xl hover:bg-blue-400 hover:text-white"
              href={"/puan"}
            >
              <MdGrade className="h-6 w-6" />
              <span
                className={`
                ml-3
                ${active ? "block" : "hidden"}
              `}
              >
                Puan İşlemleri
              </span>
            </Link>
            <Link
              className="flex w-full p-3 rounded-xl hover:bg-blue-400 hover:text-white"
              href={"/uzman"}
            >
              <FaImage className="h-6 w-6" />
              <span
                className={`
                ml-3
                ${active ? "block" : "hidden"}
              `}
              >
                Görsel Uzman Atama
              </span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between w-full h-16 px-3 py-2 ">
          <div
            className={`
            w-full space-x-3
            ${active ? "flex" : "hidden"}
          `}
          >
            <FaUserAstronaut className="h-10 w-10 rounded-xl" />
            <div className="flex flex-col items-left justify-center">
              <span className="text-sm">Ramazan Arıcı</span>
              <span className="text-xs">Stajyer</span>
            </div>
          </div>

          <Link
            className="p-3 rounded-xl hover:bg-blue-400 hover:text-white "
            href={"/login"}
          >
            <MdLogout className="h-6 w-6" />
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
