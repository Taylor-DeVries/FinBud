import { TypeAnimation } from 'react-type-animation';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function TitleText() {
  const { user, isLoading } = useUser();
  if (isLoading) {
    return (
      null
    );
  }
  const message = user?.name
    ? `Welcome Back, ${user.name}!`
    : 'Hi! I’m Fin, your Virtual Finance Buddy. I’m here to guide you through every stage of your personal finance journey.';
  return (
    <TypeAnimation
      key={message}
      sequence={[message, 1000]}
      wrapper="p"
      speed={75}
      cursor={false}
      repeat={0}
      preRenderFirstString={false}
    />
  );
}