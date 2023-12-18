import useStorage from "@/hooks/useStorage";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"

export const UserDropdown = () => {
  const userData = useStorage().getItem("user-data", 'local')
  const pathname = usePathname()
  const storage = useStorage()
  const router = useRouter()
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [isUserArtist, setIsUserArtist] = useState(true);
  const [swithUser, setSwithUser] = useState(false);

  const doLogout = async () =>{
    storage.removeItem('user-data', 'local')
    storage.removeItem('token', 'local')
    setIsUserLogin(false)
    router.push('/')
  }

  useEffect(() => {
    if (userData) setIsUserLogin(true)
    if (userData?.certified) setIsUserArtist(true)
    if (pathname?.includes("dashboard")) setSwithUser(true)
  }, [userData, pathname])
  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Avatar
            as="button"
            color="secondary"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="User menu actions"
      // onAction={(actionKey) => console.log({ actionKey })}
      >
        {
          (!isUserArtist && isUserLogin) ?
            <DropdownItem
              key="arist_dashboard"
              color="secondary"
              className="flex flex-col justify-start w-full items-start"
              textValue="Switch to Artist Dashboard"
            >
              <Link href="/request_form">
                <p>Request as < br /> Artist Dashboard</p>
              </Link>
            </DropdownItem> :
            (
              (isUserArtist && !swithUser && isUserLogin) ?
                <DropdownItem
                  key="arist_dashboard"
                  color="secondary"
                  className="flex flex-col justify-start w-full items-start"
                  textValue="Switch to Artist Dashboard"
                >
                  <Link href="/dashboard">
                    <p>Swich to <br /> Artist Dashboard</p>
                  </Link>
                </DropdownItem> :
                <DropdownItem className="hidden"></DropdownItem>
            )
        }

        {
          swithUser ?
            <DropdownItem
              key="swith_to_user"
              color="secondary"
              className="flex flex-col justify-start w-full items-start"
              textValue="Request as Artist Dashboard"
            >
              <Link href="/">
                <p>Swith To< br /> User Dashboard</p>
              </Link>

            </DropdownItem> :
            <DropdownItem className="hidden"></DropdownItem>
        }
        <DropdownItem key="settings" textValue="My Setting" >My Settings</DropdownItem>
        <DropdownItem key="team_settings" textValue="Team Setting" >Team Settings</DropdownItem>
        <DropdownItem key="help_and_feedback" textValue="Help & Feedback" >Help & Feedback</DropdownItem>
        {
          !isUserLogin ?
            (<DropdownItem
              key="profile"
              className="flex flex-col justify-start w-full items-start"
              textValue="Sign in"
            >
              <Link href="/login">
                <p>Signed in as <br /> name@example.com</p>
              </Link>
            </DropdownItem>) : (
            <DropdownItem key="logout" color="danger" className="text-danger" textValue="Log out" onClick={doLogout}>
              Log Out
            </DropdownItem>)
        }
      </DropdownMenu>
    </Dropdown>
  );
};
