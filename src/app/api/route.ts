// src/app/api/contact/route.ts (for Next.js 13+ API routes)
import { NextResponse } from 'next/server';
import client from "@/sanity/lib/sanity";  // Sanity client import karna hoga

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, email, phone, subject, message } = data;

    // Sanity mein data save karne ka process
    const doc = {
      _type: 'contact',  // Sanity schema type (contact)
      fullName,
      email,
      phone,
      subject,
      message,
    };

    // Save the data to Sanity
    await client.create(doc);

    return NextResponse.json({ success: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 });
  }
}
