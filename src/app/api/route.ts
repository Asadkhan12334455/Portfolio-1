import { NextResponse } from 'next/server';
import client from "@/sanity/lib/sanity";  

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, email, phone, subject, message } = data;

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const doc = {
      _type: 'contact',
      fullName,
      email,
      phone,
      subject,
      message,
    };

    await client.create(doc);

    return new NextResponse(JSON.stringify({ success: 'Message sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to send message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
