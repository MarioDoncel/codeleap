import tw from 'tailwind-styled-components';

const Container = tw.div`
border-[1px] 
border-gray-600
`;
const Content = tw.div`
px-8 
py-6 
flex 
flex-col 
gap-4
`;
const Info = tw.div`
text-gray-400 
flex 
items-center 
justify-between 
gap-4 
ssm:text-lg
`;
const Text = tw.p`
ssm:text-lg
`;
export { Container, Content, Info, Text };
