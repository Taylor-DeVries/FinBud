import { FaCalculator, FaWrench, FaLink } from 'react-icons/fa';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import TfsaCalculatorComponent from '@/_components/Calculator-Component/TFSA/TfsaCalculatorComponent';
import FhsaCalculatorComponent from '@/_components/Calculator-Component/FHSA/FhsaCalculatorComponent';
import LinkButton from '@/_components/Link-Component/LinkComponent';
import links from '@/_data/constants/links.json';
import { QuizLink } from '@/_data/types/types';
type ToolboxProps = {
  historyArray: number[];
};

export default function Toolbox({ historyArray }: ToolboxProps) {
  const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: '#222',
            color: 'white',
            fontWeight: 'bold',
            border: '0px solid 0',
          },
          arrow: {
            color: '#222',
          },
        },
      },
    },
  });

  const currentNodeId = historyArray[historyArray.length - 1];
  const Links = links.links as QuizLink[];

  let currentActions = [];

  if (currentNodeId == 4 || currentNodeId == 23) {
    currentActions.push({
      icon: <FaCalculator size={45} className="" />,
      name: 'TFSA Calculator',
      onClickModal: 'TFSA_modal',
    });
  }

  if (currentNodeId == 14) {
    currentActions.push({
      icon: <FaCalculator size={45} className="" />,
      name: 'FHSA Calculator',
      onClickModal: 'FHSA_modal',
    });
  }

  for (let i = 0; i < Links.length; i++) {
    if (Links[i].id == currentNodeId) {
      currentActions.push({
        icon: <FaLink size={45} className="" />,
        name: Links[i].link,
        onClickLink: Links[i].link,
      });
      break;
    }
  }

  const Defaultactions = [
    {
      icon: <FaCalculator size={45} className="" />,
      name: 'TFSA Calculator',
      onClickModal: 'TFSA_modal',
    },
    {
      icon: <FaCalculator size={45} className="" />,
      name: 'FHSA Calculator',
      onClickModal: 'FHSA_modal',
    },
    {
      icon: <FaLink size={45} className="" />,
      name: 'https://www.wealthsimple.com/en-ca/spend',
      onClickLink: 'https://www.wealthsimple.com/en-ca/spend',
    },
    {
      icon: <FaLink size={45} className="" />,
      name: 'https://www.wealthsimple.com/en-ca/self-directed-investing',
      onClickLink: 'https://www.wealthsimple.com/en-ca/self-directed-investing',
    },
  ];

  return (
    <div className=" sm:px-8 p-2 flex flex-row justify-start items-center gap-x-10 rounded-xl">
      <ThemeProvider theme={theme}>
        <SpeedDial
          ariaLabel="Toolbox SpeedDial"
          sx={{ zIndex: 1 }}
          FabProps={{
            sx: {
              width: 60, // change to your desired size
              height: 60,
              borderRadius: '12px',
              backgroundColor: '#639db8',
              '&:hover': {
                backgroundColor: '#4a7f9e', // darker shade on hover
              },
            },
          }}
          icon={<FaWrench size={45} className=" text-white dark:text-[#444]" />}
          direction="right"
        >
          {(currentActions.length == 0 ? Defaultactions : currentActions).map(
            (action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                onClick={() => {
                  action.onClickModal
                    ? (
                        document.getElementById(
                          action.onClickModal
                        )! as HTMLDialogElement
                      ).showModal()
                    : action.onClickLink
                    ? window.open(action.onClickLink)
                    : null;
                }}
                slotProps={{
                  fab: {
                    sx: {
                      width: 60, // smaller child button size
                      height: 60,
                      borderRadius: '12px',
                      backgroundColor: '#639db8',
                      '&:hover': {
                        backgroundColor: '#4a7f9e', // darker shade on hover
                      },
                      margin: '0 4px', // spacing between buttons
                    },
                  },
                  tooltip: {
                    title: action.name,
                    arrow: true,
                    sx: {},
                    placement: 'top',
                  },
                }}
              />
            )
          )}
        </SpeedDial>
      </ThemeProvider>

      <TfsaCalculatorComponent />
      <FhsaCalculatorComponent />
    </div>
  );
}
