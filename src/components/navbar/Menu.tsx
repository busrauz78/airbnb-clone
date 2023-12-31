'use client';
import useClickOutside from '@/hooks/useClickOutside';
import useRegisterModal from '@/hooks/useRegisterModal';
import React, { useCallback, useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const registerModal = useRegisterModal();
  useClickOutside({ ref: menuRef, handler: () => setIsOpen(false) });

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3
        px-4 rounded-full hover-bg-neutral-100 transition cursor-pointer"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="
            p-4
            md:py-1
            md:px-2
            border
            border-neutral-200
            flex flex-row
            items-center
            gap-3
            rounded-full cursor-pointer
            hover:shadow-md
            transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm"
        >
          <MenuItem label="Login" onClick={() => {}} />
          <MenuItem label="Sign up" onClick={registerModal.onOpen} />
        </div>
      )}
    </div>
  );
};
export default Menu;
