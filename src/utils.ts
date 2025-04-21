import { useEffect, useState } from "react";

export function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
}

export function slugify (text: string) {
    return text
      .normalize("NFD")                      // handle accents
      .replace(/[\u0300-\u036f]/g, "")       // remove accents
      .replace(/[^\w\s-]/g, '')              // remove non-word characters
      .trim()
      .replace(/\s+/g, '-')                  // replace spaces with -
      .toLowerCase();
}