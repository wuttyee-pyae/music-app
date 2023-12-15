import React, { ReactNode } from "react";
import { Card, CardBody, Link } from "@nextui-org/react";

export default function CardBox({
  data,
  status,
  Icon,
}: {
  data: any;
  status: string;
  Icon?: React.ReactElement;
}) {
  return (
    <Card className="p-2 w-full">
      <Link href={data.url}>
        <CardBody className="text-center justify-center">
          {status == "time" ? (
            <div>
              <p className="music_type">{data.title}</p>
              <p className={`text-2xl text-bold ${data.color}`}>
                {data.count || 0}
              </p>
            </div>
          ) : (
            <div>
              <p className={`text-2xl text-bold ${data.color}`}>
                {data.count || 0}
              </p>
              <div className="flex justify-center items-center">
                {Icon ? <Icon.type {...Icon.props} /> : <></>}
              </div>
              <p className="text-white">{data.title}</p>
            </div>
          )}
        </CardBody>
      </Link>
    </Card>
  );
}