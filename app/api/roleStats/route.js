import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'db.json');

function getDb() {
  const data = fs.readFileSync(dbPath, 'utf-8');
  return JSON.parse(data);
}

export async function GET() {
  try {
    const db = getDb();
    return NextResponse.json(db.roleStats);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch role stats' }, { status: 500 });
  }
}

