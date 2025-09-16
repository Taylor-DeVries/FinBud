'use client';

import { FaCalculator, FaLink, FaWrench } from 'react-icons/fa';
import TfsaCalculatorComponent from '@/_components/Calculator-Component/TFSA/TfsaCalculatorComponent';
import FhsaCalculatorComponent from '@/_components/Calculator-Component/FHSA/FhsaCalculatorComponent';
import links from '@/_data/constants/links.json';
import { QuizLink } from '@/_data/types/types';
import { Tooltip } from 'react-tooltip';

type ToolboxProps = {
  historyArray: number[];
};

export default function Toolbox({ historyArray }: ToolboxProps) {
  const currentNodeId = historyArray[historyArray.length - 1];
  const Links = links.links as QuizLink[];

  let currentActions: {
    icon: React.ReactNode;
    name: string;
    onClickModal?: string;
    onClickLink?: string;
  }[] = [];

  if (currentNodeId == 4 || currentNodeId == 23) {
    currentActions.push({
      icon: <FaCalculator className="text-blue" size={25} />,
      name: 'TFSA Calculator',
      onClickModal: 'TFSA_modal',
    });
  }

  if (currentNodeId == 14 || currentNodeId == 31) {
    currentActions.push({
      icon: <FaCalculator className="text-blue" size={25} />,
      name: 'FHSA Calculator',
      onClickModal: 'FHSA_modal',
    });
  }

  for (let i = 0; i < Links.length; i++) {
    if (Links[i].id == currentNodeId) {
      currentActions.push({
        icon: <FaLink className="text-blue" size={25} />,
        name: Links[i].link,
        onClickLink: Links[i].link,
      });
      break;
    }
  }

  const Defaultactions = [
    {
      icon: <FaCalculator className="text-blue" size={25} />,
      name: 'TFSA Calculator',
      onClickModal: 'TFSA_modal',
    },
    {
      icon: <FaCalculator className="text-blue" size={25} />,
      name: 'FHSA Calculator',
      onClickModal: 'FHSA_modal',
    },
    {
      icon: <FaLink className="text-blue" size={25} />,
      name: 'Wealthsimple Spend',
      onClickLink: 'https://www.wealthsimple.com/en-ca/spend',
    },
    {
      icon: <FaLink className="text-blue" size={25} />,
      name: 'Wealthsimple Investing',
      onClickLink: 'https://www.wealthsimple.com/en-ca/self-directed-investing',
    },
  ];

  const actionsToShow = currentActions.length === 0 ? Defaultactions : currentActions;

  return (
    <div className="sm:px-8 p-2 flex flex-row flex-wrap justify-start items-center gap-x-4 gap-y-2 rounded-xl">
      {actionsToShow.map((action, index) => (
        <div
          key={index}
          className="w-12 h-12 rounded-xl bg-light_blue_bg dark:bg-[#333] m-1 flex items-center justify-center"
        >
          <button
            className="sm:flex shadow-none btn border-none"
            onClick={() =>
              action.onClickModal
                ? (document.getElementById(action.onClickModal)! as HTMLDialogElement).showModal()
                : action.onClickLink
                ? window.open(action.onClickLink)
                : null
            }
            data-tooltip-id={`toolbox-action-${index}`}
          >
            {action.icon}
          </button>

          <Tooltip id={`toolbox-action-${index}`} place="top">
            {action.name}
          </Tooltip>
        </div>
      ))}

      <TfsaCalculatorComponent />
      <FhsaCalculatorComponent />
    </div>
  );
}
