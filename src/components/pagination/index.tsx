import React from "react"
import { PaginationContainer } from "./style"
const arrPagination: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arrPagination2: string[] = ["1", "2", "3", "4", "5", "..."]
const Next: React.FC = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.31002 7.20978C9.21732 7.30229 9.14377 7.41218 9.09359 7.53315C9.04341 7.65413 9.01758 7.78381 9.01758 7.91478C9.01758 8.04575 9.04341 8.17543 9.09359 8.2964C9.14377 8.41738 9.21732 8.52726 9.31002 8.61978L13.19 12.4998L9.31002 16.3798C9.12304 16.5668 9.018 16.8204 9.018 17.0848C9.018 17.3492 9.12304 17.6028 9.31002 17.7898C9.497 17.9768 9.7506 18.0818 10.015 18.0818C10.2794 18.0818 10.533 17.9768 10.72 17.7898L15.31 13.1998C15.4027 13.1073 15.4763 12.9974 15.5265 12.8764C15.5766 12.7554 15.6025 12.6257 15.6025 12.4948C15.6025 12.3638 15.5766 12.2341 15.5265 12.1132C15.4763 11.9922 15.4027 11.8823 15.31 11.7898L10.72 7.19978C10.34 6.81978 9.70002 6.81978 9.31002 7.20978Z"
      fill="#1B1B1B"
    />
  </svg>
)

const Prev: React.FC = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.69 17.7902C14.7827 17.6977 14.8562 17.5878 14.9064 17.4668C14.9566 17.3459 14.9824 17.2162 14.9824 17.0852C14.9824 16.9543 14.9566 16.8246 14.9064 16.7036C14.8562 16.5826 14.7827 16.4727 14.69 16.3802L10.81 12.5002L14.69 8.62022C14.877 8.43324 14.982 8.17965 14.982 7.91522C14.982 7.6508 14.877 7.3972 14.69 7.21022C14.503 7.02324 14.2494 6.9182 13.985 6.9182C13.7206 6.9182 13.467 7.02324 13.28 7.21022L8.68998 11.8002C8.59727 11.8927 8.52373 12.0026 8.47355 12.1236C8.42336 12.2446 8.39753 12.3743 8.39753 12.5052C8.39753 12.6362 8.42336 12.7659 8.47355 12.8868C8.52373 13.0078 8.59727 13.1177 8.68998 13.2102L13.28 17.8002C13.66 18.1802 14.3 18.1802 14.69 17.7902Z"
      fill="#1B1B1B"
    />
  </svg>
)
export const Pagination = () => {
  return (
    <PaginationContainer>
      <Prev />
      {arrPagination.map((item, index) => (
        <button
          className="cursor-pointer hidden md:block hover:opacity-70"
          key={index}
        >
          {item}
        </button>
      ))}
      {arrPagination2.map((item, index) => (
        <button
          className="block md:hidden cursor-pointer hover:opacity-70"
          key={index}
        >
          {item}
        </button>
      ))}
      <Next />
    </PaginationContainer>
  )
}