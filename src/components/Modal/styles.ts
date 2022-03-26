import tw from 'tailwind-styled-components';

const Container = tw.div`
fixed 
top-0 
bottom-0 
left-0 
right-0
overflow-hidden 
flex 
items-center 
justify-center 
bg-gray-700 
bg-opacity-70 
px-10
`;
const Content = tw.div`
bg-white 
px-9 
pt-9 
pb-6 
w-full 
mx-4 
flex 
flex-col 
gap-12
`;
export { Container, Content };
