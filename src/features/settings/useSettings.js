import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export default function useSettings() {
    const {
        error,
        data: settings,
        isPending: isLoading,
    } = useQuery({
        queryKey: ["settings"],
        queryFn: getSettings,
    });

    return { isLoading, error, settings };
}
