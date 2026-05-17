"use client";

import GoogleSignUpButton from "@/components/GoogleSignUpButton";
import { authClient } from "@/lib/auth-client";
import { Card, Separator } from "@heroui/react";
import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LoginPage = () => {
    const router = useRouter();
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            // rememberMe: true,
        });
        console.log(data);
        if(data){
            toast.success("Login Successful! 🎉");
            router.push("/");
        }
        if(error){
            toast.error(error.message);
        }
    }
    return (
        <div className="max-w-7xl mx-auto my-20">
            <div className="text-center my-3">
                <h1 className="text-2xl font-bold">Login</h1>
                <p>Start your adventure with Wanderlust</p>
            </div>
            <Card className="border rounded-xl p-7">
                <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                    </TextField>
                    <div className="flex justify-center gap-2">
                        <Button className={" w-full bg-cyan-500"} type="submit">
                            Login
                        </Button>
                    </div>
                </Form>

                <div className="flex justify-center items-center gap-3">
                    <Separator />
                    <div className="whitespace-nowrap"> Or sign up with </div>
                    <Separator />
                </div>
                <div>
                    <GoogleSignUpButton/>
                </div>
            </Card>
        </div>
    );
};

export default LoginPage;