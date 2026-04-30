import { BadgeCheckIcon } from "@/assets/icons/badge-check";
import { SecurityIcon } from "@/assets/icons/security-icon";
import { LeftSection } from "@/components/login/left-section";
import { RightSection } from "@/components/login/right-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <>
      <div className="bg-gray-300 h-screen flex justify-between">
        <LeftSection/>

        <RightSection/>
      </div>
    </>
  );
}
