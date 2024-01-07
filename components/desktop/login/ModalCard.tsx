import React from "react";
import Image from "next/image";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Link,
} from "@nextui-org/react";
import MusicCover from "@/assets/images/crbt_lg.jpg";

export default function ModalCard(props: any, data: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {/* <Button onPress={onOpen}>Not! Log in</Button> */}
      <Modal
        backdrop="opaque" 
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size={"4xl"}
        placement={"center"}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="m-10">
                  <div className="grid grid-cols-2 gap-6 items-center">
                    <div>
                      <Image
                        src={data?.picture || MusicCover}
                        // src={MusicCover?.activeSong?.images?.coverart}
                        style={{ objectFit: "cover" }}
                        width={300}
                        height={300}
                        alt="Picture of the author"
                        className="aspect-square right-0 rounded-md"
                      />
                    </div>
                    <div>
                      <div className="gap-4 flex flex-col items-center">
                        <p className="text-white text-3xl text-bold">
                          Start listening with a free Yours account
                        </p>
                        <Button
                          radius="full"
                          className="bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg w-auto"
                        >
                          Sing up for free
                        </Button>
                        <Button
                          radius="full"
                          variant="bordered"
                          className="text-white shadow-lg w-auto"
                        >
                          Download App
                        </Button>
                        <p className="text-white">
                          Already have an account?{" "}
                          <Link href="/login" color="secondary">
                            Log in
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
