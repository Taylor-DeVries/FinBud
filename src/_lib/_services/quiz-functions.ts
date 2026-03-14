import {
  getHistoryApi,
  setHistoryApi,
  createHistoryApi,
  getUserAchievementsApi,
  createUserAchievementDefaultApi,
  updateUserAchievementStatusApi,
  updateUserAchievementInfoApi,
  getUserAchievementEntryByAchievementIdApi,
} from '@/_lib/_services/call-api';
import {
  Node,
  HistoryState,
  UserAchievements,
  UserAchievement,
} from '@/_lib/_data/types/types';
import { UserAchievementStatus } from '@/_lib/_data/types/status';
import dashboardAchievements from '@/_lib/_data/constants/dashboard-achievements.json';

export function findNodeTest(
  id: number,
  currentNode: Node,
  rootNode: Node
): Node {
  // Run first to see if child node is linked
  for (const response of currentNode.responses) {
    if (response.id == id) {
      return response;
    }
  }
  //If not found, run the recursive find from root, should never return null
  return findNodeRoot(id, rootNode) as Node;
}

//Recursive find node from root
function findNodeRoot(id: number, currentNode: Node): Node | null {
  let returnNode: Node | null = null;

  if (currentNode.id == id) {
    returnNode = currentNode;
  } else {
    for (const response of currentNode.responses) {
      returnNode = findNodeRoot(id, response);
      if (returnNode != null) break;
    }
  }

  return returnNode;
}

export function isPrevAvailable(currentNode: Node, index: number): boolean {
  if (currentNode?.text?.[index - 1] !== undefined) {
    return true;
  }
  return false;
}

export function isNextAvailable(currentNode: Node, index: number): boolean {
  if (currentNode?.text?.[index + 1] !== undefined) {
    return true;
  }
  return false;
}

export function historyArrayToHistoryString(historyArray: number[]): string {
  let historyString = '';
  for (let i = 0; i < historyArray.length; i++) {
    historyString += historyArray[i].toString() + ',';
  }
  historyString.slice(0, -1);
  return historyString;
}

export function historyStringToHistoryArray(historyString: string): number[] {
  const historyArray = historyString
    .split(',')
    .filter((id) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      id != null;
      return id;
    })
    .map((id) => Number(id));
  return historyArray;
}

export async function getHistoryFunction(): Promise<HistoryState> {
  try {
    const historyArray = await getHistoryApi();
    return {
      loading: true,
      historyArray: historyArray,
      error: '',
      initialState: false,
    };
  } catch (error) {
    let account = {
      loading: true,
      historyArray: [0],
      error: error.toString(),
      initialState: false,
    };
    if (account.error == 'AxiosError: Request failed with status code 404') {
      account = await createHistoryFunction([0]);
      account.initialState = true;
    }
    return account;
  }
}

export async function setHistoryFunction(
  historyArray: number[]
): Promise<HistoryState> {
  try {
    await setHistoryApi(historyArray);

    return {
      loading: true,
      historyArray: historyArray,
      error: '',
      initialState: false,
    };
  } catch (error) {
    return {
      loading: true,
      historyArray: historyArray,
      error: error.toString(),
      initialState: false,
    };
  }
}

export async function createHistoryFunction(
  historyArray: number[]
): Promise<HistoryState> {
  try {
    await createHistoryApi(historyArray);

    return {
      loading: true,
      historyArray: historyArray,
      error: '',
      initialState: false,
    };
  } catch (error) {
    return {
      loading: true,
      historyArray: historyArray,
      error: error.toString(),
      initialState: false,
    };
  }
}

async function getUserAchievementFunction(): Promise<UserAchievements> {
  try {
    const userAchievementEntries = await getUserAchievementsApi();
    return {
      error: '',
      userAchievements: userAchievementEntries,
    };
  } catch (error) {
    return {
      error: error.toString(),
      userAchievements: [],
    };
  }
}

export async function createUserAchievementDefaultFunction(
  achievementId: number,
  achievementStatus
): Promise<UserAchievements> {
  try {
    await createUserAchievementDefaultApi(achievementId, achievementStatus);
    return await getUserAchievementFunction();
  } catch (error) {
    return {
      error: error.toString(),
      userAchievements: [],
    };
  }
}

export async function getSyncedUserAchievementFunction(): Promise<UserAchievements> {
  await syncUserAchievementFunction();

  return await getUserAchievementFunction();
}

export async function syncUserAchievementFunction(): Promise<void> {
  const storedUserAchievements = await getUserAchievementFunction();
  const userHistory = await getHistoryFunction();
  const userHistoryArray = userHistory.historyArray;
  const currentNode = userHistoryArray[userHistoryArray.length - 1];

  for (let i = 0; i < userHistoryArray.length; i++) {
    const achievementId = userHistoryArray[i];
    const userAchievementEntry = storedUserAchievements.userAchievements.find(
      (ua) => ua.achievementId == achievementId
    );

    if (!userAchievementEntry && isAchievementNode(achievementId)) {
      try {
        if (achievementId == currentNode) {
          await createUserAchievementDefaultApi(
            achievementId,
            UserAchievementStatus.INPROGRESS
          );
        } else {
          await createUserAchievementDefaultApi(
            achievementId,
            UserAchievementStatus.COMPLETED
          );
        }
      } catch (error) {
        console.error(
          'Error when creating default user acheivement for id:',
          achievementId,
          error
        );
      }
    }
  }
}

export async function updateUserAchievementStatusFunction(
  achievementId: number,
  newStatus: UserAchievementStatus
): Promise<UserAchievements> {
  try {
    await updateUserAchievementStatusApi(achievementId, newStatus);
    return await getUserAchievementFunction();
  } catch (error) {
    return {
      error: error.toString(),
      userAchievements: [],
    };
  }
}

export function isAchievementNode(nodeId: number): boolean {
  for (let i = 0; i < dashboardAchievements.achievements.length; i++) {
    const achievement = dashboardAchievements.achievements[i];
    if (achievement.id == nodeId) {
      return true;
    }
  }
  return false;
}

export async function updateUserAchievementInfoFunction(
  achievementId: number,
  progressValue: number,
  goalValue: number,
  booleanValue: number
): Promise<UserAchievement> {
  try {
    await updateUserAchievementInfoApi(
      achievementId,
      progressValue,
      goalValue,
      booleanValue
    );
    const entry = await getUserAchievementEntryByAchievementIdApi(
      achievementId
    );
    return {
      error: '',
      userAchievement: entry,
    };
  } catch (error) {
    return {
      error: error.toString(),
      userAchievement: null,
    };
  }
}
