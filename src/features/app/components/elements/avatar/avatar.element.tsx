export interface AvatarProps {
  imgSrc?: string;
  title?: string | React.ReactElement;
  subtitle?: string | React.ReactElement;
  imgPlaceholderText?: string;
}

export const Avatar = ({
  imgSrc,
  title,
  subtitle,
  imgPlaceholderText = "AV",
}: AvatarProps) => {
  return (
    <div className="flex items-center space-x-3">
      {imgSrc ? (
        <img
          src={imgSrc}
          alt="avatar"
          className="h-10 w-10 rounded-full object-cover object-center"
        />
      ) : (
        <AvatarImgPlaceholder text={imgPlaceholderText} />
      )}
      <div className="flex flex-col justify-center text-ellipsis">
        {title && (
          <p className="text-ellipsis text-xs font-bold text-kera-blue-900">
            {title}
          </p>
        )}
        {subtitle && (
          <p className=" text-xs text-kera-blue-900/80">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

interface AvatarImgPlaceholderProps {
  text: string;
}

export const AvatarImgPlaceholder = ({ text }: AvatarImgPlaceholderProps) => {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-kera-yellow-600 pt-1">
      <p className="text-center font-bold text-kera-blue-900">{text}</p>
    </div>
  );
};
