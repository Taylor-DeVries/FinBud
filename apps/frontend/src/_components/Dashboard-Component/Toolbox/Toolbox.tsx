import { FaCalculator, FaWrench } from 'react-icons/fa';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { SpeedDialIcon } from '@mui/material';
import FhsaCalculatorComponent from '@/_components/Calculator-Component/FHSA/FhsaCalculatorComponent';
// import { Tooltip } from 'react-tooltip';
import Tooltip from '@mui/material/Tooltip';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Toolbox() {
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

  const actions = [
    {
      icon: <FaCalculator size={35} className="text-white dark:text-[#444]" />,
      name: 'TFSA Calculator',
    },
    {
      icon: <FaCalculator size={35} className="text-white dark:text-[#444]" />,
      name: 'FHSA Calculator',
    },
    {
      icon: <FaCalculator size={35} className="text-white dark:text-[#444]" />,
      name: 'FHSA Calculator',
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
          icon={<FaWrench size={35} className=" text-white dark:text-[#444]" />}
          direction="right"
        >
          {actions.map((action) => (
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
          ))}
        </SpeedDial>{' '}
      </ThemeProvider>
    </div>
  );
}
