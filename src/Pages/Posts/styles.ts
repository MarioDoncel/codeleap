import tw from 'tailwind-styled-components';

const Presentation = tw.div`
w-[100vw]
h-[100vh]
bg-white
absolute
bg-[url('/src/assets/codeleap_logo_black.svg')]
bg-[center]
bg-no-repeat
animate-presentation
opacity-0
ease-out
`;
const Container = tw.div`
flex
flex-col
min-h-full
mb-8
`;

const Main = tw.main`
px-10
mt-11
flex 
flex-col
gap-9
`;

export { Presentation, Container, Main };
