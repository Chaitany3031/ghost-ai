import { SignIn } from "@clerk/nextjs";
import { AuthLayout } from "@/components/auth/auth-layout";

export default function SignInPage() {
  return (
    <AuthLayout
      heading="Welcome back"
      tagline="Sign in to continue building with Ghost AI."
    >
      <SignIn />
    </AuthLayout>
  );
}