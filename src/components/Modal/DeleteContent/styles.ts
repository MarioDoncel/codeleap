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
button-secondary
`;

export { Text, ButtonsContainer, Button };
