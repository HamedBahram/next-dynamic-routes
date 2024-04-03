import User from '@/components/user'
import Users from '@/components/users'

export default function Page({ params }: { params: { slug?: string[] } }) {
  const { slug } = params

  if (!slug) {
    return <Users />
  }

  return <User slug={slug} />
}
