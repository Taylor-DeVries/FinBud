import { FaCalculator, FaWrench, FaLink, FaBullseye } from 'react-icons/fa';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles'
import TfsaCalculatorComponent from '@/_components/calculator-component/tfsa/tfsa-calculator-component';
import FhsaCalculatorComponent from '@/_components/calculator-component/fhsa/fhsa-calculator-component';
import AllocationCalculatorComponent from '@/_components/calculator-component/allocation/allocation-calculator-component';
import links from '@/_lib/_data/constants/links.json';
import { QuizLink } from '@/_lib/_data/types/types';
import { toolboxShow } from '@/_lib/_services/tools-functions';
type ToolboxProps = {
  historyArray: number[];
  darkmode?: boolean;
};

export default function Toolbox({ historyArray, darkmode }: ToolboxProps) {
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

  const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
   '& .MuiSpeedDial-actions': {
    gap: '8px',                 
  },

  
}))


  const currentNodeId = historyArray[historyArray.length - 1];
  const Links = links.links as QuizLink[];
  const toolboxShowList = toolboxShow(currentNodeId);

  const currentActions = [];

  if (toolboxShowList.showTfsaCalculator) {
    currentActions.push({
      icon: <FaCalculator size={45} className="text-blue" />,
      name: 'TFSA Calculator',
      onClickModal: 'TFSA_modal',
    });
  }

  if (toolboxShowList.showFhsaCalculator) {
    currentActions.push({
      icon: <FaCalculator size={45} className="text-blue" />,
      name: 'FHSA Calculator',
      onClickModal: 'FHSA_modal',
    });
  }

  if (toolboxShowList.showAllocationCalculator) {
    currentActions.push({
      icon: <FaBullseye size={45} className="text-blue" />,
      name: 'Allocation Calculator',
      onClickModal: 'Allocation_modal',
    });
  }

  for (let i = 0; i < Links.length; i++) {
    if (Links[i].id == currentNodeId) {
      currentActions.push({
        icon: <FaLink size={45} className="text-blue" />,
        name: Links[i].link,
        onClickLink: Links[i].link,
      });
      break;
    }
  }

  const Defaultactions = [
    {
      icon: <FaCalculator className="text-blue" size={45} />,
      name: 'TFSA Calculator',
      onClickModal: 'TFSA_modal',
    },
    {
      icon: <FaCalculator className="text-blue" size={45} />,
      name: 'FHSA Calculator',
      onClickModal: 'FHSA_modal',
    },
    {
      icon: <FaBullseye className="text-blue" size={45} />,
      name: 'Allocation Calculator',
      onClickModal: 'Allocation_modal',
    },
    {
      icon: <FaLink className="text-blue" size={45} />,
      name: 'https://www.wealthsimple.com/en-ca/learn',
      onClickLink: 'https://www.wealthsimple.com/en-ca/learn',
    },
  ];

  const toolboxBackground = darkmode? '#333' : '#f8fafc';

  return (
    <div className=" sm:px-8 p-2 flex flex-row justify-start items-center gap-x-10 rounded-xl ">
      <ThemeProvider theme={theme}>
        <StyledSpeedDial
          ariaLabel="Toolbox SpeedDial"
          sx={{ zIndex: 1 }}
          FabProps={{
            sx: {
              width: 60, // change to your desired size
              height: 60,
              borderRadius: '12px',
              backgroundColor: toolboxBackground,
              '&:hover': {
                backgroundColor: toolboxBackground, // darker shade on hover
              },
            },
          }}
          icon={<FaWrench size={45} className="text-blue" />}
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
                      backgroundColor: toolboxBackground,
                      '&:hover': {
                        backgroundColor: toolboxBackground, // darker shade on hover
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
              />
            )
          )}
        </StyledSpeedDial>
      </ThemeProvider>

      <TfsaCalculatorComponent />
      <FhsaCalculatorComponent />
      <AllocationCalculatorComponent />
    </div>
  );
}
