"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Search = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
   
    const handleSearch = (value) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set('search', value);
        } else {
            params.delete('search');
        }
        router.push(`${pathname}?${params.toString()}`);
    }
    return (
        <input
            type="text"
            placeholder="Search..."
            className="bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
            onChange={(e) => handleSearch(e.target.value)}
        />
    );
}
export default Search;