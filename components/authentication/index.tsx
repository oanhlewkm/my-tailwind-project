"use client";

import Image from "next/image";
import "../../app/globals.css";
import Login from "./login";
import Register from "./register";
import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

type AuthenticationProps = {
  actionType: "login" | "register";
};

export default function Authentication({ actionType }: AuthenticationProps) {
  const [currentAction, setCurrentAction] = useState(actionType);
  const [openModal, setOpenModal] = useState(false);

  const handleClose = (e: any) => {
    if (e.target.id === "wrapped") {
      setOpenModal(false);
      setCurrentAction("login");
    }
  };

  return (
    <>
      {actionType === "login" ? (
        <button
          onClick={() => setOpenModal(true)}
          className="rounded-full px-4 py-1 border-slate-700 border border-solid hover:bg-violet-700 hover:text-white hover:border-violet-700"
        >
          Login
        </button>
      ) : actionType === "register" ? (
        <button
          className="rounded-full bg-violet-700	text-white border-violet-700 px-4 py-1 border-solid border hover:opacity-50"
          onClick={() => setOpenModal(true)}
        >
          Register
        </button>
      ) : null}
      {openModal && (
        <Transition appear show={openModal} as={Fragment}>
          <Dialog
            as="div"
            className="relative fixed inset-0 bg-gray-600 bg-opacity-50 h-full w-full flex items-center justify-center z-50"
            onClose={() => setOpenModal(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-x-hidden overscroll-contain px-4 md:px-8 pb-8">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel
                    className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all overflow-y-auto"
                    style={{
                      maxHeight: "70vh",
                      minHeight: 200,
                    }}
                  >
                    <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
                      <div className="flex flex-col text-center space-y-2.5">
                        <div className="flex flex-row items-center justify-center modal-logo">
                          <Image
                            src="https://static.myalbum.io/_static/logo.svg"
                            alt="logo"
                            width={115}
                            height={24}
                          />
                        </div>
                        <div
                          className="text-3xl"
                          style={{ color: "rgb(113, 83, 138)" }}
                        >
                          Welcome to MyAlbum
                        </div>
                      </div>
                    </Dialog.Title>
                    <div className="flex flex-col text-center space-y-2.5">
                      {currentAction === "login" ? (
                        <Login
                          setCurrentAction={setCurrentAction}
                          setOpenModal={setOpenModal}
                        />
                      ) : currentAction === "register" ? (
                        <Register
                          setCurrentAction={setCurrentAction}
                          setOpenModal={setOpenModal}
                        />
                      ) : null}
                      <div className="hr">Or continue with</div>
                      <div className="flex flex-row space-x-3 items-center justify-between pt-2">
                        <button
                          type="button"
                          className="w-full text-white bg-black font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
                        >
                          Apple
                        </button>
                        <button
                          type="button"
                          className="w-full text-white bg-blue-700 border-blue-700 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
                        >
                          Facebook
                        </button>
                        <button
                          type="button"
                          className="w-full text-white bg-red-500 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 border-red-500"
                        >
                          Google
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
}
