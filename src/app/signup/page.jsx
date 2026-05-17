"use client"
import { FcGoogle } from "react-icons/fc";
import { Card, Separator } from "@heroui/react";

import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import GoogleSignUpButton from "@/components/GoogleSignUpButton";

const SignUpPage = () => {
    const router = useRouter();
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        
        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password, 
            image: userData.image,
        });
        if(data){
            toast.success("SignUp Successful! 🎉");
            router.push("/");
        }
        if(error){
            toast.error(error.message);
        }
    }
    return (
        <div className="max-w-7xl mx-auto my-20">
            <div className="text-center my-3">
                <h1 className="text-2xl font-bold">Create Account</h1>
                <p>Start your adventure with Wanderlust</p>
            </div>
            <Card className="border rounded-xl p-10">
                <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">
                    <TextField isRequired name="name" type="text">
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                        <FieldError />
                    </TextField>

                    <TextField name="image" type="url">
                        <Label>Image URL</Label>
                        <Input placeholder="Image url" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
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
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>
                    <div className="flex justify-center gap-2">
                        <Button className={" w-full bg-cyan-500"} type="submit">
                            Create Account
                        </Button>
                    </div>
                </Form>
                <div className="flex justify-center items-center gap-3">
                    <Separator />
                    <div className="whitespace-nowrap"> Or sign up with </div>
                    <Separator />
                </div>
                <div>
                    <GoogleSignUpButton></GoogleSignUpButton>
                </div>
            </Card>
        </div>
    );

};

export default SignUpPage;