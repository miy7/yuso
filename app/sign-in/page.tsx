import { AuthForm } from "@/components/auth-form"

export default function SignInPage() {
  return (
    <main className="page-shell auth-shell">
      <section className="hero-card auth-card" aria-labelledby="sign-in-title">
        <p className="eyebrow">Yuso Matcha</p>
        <h1 id="sign-in-title">เข้าสู่ระบบ</h1>
        <p className="lede">จัดการร้านมัทฉะของคุณอย่างเป็นระบบ</p>
        <AuthForm />
      </section>
    </main>
  )
}
