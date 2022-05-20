import { useMemo } from "react";

export const usePost = (list, term) => {
    const sortedPosts = useMemo(() => {
        if (term) {
            return list.filter(item => {
                return item.title.toLowerCase().includes(term.toLowerCase()) 
            })
        }

        return list
    }, [list, term])

    return sortedPosts
}

export const useSortedPosts = (posts, selected) => {
    const getSortedPosts = useMemo(() =>  {

        if (selected) {
            return [...posts].sort((a, b) => a[selected].localeCompare(b[selected]))
        }

        return posts
    }, [selected, posts] )
    
    return getSortedPosts
}

