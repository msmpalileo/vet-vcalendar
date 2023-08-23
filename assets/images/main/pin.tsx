import { IconTypes } from "@/types/navigation";

const pin = ({ className, fill }: IconTypes) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill={fill || 'none'}
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path d="M9.99992 10.8334C11.3806 10.8334 12.4999 9.71413 12.4999 8.33342C12.4999 6.9527 11.3806 5.83341 9.99992 5.83341C8.61921 5.83341 7.49992 6.9527 7.49992 8.33342C7.49992 9.71413 8.61921 10.8334 9.99992 10.8334Z" stroke="#9D9C9C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.99992 18.3334C13.3333 15.0001 16.6666 12.0153 16.6666 8.33342C16.6666 4.65152 13.6818 1.66675 9.99992 1.66675C6.31802 1.66675 3.33325 4.65152 3.33325 8.33342C3.33325 12.0153 6.66659 15.0001 9.99992 18.3334Z" stroke="#9D9C9C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default pin;
