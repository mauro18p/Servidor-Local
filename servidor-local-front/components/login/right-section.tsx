import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const RightSection = () => {
  return (
    <div className="bg-blue-300 w-1/2 flex flex-col justify-center">
      <Card className="h-full flex flex-col justify-center px-14 gap-16">
        <CardHeader>
          <span className="text-5xl font-bold ">Login</span>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label className="">Email</Label>
              <Input type="text" placeholder="example@email.com" className="py-2 text-lg h-10" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="">Password</Label>
              <Input type="password" placeholder="Your password ..." className="h-15 py-2 text-lg h-10" />
            </div>
            <Button className="h-15 bg-[#13A4EC] roundede-md text-white w-full py-3 drop-shadow-lg drop-shadow-gray-200">
              Login
            </Button>
          </div>
          <div>
            <span>Don´t have an account yet?</span>
            <Link href="/registro" className="text-[#13A4EC] font-semibold">
              Create Account
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
