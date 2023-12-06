'use client'
import React from "react";
import Image from "next/image";
import { Card, CardFooter, Button } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Recommended(props: any) {
  const {data:artistsList,pathname} = props
  
  
  return (
    <div className="pt-6">
      <div className="mb-4 wapper mx-4 pb-4">
        <h3 className="title mb-2">Recommended Artists</h3>
        <div className="grid grid-cols-3 gap-4 xl:grid-cols-7 md:grid-cols-5">

          {artistsList.map((data: any) => (
            <Link href={`/${pathname}/${data.id}`} id="recommended_artists_id" key={data.id} className="block">
              <Card isFooterBlurred radius="lg" className="border-none" >
                <Image
                  className="rounded-lg"
                  alt="..."
                  src={data.picture}
                  style={{ objectFit: "cover" }}
                  width={200}
                  height={200}
                  // layout="responsive"
                  suppressHydrationWarning

                />
                {data.released == false &&
                  <CardFooter className="justify-between overflow-hidden py-1 absolute bottom-1">
                    <Button
                      className="text-tiny text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full"
                      variant="flat"
                      color="default"
                      radius="lg"
                      size="sm"
                    >
                      Notify me
                    </Button>
                  </CardFooter>
                }
              </Card>
              <div className="artist_list_name my-2">{data.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
