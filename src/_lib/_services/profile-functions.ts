'use server'
import {put,head, HeadBlobResult} from '@vercel/blob';
import {auth0} from '@/_lib/auth0';

export async function exportToBlob(file:Blob, fileName:string) {
    // upload file name to db


    // upload to blob storage
  const blob = await put(`${fileName}`, file,{
          access:'public',
          token: `${process.env.BLOB_READ_WRITE_TOKEN}`
        })
}


export async function importFromBlob(fileUrl:string):Promise<HeadBlobResult> {
    const response = await head(fileUrl, {
        token: `${process.env.BLOB_READ_WRITE_TOKEN}`
      });

    return response;
}

export async function getBlobUrl(fileName:string):Promise<string | null> {
    try{
    const response = await importFromBlob(fileName);
    return response.url;
    }catch{
        return null;
    }
    
}

export async function generateProfilePictureUrl():Promise<string> {
     const session = await auth0.getSession();
    const authid= session.user.sub;
    return `${authid}_profile-picture.jpg`;
}