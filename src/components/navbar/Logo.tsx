import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      alt="Airbnb Logo"
      className="hidden md:block cursor-pointer"
      width="100"
      height="100"
      src="/logo.png"
    />
  );
};
export default Logo;
