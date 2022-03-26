import tw from 'tailwind-styled-components';

const Text = tw.p`
text-2xl
`;
const ButtonsContainer = tw.div`
flex 
gap-4 
justify-end
`;
const Button = tw.button`
py-2 
px-2 
w-28 
border-[1px] 
border-gray-600 
transition 
duration-300 
ease-in-out 
hover:bg-gray-900 
hover:text-white 
`;

export { Text, ButtonsContainer, Button };
