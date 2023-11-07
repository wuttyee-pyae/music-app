import React from "react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";

import { orders } from "./orderdata";
import { OrderIcon } from "./OrderIcon";

export default function Order() {
  const [value, setValue] = React.useState(new Set([]));

  return (
    <div className="w-full mt-4">
      <p className="text-small text-default-600">Order: {value}</p>
      <Select
        startContent={<OrderIcon />}
        aria-hidden="true"
        tabindex="0"
        aria-labelledby="order"
        placeholder="Select order"
        variant="bordered"
        selectedKeys={value}
        className="max-w-xs"
        onSelectionChange={setValue}
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
            tabindex="0"
            aria-labelledby="order"
          >
            {order.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}