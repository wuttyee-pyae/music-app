import {
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Spacer,
  Switch,
} from "@nextui-org/react";
import React from "react";
import { genders } from "./genderdata.js";
const UserForm = () => {
  const [isSelected, setIsSelected] = React.useState(true);
  return (
    <div>
      <form>
        <div>
          <h1 className="text-white">Contact</h1>
          <Spacer y={4} />

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
            <div>
              <Input
                type="name"
                label="Name"
                placeholder="Enter your Name"
                variant="underlined"
              />
            </div>
            <div>
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                variant="underlined"
              />
            </div>
          </div>
          <Spacer y={4} />

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
            <div>
              <Input
                type="phone"
                label="Phone"
                placeholder="Enter your Phone Number"
                variant="underlined"
                className="text-white"
              />
            </div>
            <div className=" ">
              <Select
                label="Gender"
                placeholder="Select an Gender"
                variant="underlined"
                className="text-white"
              >
                {genders.map((gender) => (
                  <SelectItem key={gender.value} value={gender.value}>
                    {gender.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
          <Spacer y={4} />

          <div className="grid sm:grid-cols-3 grid-cols-1 gap-10">
            <div className=" ">
              <Select
                label="Date"
                placeholder="Date"
                variant="underlined"
                className="text-white"
              >
                {genders.map((gender) => (
                  <SelectItem key={gender.value} value={gender.value}>
                    {gender.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div>
              <Select
                label="Month"
                placeholder="Select an Month"
                variant="underlined"
                className="text-white"
              >
                {genders.map((gender) => (
                  <SelectItem key={gender.value} value={gender.value}>
                    {gender.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div className=" ">
              <Select
                label="Year"
                placeholder="Select an Year"
                variant="underlined"
                className="text-white"
              >
                {genders.map((gender) => (
                  <SelectItem key={gender.value} value={gender.value}>
                    {gender.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
        </div>
        <Spacer y={4} />

        <div className="my-4">
          <h1 className="text-white">Streaming</h1>
          <Spacer y={4} />
          <h5 className="text-white text-sm">
            Audio Quality (Premium feature)
          </h5>
          <Spacer y={4} />

          <hr />
          <RadioGroup color="secondary" defaultValue="normal" className="my-2 text-sm">
            <Radio value="normal">Normal (128 kb/s)</Radio>
            <Radio value="high">High (192 kb/s)</Radio>
            <Radio value="highest">Highest (320 kb/s)</Radio>
          </RadioGroup>
          <hr />
        </div>

        <div className="my-4">
          <h1 className="text-white">Account</h1>
          <Spacer y={4} />
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 text-white text-sm">Enable Browser Notifications</div>
            <div>
              <div className="flex justify-end">
                <Switch defaultSelected color="secondary" isSelected={isSelected} onValueChange={setIsSelected}>
                  <p className="text-small text-default-500">
                    Selected: {isSelected ? "Enable" : "Disable"}
                  </p>
                </Switch>
              </div>
            </div>
          </div>
          <Spacer y={4} />
          <div className="flex flex-row gap-4">
            <div className="col-span-2 text-white text-sm">Change password</div>
          </div>
          <Spacer y={4} />
          <div className="flex flex-row gap-4">
            <div className="col-span-2 text-white text-sm">Add new account</div>
          </div>
          <Spacer y={4} />
          <div className="flex flex-row gap-4">
            <div className="col-span-2 text-gray-400 text-sm">Terms and Conditions</div>
          </div>
          <Spacer y={4} />
          <div className="flex flex-row gap-4">
            <div className="col-span-2 text-gray-400 text-sm">Privacy Policy</div>
          </div>
          <Spacer y={4} />
          <div className="flex flex-row gap-4">
            <div className="col-span-2 text-gray-400 text-sm">Support</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
