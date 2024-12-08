import React, { useEffect } from 'react'

export default function Register() {
    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("Register")
    return (
        <div>

        </div>
    )
}
