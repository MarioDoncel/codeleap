import tw from 'tailwind-styled-components';

type TContainer = { $post: boolean };

const Container = tw.div<TContainer>`
border-[1px] 
border-gray-600 
px-7 
py-6
${({ $post }) => ($post ? 'p-0 border-none' : '')}
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

export { Container, Form, InputContainer, InputSubmit, Title };
