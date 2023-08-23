import { IconTypes } from "@/types/navigation";

const calendar = ({ className, fill }: IconTypes) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill={fill || 'none'}
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path d="M4.16667 18.3334C3.70833 18.3334 3.31583 18.17 2.98917 17.8434C2.6625 17.5167 2.49945 17.1245 2.5 16.6667V5.00002C2.5 4.54169 2.66333 4.14919 2.99 3.82252C3.31667 3.49585 3.70889 3.3328 4.16667 3.33335H5V2.47919C5 2.24308 5.08 2.04863 5.24 1.89585C5.4 1.74308 5.59778 1.66669 5.83333 1.66669C6.06945 1.66669 6.2675 1.74669 6.4275 1.90669C6.5875 2.06669 6.66722 2.26446 6.66667 2.50002V3.33335H13.3333V2.47919C13.3333 2.24308 13.4133 2.04863 13.5733 1.89585C13.7333 1.74308 13.9311 1.66669 14.1667 1.66669C14.4028 1.66669 14.6008 1.74669 14.7608 1.90669C14.9208 2.06669 15.0006 2.26446 15 2.50002V3.33335H15.8333C16.2917 3.33335 16.6842 3.49669 17.0108 3.82335C17.3375 4.15002 17.5006 4.54224 17.5 5.00002V16.6667C17.5 17.125 17.3367 17.5175 17.01 17.8442C16.6833 18.1709 16.2911 18.3339 15.8333 18.3334H4.16667ZM4.16667 16.6667H15.8333V8.33335H4.16667V16.6667ZM4.16667 6.66669H15.8333V5.00002H4.16667V6.66669Z" fill="black"/>
  </svg>
);

export default calendar;
