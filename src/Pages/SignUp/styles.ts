import tw from 'tailwind-styled-components';

const Container = tw.div`
min-h-[100vh]
flex
items-center
justify-center
bg-gray-400
`;
const Main = tw.main`
px-7 
py-6
bg-white
min-w-[280px]
max-w-[500px]
w-[70vw]
`;
const Title = tw.h2`
text-2xl 
font-bold
mb-8
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

const InputSubmit = tw.input`
button-primary
${({ disabled }) => (disabled ? 'bg-gray-500 text-gray-200' : '')}
`;
export { Container, Main, InputContainer, InputSubmit, Form, Title };
