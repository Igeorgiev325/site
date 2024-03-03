export function useLocation(halle: string, booth: string) {

    const getLocation = () => {
        return `${halle} ${booth}`
    }

    return {
        getLocation
    }
}