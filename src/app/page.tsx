import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vitalii Ponomarov',
  description: 'Vitalii Ponomarov personal website',
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>VITALII PONOMAROV</h1>
    </main>
  );
}
