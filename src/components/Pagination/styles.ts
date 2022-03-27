import tw from 'tailwind-styled-components';

const Nav = tw.nav`
  border-t 
  border-gray-300
  px-4 
  flex 
  items-center 
  justify-between 
  sm:px-0 mt-4
  font-medium
`;
const PreviousPageContainer = tw.div`
  -mt-px 
  w-0 
  flex-1 
  flex 
  
`;
const NextPageContainer = tw.div`
  -mt-px 
  w-0 
  flex-1 
  flex 
  justify-end
`;
const ChangePageButton = tw.button`
  border-t-2 
  border-transparent 
  pt-4
  pr-1 
  inline-flex 
  items-center
  text-sm 
  font-medium 
  text-gray-500
  hover:text-gray-700 
  hover:border-gray-500
`;
const styleArrowIcon = `
  h-5 
  w-5 
  text-gray-400
`;
const stylePageNumber = `
  border-transparent
  text-gray-500
  hover:text-gray-700
  hover:border-gray-500
  border-t-2 
  pt-4 
  px-4 
  inline-flex 
  items-center 
  text-sm 
  font-medium
`;
const stylePageCurrent = `
  border-indigo-500 
  text-indigo-600 
  border-t-2 
  pt-4 
  px-4 
  inline-flex 
  items-center
  text-sm font-medium
`;

const Dots = tw.span`
  border-transparent 
  text-gray-500 
  border-t-2 
  pt-4 
  px-4 
  inline-flex 
  items-center 
  text-sm 
  font-medium
`;

export {
  Dots,
  Nav,
  ChangePageButton,
  NextPageContainer,
  PreviousPageContainer,
  styleArrowIcon,
  stylePageCurrent,
  stylePageNumber,
};
