'use server'
import {put,head} from '@vercel/blob';
import {auth0} from '@/_lib/auth0';
import { getUserInfoApi, updateUserInfoUserProfilePictureApi,updateUserInfoUserNameApi } from '@/_lib/_services/call-api';

export async function exportToBlob(file:Blob) {
    try{
        const fileName = await generateProfilePictureUrl();
    // upload file name to db
        await updateUserInfoUserProfilePictureApi(fileName);

    // upload to blob storage
  const blob = await put(`${fileName}`, file,{
          access:'public',
          token: `${process.env.BLOB_READ_WRITE_TOKEN}`
        })
    }catch(error){
        console.error('Error uploading to blob storage:', error);
    }
}


export async function importFromBlob():Promise<string> {
    try{

        const userInfo = await getUserInfoApi();
        const fileName = userInfo?.userProfilePicture;

        if(!fileName){
            return null;
        }

        const response = await head(fileName, {
            token: `${process.env.BLOB_READ_WRITE_TOKEN}`
        });

        return response.url;
    }catch{
        return null;
    }
}


export async function generateProfilePictureUrl():Promise<string> {
     const session = await auth0.getSession();
    const authid= session.user.sub;
    const date = new Date();
    const dateTimeString = date.toISOString(); 
    return `${authid}/profile-picture.jpg_${dateTimeString}`;
}


export async function getUserName():Promise<string | null> {
    try{
        const userInfo = await getUserInfoApi();
        return userInfo?.userName || null;
    }catch{
        return null;
    }
}

export async function updateUserName(newName:string):Promise<void> {
    try{
        await updateUserInfoUserNameApi(newName);
    }catch(error){
        console.error('Error updating user name:',error);
    }
}