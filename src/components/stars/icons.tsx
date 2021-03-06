import { SVGProps } from "react"

export const StarIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="18"
    height="17"
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
      fill="currentColor"
    />
  </svg>
)

export const OtherIcon: React.FC = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle opacity="0.15" cx="14" cy="14" r="14" fill="#EEEEEE" />
    <path
      d="M13.9996 13.8186C11.9951 13.8186 10.3633 12.1867 10.3633 10.1822C10.3633 8.17773 11.9951 6.5459 13.9996 6.5459C16.0041 6.5459 17.636 8.17773 17.636 10.1822C17.636 12.1867 16.0041 13.8186 13.9996 13.8186V13.8186ZM13.9996 7.27313C12.395 7.27313 11.0905 8.57764 11.0905 10.1822C11.0905 11.7867 12.395 13.0914 13.9996 13.0914C15.6041 13.0914 16.9087 11.7867 16.9087 10.1822C16.9087 8.57764 15.6041 7.27313 13.9996 7.27313Z"
      fill="white"
    />
    <path
      d="M20.545 21.455H7.4541V21.0914C7.4541 17.4822 10.3904 14.5459 13.9996 14.5459C17.6087 14.5459 20.545 17.4822 20.545 21.0914V21.455ZM8.19505 20.7278H19.8087C19.6223 17.6868 17.086 15.2733 13.9996 15.2733C10.9133 15.2733 8.38148 17.6868 8.19505 20.7278V20.7278Z"
      fill="black"
    />
  </svg>
)
