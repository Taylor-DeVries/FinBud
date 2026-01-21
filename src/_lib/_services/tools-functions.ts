type ToolboxShowListType = {
  showTfsaCalculator: boolean;
  showFhsaCalculator: boolean;
  showAllocationCalculator: boolean;
  showLink: boolean;
};

function toolboxShow(
  currentNodeId?: number,
  currentNodeLink?: string
): ToolboxShowListType {
  if (currentNodeId === undefined) currentNodeId = 0;

  const toolboxShowList: ToolboxShowListType = {
    showTfsaCalculator: false,
    showFhsaCalculator: false,
    showAllocationCalculator: false,
    showLink: false,
  };

  switch (currentNodeId) {
    case 4:
      toolboxShowList.showTfsaCalculator = true;
      toolboxShowList.showAllocationCalculator = true;
      break;
    case 23:
      toolboxShowList.showTfsaCalculator = true;
      toolboxShowList.showAllocationCalculator = true;
      break;
    case 14:
      toolboxShowList.showFhsaCalculator = true;
      toolboxShowList.showAllocationCalculator = true;
      break;
    case 31:
      toolboxShowList.showFhsaCalculator = true;
      toolboxShowList.showAllocationCalculator = true;
      break;
    case 8:
      toolboxShowList.showAllocationCalculator = true;
      break;
    case 17:
      toolboxShowList.showAllocationCalculator = true;
      break;
    case 9:
      toolboxShowList.showAllocationCalculator = true;
      break;
    case 28:
      toolboxShowList.showAllocationCalculator = true;
      break;
    case 7:
      toolboxShowList.showAllocationCalculator = true;
      break;
    default:
      toolboxShowList.showAllocationCalculator = false;
      toolboxShowList.showTfsaCalculator = false;
      toolboxShowList.showFhsaCalculator = false;
      break;
  }

  if (currentNodeLink !== undefined) {
    toolboxShowList.showLink = true;
  }

  return toolboxShowList;
}

export { toolboxShow };
