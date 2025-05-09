import { getUser, isLoggedIn } from "./LoginHelper";

import { TypeAnimation } from 'react-type-animation';

export default function TitleText() {
  const user = getUser();


  const message = user?.name
    ? `Welcome Back, ${user.name}!`
    : 'Hi! I’m Fin, your Virtual Finance Buddy. I’m here to guide you through every stage of your personal finance journey.';
  return user !== undefined ? (
    <TypeAnimation
      sequence={[message, 1000]}
      wrapper="p"
      speed={75}
      cursor={false}
      repeat={0}
      preRenderFirstString={false}
    />
  ) : null;
}