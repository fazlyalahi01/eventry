"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useDebounce from "../../hooks/useDebounce";

const Search = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleDeBounceSearch = useDebounce((term) => {
        const params = new URLSearchParams(searchParams.toString());
        if (term) {
            params.set('search', term);
        } else {
            params.delete('search');
        }
        router.push(`${pathname}?${params.toString()}`);
    }, 500)

    const handleSearch = (value) => {
        handleDeBounceSearch(value);
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