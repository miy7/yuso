import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { SignOutButton } from "@/components/sign-out-button"

export default async function HomePage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) redirect("/sign-in")

  return (
    <main className="page-shell">
      <section className="hero-card" aria-labelledby="welcome-title">
        <div className="topbar"><p className="eyebrow">Yuso Matcha</p><SignOutButton /></div>
        <h1 id="welcome-title">ยินดีต้อนรับ, {session.user.name}</h1>
        <p className="lede">ระบบจัดการร้านมัทฉะพร้อมใช้งานสำหรับทีมของคุณ</p>
        <div className="role-pill">บทบาท: {String((session.user as { role?: string }).role || "STAFF")}</div>
      </section>
    </main>
  )
}
