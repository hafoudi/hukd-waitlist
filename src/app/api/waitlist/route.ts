import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalide.' },
        { status: 400 }
      );
    }

    // Replace this URL with your actual Loops API endpoint
    // Documented at https://loops.so/docs/api-reference/contacts/create
    const response = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.LOOPS_API_KEY}`,
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const data = await response.json();
      console.error('Loops Error:', data);
      return NextResponse.json(
        { error: 'Erreur lors de l\'inscription.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Erreur serveur.' },
      { status: 500 }
    );
  }
}
