"use client"

import { useOptimistic } from "react";

const Comment = [
    "Hi there ",
    "How are you"
]

function UserComments() {
    const [optimisticComments, addOptimistic] = useOptimistic(Comment, (state: string[], newValue: string) => {
        return [...state, newValue];
    });
    return (
        <div>
            {optimisticComments.map((c, index) => (
                <p key={index}>{c}</p>
            ))}
        </div>
    )
    export default UserComments;