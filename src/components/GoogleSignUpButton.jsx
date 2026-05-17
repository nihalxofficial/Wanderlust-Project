"use client"

import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const GoogleSignUpButton = () => {

    const handleGoogleSignUp = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <Button
            onClick={handleGoogleSignUp}
            variant="outline"
            className="w-full"
        >
            <FcGoogle />
            Sign in with Google
        </Button>
    );
};

export default GoogleSignUpButton;