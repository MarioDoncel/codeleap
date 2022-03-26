import tw from 'tailwind-styled-components';

const Container = tw.div`
border-[1px] 
border-gray-600 
px-7 
py-6
`;
const Title = tw.h2`
text-2xl 
font-bold
`;
const Form = tw.form`
flex 
flex-col 
gap-6
`;
const InputContainer = tw.div`
flex 
flex-col 
gap-2 
`;
const styleTextFields = `
border-gray-500 
border-[1px] 
px-2 
py-1 
rounded-md
`;
const InputSubmit = tw.input`
py-2 
px-7 
text-white 
bg-gray-900
cursor-pointer
`;

export { Container, Form, InputContainer, InputSubmit, Title, styleTextFields };
