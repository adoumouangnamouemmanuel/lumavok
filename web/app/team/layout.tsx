import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team — Lumavok',
  description:
    'Meet the team behind Lumavok — a complementary group of young African builders specializing in software development, AI, design, and digital strategy.',
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
