import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import GoogleSignIn from "./GoogleSignIn";
import { useAuth } from "./AuthContext";
import { ModeToggle } from "@/components/mode-toggle";

const UserAuth = () => {
    const { uid } = useAuth();
    return (
        <div className="container min-h-screen flex items-center justify-center"> 
        <Card className='w-fit h-auto '>
            <CardHeader className="flex flex-row justify-between items-center">
                <h2 className="text-lg font-bold pr-5">Sign in with Google</h2>
                <ModeToggle />
            </CardHeader>
            <CardContent className='space-y-4'>
                {uid ? <p>uid : {uid}</p> : <p>Sign in to view uid</p>}
                <GoogleSignIn />
            </CardContent>
        </Card>
        </div>
    );
};

export default UserAuth;