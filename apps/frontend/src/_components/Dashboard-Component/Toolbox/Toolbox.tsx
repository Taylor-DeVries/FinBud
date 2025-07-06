import { FaCalculator, FaWrench } from 'react-icons/fa';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { SpeedDialIcon } from '@mui/material';
// import { Tooltip } from 'react-tooltip';
import Tooltip from '@mui/material/Tooltip';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import TfsaCalculatorComponent from '@/_components/Calculator-Component/TFSA/TfsaCalculatorComponent';
import TfsaCalculatorButton from '@/_components/Calculator-Component/TFSA/TfsaCalculatorButton';
import FhsaCalculatorComponent from '@/_components/Calculator-Component/FHSA/FhsaCalculatorComponent';
import FhsaCalculatorButton from '@/_components/Calculator-Component/FHSA/FhsaCalculatorButton';
import LinkButton from '@/_components/Link-Component/LinkComponent';
import links from '@/_data/constants/links.json';
import { QuizLink } from '@/_data/types/types';
type ToolboxProps = {
  historyArray: number[];
};

export default function Toolbox({ historyArray }: ToolboxProps) {
  const handleCalculatorClick = () => {
    console.log('Calculator clicked');
  };

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
      icon: <TfsaCalculatorButton dashboard={true} />,
      name: 'TFSA Calculator',
    });
  }

  if (currentNodeId == 14) {
    currentActions.push({
      icon: <FhsaCalculatorButton dashboard={true} />,
      name: 'FHSA Calculator',
    });
  }

  for (let i = 0; i < Links.length; i++) {
    if (Links[i].id == currentNodeId) {
      currentActions.push({
        icon: <LinkButton url={Links[i].link} dashboard={true} />,
        name: Links[i].link,
      });
      break;
    }
  }

  const Defaultactions = [
    {
      icon: <TfsaCalculatorButton dashboard={true} />,
      name: 'TFSA Calculator',
    },
    {
      icon: <FhsaCalculatorButton dashboard={true} />,
      name: 'FHSA Calculator',
    },
    {
      icon: (
        <LinkButton
          url="https://www.wealthsimple.com/en-ca/spend"
          dashboard={true}
        />
      ),
      name: 'https://www.wealthsimple.com/en-ca/spend',
    },
    {
      icon: (
        <LinkButton
          url="https://www.wealthsimple.com/en-ca/self-directed-investing"
          dashboard={true}
        />
      ),
      name: 'https://www.wealthsimple.com/en-ca/self-directed-investing',
    },
  ];

  return (
    <div className="text-white sm:px-8 p-2 flex flex-row justify-start items-center gap-x-10 rounded-xl">
      {/* <FaWrench size={35} /> */}
      {/* <div className="bg-white text-light_blue p-2 rounded-xl">
          <FaCalculator size={35} />
        </div>
        <div className="bg-white text-light_blue p-2 rounded-xl">
          <FaCalculator size={35} />
        </div> */}

      <ThemeProvider theme={theme}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
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
                    },
                  },
                  tooltip: {
                    title: action.name,
                    arrow: true,
                    sx: {},
                    placement: 'top',
                  },
                }}
                onClick={handleCalculatorClick}
              />
            )
          )}
        </SpeedDial>{' '}
      </ThemeProvider>

      <TfsaCalculatorComponent />
      <FhsaCalculatorComponent />
    </div>
  );
}
