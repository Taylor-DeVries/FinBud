'use server';
import { UserAchievementEntry, UserInfo } from '@/_lib/_data/types/types';
import { UserAchievementStatus } from '@/_lib/_data/types/status';
import { auth0 } from '@/_lib/auth0';
import axios from 'axios';

export async function getHistoryApi(): Promise<number[]> {
  const { token } = await auth0.getAccessToken();
  const response = await axios.get(`${process.env.FINBUD_API_URL}/api/UserHistory`, {
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
    `${process.env.FINBUD_API_URL}/api/UserHistory`,
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
    `${process.env.FINBUD_API_URL}/api/UserHistory`,
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
  const response = await axios.get(`${process.env.FINBUD_API_URL}/api/UserAchievement`, {
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
    `${process.env.FINBUD_API_URL}/api/UserAchievement`,
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
    `${process.env.FINBUD_API_URL}/api/UserAchievement`,
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
  const progressUpdate =
    progressValue != undefined
      ? {
          userAchievementProgressValue: progressValue,
        }
      : {};
  const goalUpdate =
    goalValue != undefined
      ? {
          userAchievementGoalValue: goalValue,
        }
      : {};
  const booleanUpdate =
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
    `${process.env.FINBUD_API_URL}/api/UserAchievement`,
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
    `${process.env.FINBUD_API_URL}/api/UserAchievement/${achievementId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data;
}

export async function getUserInfoApi(): Promise<UserInfo> {
  const { token } = await auth0.getAccessToken();
  const response = await axios.get(`${process.env.FINBUD_API_URL}/api/UserInfo`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  return response.data as UserInfo;
}

export async function updateUserInfoUserProfilePictureApi(
  userProfilePicture: string
): Promise<void> {
  const { token } = await auth0.getAccessToken();
  const body = {
    userProfilePicture: userProfilePicture,
  };
  await axios.put(
    `${process.env.FINBUD_API_URL}/api/UserInfo/userprofilepicture`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

}

export async function updateUserInfoUserNameApi(userName: string): Promise<void> {
  const { token } = await auth0.getAccessToken();
  const body = {
    userName: userName,
  };
  await axios.put(`${process.env.FINBUD_API_URL}/api/UserInfo/username`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
}