import { FaCalculator, FaWrench } from 'react-icons/fa';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { SpeedDialIcon } from '@mui/material';
import FhsaCalculatorComponent from '@/_components/Calculator-Component/FHSA/FhsaCalculatorComponent';

export default function Toolbox() {
  const handleCalculatorClick = () => {
    console.log('Calculator clicked');
  };

  const actions = [
    {
      icon: (
        <FaCalculator size={35} className="text-light_blue dark:text-[#444]" />
      ),
      name: 'TFSA Calculator',
    },
    {
      icon: (
        <FaCalculator size={35} className="text-light_blue dark:text-[#444]" />
      ),
      name: 'FHSA Calculator',
    },
    {
      icon: (
        <FaCalculator size={35} className="text-light_blue dark:text-[#444]" />
      ),
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
            tooltipTitle={action.name}
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
            }}
            onClick={handleCalculatorClick}
          />
        ))}
      </SpeedDial>{' '}
    </div>
  );
}
