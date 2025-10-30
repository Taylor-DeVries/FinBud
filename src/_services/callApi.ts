'use server';
import { UserAchievementEntry } from '@/_data/types/types';
import { UserAchievementStatus } from '@/_data/types/status';
import { auth0 } from '@/lib/auth0';
import axios from 'axios';

export async function getHistoryApi(): Promise<number[]> {
  const { token } = await auth0.getAccessToken();
  const response = await axios.get(`${process.env.USER_HISTORY_API_URL}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  return response.data.userHistory;
}

export async function setHistoryApi(history: number[]): Promise<void> {
  const { token } = await auth0.getAccessToken();

  await axios.put(
    `${process.env.USER_HISTORY_API_URL}`,
    { userHistory: history },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return;
}

export async function createHistoryApi(history: number[]): Promise<void> {
  const { token } = await auth0.getAccessToken();

  await axios.post(
    `${process.env.USER_HISTORY_API_URL}`,
    { userHistory: history },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return;
}

export async function getUserAchievementsApi(): Promise<
  UserAchievementEntry[]
> {
  const { token } = await auth0.getAccessToken();
  const response = await axios.get(`${process.env.USER_ACHIEVEMENTS_API_URL}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  return response.data;
}

export async function createUserAchievementDefaultApi(
  achievementId: number,
  userAcheivementStatus: UserAchievementStatus
): Promise<void> {
  const { token } = await auth0.getAccessToken();
  const response = await axios.post(
    `${process.env.USER_ACHIEVEMENTS_API_URL}`,
    {
      achievementId: achievementId,
      userAchievementStatus: userAcheivementStatus,
      userAchievementProgressValue: 0,
      userAchievementGoalValue: 1, // Default goal value set to 1
      userAchievementBoolean: 1, // Default boolean value set to 1
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return;
}

export async function updateUserAchievementStatusApi(
  achievementId: number,
  userAchievementStatus: UserAchievementStatus
): Promise<void> {
  const { token } = await auth0.getAccessToken();
  const response = await axios.put(
    `${process.env.USER_ACHIEVEMENTS_API_URL}`,
    {
      userAchievementStatus: userAchievementStatus,
      achievementId: achievementId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return;
}

export async function updateUserAchievementInfoApi(
  achievementId?: number,
  progressValue?: number,
  goalValue?: number,
  booleanValue?: number
): Promise<void> {
  let progressUpdate =
    progressValue != undefined
      ? {
          userAchievementProgressValue: progressValue,
        }
      : {};
  let goalUpdate =
    goalValue != undefined
      ? {
          userAchievementGoalValue: goalValue,
        }
      : {};
  let booleanUpdate =
    booleanValue != undefined
      ? {
          userAchievementBoolean: booleanValue,
        }
      : {};

  const updateBody = {
    achievementId: achievementId,
    ...progressUpdate,
    ...goalUpdate,
    ...booleanUpdate,
  };

  const { token } = await auth0.getAccessToken();
  const response = await axios.put(
    `${process.env.USER_ACHIEVEMENTS_API_URL}`,
    updateBody,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return;
}

export async function getUserAchievementEntryByAchievementIdApi(
  achievementId: number
): Promise<UserAchievementEntry | null> {
  const { token } = await auth0.getAccessToken();
  const response = await axios.get(
    `${process.env.USER_ACHIEVEMENTS_API_URL}/${achievementId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data;
}