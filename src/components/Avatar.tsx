import Image from 'next/image';

interface AvatarProps {
  src?: string | null;
}
const Avatar = ({ src }: AvatarProps) => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Airbnb"
      src={src || '/placeholder.jpg'}
    />
  );
};
export default Avatar;
