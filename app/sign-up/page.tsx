import { SignUp } from "@clerk/nextjs";
import { AuthLayout } from "@/components/auth/auth-layout";

export default function SignUpPage() {
  return (
    <AuthLayout
      heading="Create your account"
      tagline="Start diagramming with Ghost AI in minutes."
    >
      <SignUp />
    </AuthLayout>
  );
}