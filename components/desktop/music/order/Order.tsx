import React from "react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";

import { orders } from "./orderdata";
import { OrderIcon } from "./OrderIcon";

export default function Order() {
  const [value, setValue] = React.useState(new Set([]));

  return (
    <div className="w-full my-4">
      <p className="text-small text-default-600">Order: {value}</p>
      <Select
        startContent={<OrderIcon />}
        aria-hidden="true"
        tabIndex={0}
        aria-labelledby="order"
        placeholder="Select order"
        variant="bordered"
        selectedKeys={value}
        className="max-w-xs"
        onSelectionChange={(e : any) => setValue(e.target.value)}
        defaultSelectedKeys={["all_time"]}
        id="order"
        aria-checked="false"
      >
        {orders.map((order) => (
          <SelectItem
            key={order.value}
            value={order.value}
            role="checkbox"
            aria-checked="false"
            tabIndex={0}
            aria-labelledby="order"
          >
            {order.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
