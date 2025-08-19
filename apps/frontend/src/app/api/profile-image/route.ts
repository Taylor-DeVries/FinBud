import { NextRequest, NextResponse } from 'next/server';
import { getAccessToken } from '@auth0/nextjs-auth0';

export async function PUT(req: NextRequest) {
  try {
    const { imageData } = await req.json();
    if (!imageData || typeof imageData !== 'string') {
      return NextResponse.json({ message: 'Invalid image data' }, { status: 400 });
    }

    const token = await getAccessToken();
    const backendResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/client/profile-image`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token?.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ profileImage: imageData }),
    });

    const data = await backendResponse.json().catch(() => ({}));
    return NextResponse.json(data, { status: backendResponse.status });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to update profile image' }, { status: 500 });
  }
}


