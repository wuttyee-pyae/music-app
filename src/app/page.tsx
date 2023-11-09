import PopularMusic from "@/components/atrist/PopularMusic";
// import UsersPage from "@/components/uers/UsersPage";
import { Input, Link, Navbar, NavbarContent, Button } from "@nextui-org/react";
import CadPlayList from "../../components/yoursplaylist/CadPlayList"

export default function Leading({}) {
  return (
    <div className="drop-shadow-xl">
      <div className="">
        <div className="pt-6">
          <div className="mb-4 wapper mx-4">
            <Link
              href="/"
              color="foreground"
              className="text-xl hover:font-bold hover:underline mb-6"
            >
              Yours PlayList
            </Link>
            <div className="grid grid-cols-3 gap-4 xl:grid-cols-6 md:grid-cols-5">
              <CadPlayList />
              <CadPlayList />
              <CadPlayList />
              <CadPlayList />
              <CadPlayList />
              <CadPlayList />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
