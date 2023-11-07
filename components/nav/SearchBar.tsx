import { Input } from "@nextui-org/react";
import { SearchIcon } from "./icons/SearchIcon";
import { CloseFilledIcon } from "./icons/CloseFilledIcon";
import { Kbd } from "@nextui-org/react";

export default function SearchBar() {
  return (
    <div className="text-white shadow-lg">
      <Input
        //   label="Search"
        isClearable
        radius="none"
        classNames={{
          label: "dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            //   "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            //   "bg-default-200/50",
            //   "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            //   "hover:bg-default-200/70",
            //   "dark:hover:bg-default/70",
            //   "group-data-[focused=true]:bg-default-200/50",
            //   "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
          
        }}
        placeholder="Type to search..."
        startContent={
          <SearchIcon className="dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }

      />
    </div>
  );
}
